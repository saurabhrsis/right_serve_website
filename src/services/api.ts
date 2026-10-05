/**
 * Backend API client.
 *
 * The enquiry endpoint is the existing production backend used by the current
 * website (POST {base}/rsis/add-contact with {name, email, message, mobile}).
 * The URL comes from configuration:
 *
 *   VITE_API_BASE_URL   – absolute base URL, used in production builds
 *   (in development the Vite dev server proxies /api/* to the backend origin,
 *    so no CORS configuration is required on the server)
 */

const CONFIGURED_BASE = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/+$/, '');

const API_BASE = CONFIGURED_BASE || (import.meta.env.DEV ? '/api' : 'https://backend.rightserveinfotechsystem.com');

/** Enquiry payload accepted by the existing backend endpoint. */
export interface EnquiryPayload {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

export interface EnquiryResult {
  ok: boolean;
  message: string;
}

const buildMessage = (fields: Record<string, string | undefined>) =>
  Object.entries(fields)
    .filter(([, value]) => value && value.trim())
    .map(([key, value]) => `${key}: ${value!.trim()}`)
    .join('\n');

/**
 * Submits an enquiry to the production contact endpoint.
 *
 * Extra form fields (company, service, budget, timeline) are appended to the
 * message body so the existing backend contract stays untouched.
 */
export async function submitEnquiry(
  payload: EnquiryPayload,
  extraFields: Record<string, string | undefined> = {},
): Promise<EnquiryResult> {
  const extra = buildMessage(extraFields);
  const message = extra ? `${payload.message}\n\n---\n${extra}` : payload.message;

  const body = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    mobile: payload.mobile.trim(),
    message,
  };

  try {
    const response = await fetch(`${API_BASE}/rsis/add-contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = (await response.json().catch(() => null)) as { status?: string; message?: string } | null;

    if (response.ok && (data?.status === 'SUCCESS' || data?.status === undefined)) {
      return {
        ok: true,
        message: 'Thank you — your enquiry has been received. Our team will contact you shortly.',
      };
    }

    return {
      ok: false,
      message: data?.message || 'We could not send your enquiry right now. Please call or email us instead.',
    };
  } catch {
    return {
      ok: false,
      message:
        'We could not reach the server. Please check your connection, or call us on +91 95450 73418.',
    };
  }
}
