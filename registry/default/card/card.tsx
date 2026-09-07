import * as React from "react"

export type SoftCardProps = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean
  muted?: boolean
  flat?: boolean
}

export function SoftCard({ interactive, muted, flat, className, ...props }: SoftCardProps) {
  const classes = [
    "nbs-card",
    interactive ? "nbs-card--interactive" : "",
    muted ? "nbs-card--muted" : "",
    flat ? "nbs-card--flat" : "",
    className || ""
  ].filter(Boolean).join(" ")

  return <div className={classes} {...props} />
}
