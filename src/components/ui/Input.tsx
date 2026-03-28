import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Visible label rendered above the input */
  label?: string;
  /** Helper text rendered below the input */
  helperText?: string;
  /** Error message — replaces helper text and adds error styling */
  error?: string;
  /** Icon or element rendered on the left inside the input */
  leadingElement?: React.ReactNode;
}

/**
 * Controlled text input with an optional label, helper text,
 * error state, and leading icon slot.
 *
 * The leading-icon padding is applied via `.input-with-icon` (a plain CSS
 * modifier) rather than a Tailwind utility, so it doesn't conflict with
 * the `.input` class's own padding declaration.
 */
export function Input({
  label,
  helperText,
  error,
  leadingElement,
  id,
  className = '',
  ...rest
}: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  const hasError = Boolean(error);

  const inputClass = [
    'input',
    leadingElement ? 'input-with-icon' : '',
    hasError ? 'input-error' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="label" htmlFor={inputId}>
          {label}
        </label>
      )}

      <div className="relative">
        {leadingElement && (
          <span
            className="text-text-muted pointer-events-none absolute top-1/2 left-3 z-10 flex -translate-y-1/2 items-center"
            aria-hidden="true"
          >
            {leadingElement}
          </span>
        )}

        <input
          id={inputId}
          className={inputClass}
          aria-describedby={
            error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          aria-invalid={hasError || undefined}
          {...rest}
        />
      </div>

      {error && (
        <p id={`${inputId}-error`} className="text-xs text-red-500" role="alert">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={`${inputId}-helper`} className="text-text-muted text-xs">
          {helperText}
        </p>
      )}
    </div>
  );
}
