"use client"

import * as React from "react"

type TabsContextValue = {
  selected: string | undefined
  setSelected: (value: string) => void
  orientation: "horizontal" | "vertical"
}

const TabsContext = React.createContext<TabsContextValue | null>(null)
const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ")

export function SoftTabs({ value, defaultValue, onValueChange, orientation = "horizontal", children }: {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  orientation?: "horizontal" | "vertical"
  children: React.ReactNode
}) {
  const [internal, setInternal] = React.useState(defaultValue)
  const controlled = value !== undefined
  const selected = controlled ? value : internal
  const setSelected = React.useCallback((next: string) => {
    if (!controlled) setInternal(next)
    onValueChange?.(next)
  }, [controlled, onValueChange])
  return <TabsContext.Provider value={{ selected, setSelected, orientation }}>{children}</TabsContext.Provider>
}

export function SoftTabList({ className, onKeyDown, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const context = React.useContext(TabsContext)
  if (!context) throw new Error("SoftTabList must be used inside SoftTabs")

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event)
    if (event.defaultPrevented) return
    const tabs = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]:not([disabled])'))
    const current = tabs.indexOf(event.target as HTMLButtonElement)
    if (current < 0 || tabs.length === 0) return
    const dir = event.currentTarget.closest('[dir]')?.getAttribute('dir') || document.documentElement.dir || 'ltr'
    const nextKey = dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight'
    const prevKey = dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft'
    let next = current
    if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = tabs.length - 1
    else if (context.orientation === 'vertical' && event.key === 'ArrowDown') next = (current + 1) % tabs.length
    else if (context.orientation === 'vertical' && event.key === 'ArrowUp') next = (current - 1 + tabs.length) % tabs.length
    else if (context.orientation === 'horizontal' && event.key === nextKey) next = (current + 1) % tabs.length
    else if (context.orientation === 'horizontal' && event.key === prevKey) next = (current - 1 + tabs.length) % tabs.length
    else return
    event.preventDefault()
    tabs[next].focus()
    tabs[next].click()
  }

  return <div role="tablist" aria-orientation={context.orientation} className={cx("nbs-tabs", className)} onKeyDown={handleKeyDown} {...props} />
}

export function SoftTab({ value, className, onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const context = React.useContext(TabsContext)
  if (!context) throw new Error("SoftTab must be used inside SoftTabs")
  const selected = context.selected === value
  return <button type="button" role="tab" aria-selected={selected} tabIndex={selected ? 0 : -1} className={cx("nbs-tab", className)} onClick={(event) => { context.setSelected(value); onClick?.(event) }} {...props} />
}

export function SoftTabPanel({ value, ...props }: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const context = React.useContext(TabsContext)
  if (!context) throw new Error("SoftTabPanel must be used inside SoftTabs")
  return <div role="tabpanel" hidden={context.selected !== value} tabIndex={0} {...props} />
}
