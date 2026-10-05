import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { AlertTriangle, CheckCircle2, Info, X } from 'lucide-react'
import { cn } from '@/lib/utils'

type ToastType = 'success' | 'error' | 'info'
type Toast = { id: number; message: string; type: ToastType }

const ToastContext = createContext<{ showToast: (message: string, type?: ToastType) => void }>({
  showToast: () => undefined,
})

export function useToast() {
  return useContext(ToastContext)
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = useCallback((message: string, type: ToastType = 'success') => {
    const id = Date.now() + Math.random()
    setToasts((current) => [...current, { id, message, type }])
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id))
    }, 6000)
  }, [])

  const value = useMemo(() => ({ showToast }), [showToast])

  const icons = {
    success: <CheckCircle2 className="h-5 w-5 text-emerald-500" aria-hidden />,
    error: <AlertTriangle className="h-5 w-5 text-rose-500" aria-hidden />,
    info: <Info className="h-5 w-5 text-accent-500" aria-hidden />,
  }

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div aria-live="polite" aria-atomic="true" className="pointer-events-none fixed bottom-4 right-4 z-[70] flex w-[min(360px,92vw)] flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="status"
            className={cn(
              'pointer-events-auto flex items-start gap-3 rounded-xl border bg-white/98 p-4 shadow-card backdrop-blur',
              toast.type === 'error' ? 'border-rose-200' : toast.type === 'info' ? 'border-accent-200' : 'border-emerald-200',
            )}
          >
            {icons[toast.type]}
            <p className="flex-1 text-sm text-ink-700">{toast.message}</p>
            <button
              type="button"
              onClick={() => setToasts((current) => current.filter((item) => item.id !== toast.id))}
              className="text-slate-400 transition-colors hover:text-slate-600"
              aria-label="Dismiss notification"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
