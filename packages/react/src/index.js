import React from 'react';

const h = React.createElement;
const cx = (...parts) => parts.filter(Boolean).join(' ');

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

export const Input = React.forwardRef(function Input({ className, ...props }, ref) {
  return h('input', { ref, className: cx('nbs-input', className), ...props });
});

export const Textarea = React.forwardRef(function Textarea({ className, ...props }, ref) {
  return h('textarea', { ref, className: cx('nbs-textarea', className), ...props });
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

export function Field({ label, help, invalid = false, className, children, ...props }) {
  return h('label', { className: cx('nbs-field', className), 'data-invalid': invalid ? 'true' : undefined, ...props }, [
    label ? h('span', { className: 'nbs-label', key: 'label' }, label) : null,
    children,
    help ? h('span', { className: 'nbs-help', key: 'help' }, help) : null
  ]);
}
