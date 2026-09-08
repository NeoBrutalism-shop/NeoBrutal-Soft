import * as React from "react"

export type SoftAlertProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: "info" | "success" | "warning" | "danger"
}

export function SoftAlert({ tone = "info", className, ...props }: SoftAlertProps) {
  const classes = ["nbs-alert", tone ? `nbs-alert--${tone}` : "", className || ""].filter(Boolean).join(" ")
  return <div className={classes} role={tone === "danger" ? "alert" : undefined} {...props} />
}
