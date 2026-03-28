import React from 'react';

interface CardProps {
  /** Optional title rendered in the card header */
  title?: string;
  /** Optional subtitle below the title */
  subtitle?: string;
  /** Action element (e.g. a button) in the top-right of the header */
  action?: React.ReactNode;
  /** Card body content */
  children: React.ReactNode;
  /** Extra class names applied to the outer wrapper */
  className?: string;
  /**
   * Remove default padding from the card body.
   * Use this when the child (e.g. CustomerTable) manages its own
   * internal spacing — the title/subtitle header still gets padding.
   */
  noPadding?: boolean;
}

/**
 * General-purpose surface container.
 * Renders an optional header (title + subtitle + action) followed by
 * the card body. Pass `noPadding` when the child owns its own spacing.
 */
export function Card({
  title,
  subtitle,
  action,
  children,
  className = '',
  noPadding = false,
}: CardProps) {
  const hasHeader = Boolean(title ?? subtitle ?? action);

  return (
    <div className={`card ${noPadding ? 'p-0' : ''} ${className}`.trim()}>
      {hasHeader && (
        <div className="border-border flex items-start justify-between gap-3 border-b pb-4">
          <div className="flex flex-col gap-0.5">
            {title && <h2 className="text-text-base text-sm font-semibold">{title}</h2>}
            {subtitle && <p className="text-text-muted text-xs">{subtitle}</p>}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}

      {/* Body — padding applied here when noPadding is false and there's no header */}
      {!noPadding && !hasHeader ? (
        children
      ) : !noPadding && hasHeader ? (
        <div className="px-5 py-4">{children}</div>
      ) : (
        children
      )}
    </div>
  );
}
