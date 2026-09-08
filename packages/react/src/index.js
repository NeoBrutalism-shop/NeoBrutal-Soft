import React from 'react';

const h = React.createElement;
const cx = (...parts) => parts.filter(Boolean).join(' ');
const TabsContext = React.createContext(null);

export function SoftRoot({ theme = 'light', className, children, ...props }) {
  return h('div', { 'data-theme': theme, className, ...props }, children);
}

export function Button({ variant, size, quiet = false, className, type = 'button', ...props }) {
  const classes = ['nbs-button'];
  if (variant) classes.push(`nbs-button--${variant}`);
  if (size) classes.push(`nbs-button--${size}`);
  if (quiet) classes.push('nbs-button--quiet');
  return h('button', { type, className: cx(...classes, className), ...props });
}

export function Card({ interactive = false, muted = false, flat = false, className, ...props }) {
  return h('div', {
    className: cx('nbs-card', interactive && 'nbs-card--interactive', muted && 'nbs-card--muted', flat && 'nbs-card--flat', className),
    ...props
  });
}

export function Badge({ tone, className, ...props }) {
  return h('span', { className: cx('nbs-badge', tone && `nbs-badge--${tone}`, className), ...props });
}

export function Alert({ tone = 'info', className, ...props }) {
  return h('div', { className: cx('nbs-alert', tone && `nbs-alert--${tone}`, className), role: tone === 'danger' ? 'alert' : undefined, ...props });
}

export const Input = React.forwardRef(function Input({ className, ...props }, ref) {
  return h('input', { ref, className: cx('nbs-input', className), ...props });
});

export const Textarea = React.forwardRef(function Textarea({ className, ...props }, ref) {
  return h('textarea', { ref, className: cx('nbs-textarea', className), ...props });
});

export const Select = React.forwardRef(function Select({ className, ...props }, ref) {
  return h('select', { ref, className: cx('nbs-select', className), ...props });
});

export const Checkbox = React.forwardRef(function Checkbox({ label, className, ...props }, ref) {
  return h('label', { className: cx('nbs-check', className) }, [
    h('input', { key: 'input', ref, type: 'checkbox', ...props }),
    h('span', { key: 'box', className: 'nbs-check__box', 'aria-hidden': true }),
    label ? h('span', { key: 'label', className: 'nbs-check__label' }, label) : null
  ]);
});

export const Switch = React.forwardRef(function Switch({ label, className, ...props }, ref) {
  return h('label', { className: cx('nbs-switch', className) }, [
    h('input', { key: 'input', ref, type: 'checkbox', role: 'switch', ...props }),
    h('span', { key: 'track', className: 'nbs-switch__track', 'aria-hidden': true }, h('span', { className: 'nbs-switch__thumb' })),
    label ? h('span', { key: 'label', className: 'nbs-switch__label' }, label) : null
  ]);
});

export const Radio = React.forwardRef(function Radio({ label, description, className, ...props }, ref) {
  return h('label', { className: cx('nbs-radio', className) }, [
    h('input', { key: 'input', ref, type: 'radio', ...props }),
    h('span', { key: 'dot', className: 'nbs-radio__dot', 'aria-hidden': true }),
    h('span', { key: 'copy', className: 'nbs-radio__copy' }, [
      label ? h('strong', { key: 'label' }, label) : null,
      description ? h('span', { key: 'description' }, description) : null
    ])
  ]);
});

export function Stack({ className, ...props }) {
  return h('div', { className: cx('nbs-stack', className), ...props });
}

export function Cluster({ className, ...props }) {
  return h('div', { className: cx('nbs-cluster', className), ...props });
}

export function Inset({ className, ...props }) {
  return h('div', { className: cx('nbs-inset', className), ...props });
}

export function Surface({ className, ...props }) {
  return h('div', { className: cx('nbs-surface', className), ...props });
}

export function Field({ label, help, invalid = false, className, children, ...props }) {
  return h('label', { className: cx('nbs-field', className), 'data-invalid': invalid ? 'true' : undefined, ...props }, [
    label ? h('span', { className: 'nbs-label', key: 'label' }, label) : null,
    children,
    help ? h('span', { className: 'nbs-help', key: 'help' }, help) : null
  ]);
}

export function Tabs({ value, defaultValue, onValueChange, orientation = 'horizontal', children }) {
  const [internal, setInternal] = React.useState(defaultValue);
  const controlled = value !== undefined;
  const selected = controlled ? value : internal;
  const setSelected = React.useCallback((next) => {
    if (!controlled) setInternal(next);
    onValueChange?.(next);
  }, [controlled, onValueChange]);

  return h(TabsContext.Provider, { value: { selected, setSelected, orientation } }, children);
}

export function TabList({ className, onKeyDown, ...props }) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error('TabList must be used inside Tabs.');

  const handleKeyDown = (event) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;

    const tabs = [...event.currentTarget.querySelectorAll('[role="tab"]:not([disabled])')];
    if (!tabs.length) return;
    const current = tabs.indexOf(event.target.closest('[role="tab"]'));
    if (current < 0) return;

    const dir = event.currentTarget.closest('[dir]')?.dir || event.currentTarget.ownerDocument.documentElement.dir || 'ltr';
    let next = current;
    const horizontalNext = dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight';
    const horizontalPrev = dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft';

    if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else if (context.orientation === 'vertical' && event.key === 'ArrowDown') next = (current + 1) % tabs.length;
    else if (context.orientation === 'vertical' && event.key === 'ArrowUp') next = (current - 1 + tabs.length) % tabs.length;
    else if (context.orientation === 'horizontal' && event.key === horizontalNext) next = (current + 1) % tabs.length;
    else if (context.orientation === 'horizontal' && event.key === horizontalPrev) next = (current - 1 + tabs.length) % tabs.length;
    else return;

    event.preventDefault();
    tabs[next].focus();
    tabs[next].click();
  };

  return h('div', { role: 'tablist', 'aria-orientation': context.orientation, className: cx('nbs-tabs', className), onKeyDown: handleKeyDown, ...props });
}

export function Tab({ value, className, onClick, ...props }) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error('Tab must be used inside Tabs.');
  const selected = context.selected === value;
  return h('button', {
    type: 'button',
    role: 'tab',
    'aria-selected': selected,
    tabIndex: selected ? 0 : -1,
    className: cx('nbs-tab', className),
    onClick: (event) => { context.setSelected(value); onClick?.(event); },
    ...props
  });
}

export function TabPanel({ value, className, ...props }) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error('TabPanel must be used inside Tabs.');
  const selected = context.selected === value;
  return h('div', { role: 'tabpanel', hidden: !selected, tabIndex: 0, className, ...props });
}
