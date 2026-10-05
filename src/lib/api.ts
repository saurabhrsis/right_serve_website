/**
 * Backend integration layer.
 *
 * The existing production API lives at https://backend.rightserveinfotechsystem.com
 * and exposes (at least) `POST /rsis/add-contact`.
 *
 * Strategy:
 *  1. Prefer a same-origin `/api` prefix. In development Vite proxies `/api` -> backend
 *     (see vite.config.ts); in production a reverse proxy / rewrite rule keeps it
 *     same-origin, which avoids CORS entirely.
 *  2. If VITE_API_BASE_URL is set, it is used first (useful when the backend sends
 *     permissive CORS headers).
 *  3. As a final fallback we try the absolute backend URL directly.
 */

const ENV_BASE = (import.meta.env?.VITE_API_BASE_URL as string | undefined)?.trim()
const ABSOLUTE_FALLBACK = 'https://backend.rightserveinfotechsystem.com'

const CANDIDATE_BASES = Array.from(
  new Set([ENV_BASE || '/api', ENV_BASE ? ABSOLUTE_FALLBACK : '/api', ABSOLUTE_FALLBACK].filter(Boolean)),
)

export const ENDPOINTS = {
  contact: '/rsis/add-contact',
  career: (import.meta.env?.VITE_CAREER_ENDPOINT as string | undefined) || '/rsis/add-career',
} as const

export type ContactPayload = {
  name: string
  email: string
  mobile?: string
  message: string
  /** Where the enquiry originated - used for marketing attribution. */
  source?: string
  /** Optional extra context (service name, page, campaign). */
  subject?: string
  company?: string
  /** UTM parameters captured from the landing URL. */
  utm?: Record<string, string>
}

export type ApiResult<T = unknown> = {
  ok: boolean
  status?: string
  message?: string
  data?: T
}

function collectUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const utm: Record<string, string> = {}
  ;['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'].forEach((key) => {
    const value = params.get(key)
    if (value) utm[key] = value
  })
  if (Object.keys(utm).length) {
    try {
      sessionStorage.setItem('rsis_utm', JSON.stringify(utm))
    } catch {
      /* storage unavailable - ignore */
    }
  } else {
    try {
      const stored = sessionStorage.getItem('rsis_utm')
      if (stored) Object.assign(utm, JSON.parse(stored) as Record<string, string>)
    } catch {
      /* ignore */
    }
  }
  return utm
}

async function postJson<T>(base: string, path: string, body: unknown, timeout = 15000): Promise<ApiResult<T>> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(`${base}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    })

    const text = await response.text()
    let payload: Record<string, unknown> = {}
    try {
      payload = text ? (JSON.parse(text) as Record<string, unknown>) : {}
    } catch {
      payload = { message: text }
    }

    const status = String(payload.status ?? '').toUpperCase()
    const ok = response.ok && (status === '' || status === 'SUCCESS' || status === 'OK')

    return {
      ok,
      status,
      message: (payload.message as string) || (ok ? 'Sent successfully' : `Request failed (${response.status})`),
      data: payload as T,
    }
  } catch (error) {
    const reason = error instanceof Error ? error.message : 'Network error'
    return { ok: false, message: reason }
  } finally {
    clearTimeout(timer)
  }
}

/**
 * Sends an enquiry to the backend, trying each candidate base until one succeeds.
 * Returns a result object - callers decide how to present success/failure.
 */
export async function submitContact(payload: ContactPayload): Promise<ApiResult> {
  const body = { ...payload, utm: payload.utm ?? collectUtmParams(), submittedAt: new Date().toISOString() }

  let lastResult: ApiResult = { ok: false, message: 'Unable to reach the server' }
  for (const base of CANDIDATE_BASES) {
    const result = await postJson(base, ENDPOINTS.contact, body)
    if (result.ok) return result
    lastResult = result
    // Only keep trying when the failure looks like a network/proxy problem.
    if (result.status === 'ERROR' || /invalid|required/i.test(result.message ?? '')) break
  }
  return lastResult
}

/** Career applications - posted as multipart so the resume file is uploaded. */
export async function submitCareerApplication(formData: FormData): Promise<ApiResult> {
  let lastResult: ApiResult = { ok: false, message: 'Unable to reach the server' }

  for (const base of CANDIDATE_BASES) {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 25000)
    try {
      const response = await fetch(`${base}${ENDPOINTS.career}`, { method: 'POST', body: formData, signal: controller.signal })
      const text = await response.text()
      let payload: Record<string, unknown> = {}
      try {
        payload = text ? (JSON.parse(text) as Record<string, unknown>) : {}
      } catch {
        payload = { message: text }
      }
      const status = String(payload.status ?? '').toUpperCase()
      const ok = response.ok && status !== 'ERROR'
      const result: ApiResult = {
        ok,
        status,
        message: (payload.message as string) || (ok ? 'Application received' : `Request failed (${response.status})`),
      }
      if (ok) return result
      lastResult = result
    } catch (error) {
      lastResult = { ok: false, message: error instanceof Error ? error.message : 'Network error' }
    } finally {
      clearTimeout(timer)
    }
  }
  return lastResult
}
