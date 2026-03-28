import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /** Icon rendered before the label */
  leadingIcon?: React.ReactNode;
  /** Icon rendered after the label */
  trailingIcon?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * General-purpose button. Wraps a native <button> with consistent
 * variants, sizing, and accessible focus handling.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  children,
  className = '',
  disabled,
  ...rest
}: ButtonProps) {
  const variantClass = `btn-${variant}`;
  const sizeClass = size === 'sm' ? 'btn-sm' : '';

  return (
    <button
      type={rest.type ?? 'button'}
      disabled={disabled}
      className={`btn ${variantClass} ${sizeClass} ${className}`.trim()}
      {...rest}
    >
      {leadingIcon && (
        <span className="flex shrink-0" aria-hidden="true">
          {leadingIcon}
        </span>
      )}
      {children}
      {trailingIcon && (
        <span className="flex shrink-0" aria-hidden="true">
          {trailingIcon}
        </span>
      )}
    </button>
  );
}
