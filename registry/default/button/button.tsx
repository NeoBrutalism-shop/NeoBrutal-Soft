import * as React from "react"

export type SoftButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "success" | "warning" | "danger"
  size?: "sm" | "lg"
  quiet?: boolean
}

export function SoftButton({ variant, size, quiet, className, type = "button", ...props }: SoftButtonProps) {
  const classes = [
    "nbs-button",
    variant ? `nbs-button--${variant}` : "",
    size ? `nbs-button--${size}` : "",
    quiet ? "nbs-button--quiet" : "",
    className || ""
  ].filter(Boolean).join(" ")

  return <button type={type} className={classes} {...props} />
}
