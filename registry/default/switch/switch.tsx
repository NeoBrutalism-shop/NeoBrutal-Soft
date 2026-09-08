import * as React from "react"

export type SoftSwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: React.ReactNode
  className?: string
}

export const SoftSwitch = React.forwardRef<HTMLInputElement, SoftSwitchProps>(function SoftSwitch({ label, className, ...props }, ref) {
  return <label className={["nbs-switch", className || ""].filter(Boolean).join(" ")}>
    <input ref={ref} type="checkbox" role="switch" {...props} />
    <span className="nbs-switch__track" aria-hidden="true"><span className="nbs-switch__thumb" /></span>
    {label ? <span className="nbs-switch__label">{label}</span> : null}
  </label>
})
