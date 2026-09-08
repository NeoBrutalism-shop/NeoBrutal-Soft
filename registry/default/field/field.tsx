import * as React from "react"

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ")

export const SoftInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(function SoftInput({ className, ...props }, ref) {
  return <input ref={ref} className={cx("nbs-input", className)} {...props} />
})

export const SoftTextarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(function SoftTextarea({ className, ...props }, ref) {
  return <textarea ref={ref} className={cx("nbs-textarea", className)} {...props} />
})

export const SoftSelect = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(function SoftSelect({ className, ...props }, ref) {
  return <select ref={ref} className={cx("nbs-select", className)} {...props} />
})

export function SoftField({ label, help, invalid, className, children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement> & { label?: React.ReactNode; help?: React.ReactNode; invalid?: boolean }) {
  return <label className={cx("nbs-field", className)} data-invalid={invalid ? "true" : undefined} {...props}>
    {label ? <span className="nbs-label">{label}</span> : null}
    {children}
    {help ? <span className="nbs-help">{help}</span> : null}
  </label>
}
