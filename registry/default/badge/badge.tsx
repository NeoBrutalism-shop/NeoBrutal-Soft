import * as React from "react"

export type SoftBadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "primary" | "success" | "warning" | "danger" | "info"
}

export function SoftBadge({ tone, className, ...props }: SoftBadgeProps) {
  const classes = ["nbs-badge", tone ? `nbs-badge--${tone}` : "", className || ""].filter(Boolean).join(" ")
  return <span className={classes} {...props} />
}
