'use client';

import { Menu, Bell } from 'lucide-react';

// ─── Header ───────────────────────────────────────────────────

const STATIC_UNREAD_COUNT = 2;

interface HeaderProps {
  /** Page title shown in the header */
  title: string;
  /** Called when the hamburger menu is pressed on mobile */
  onMenuClick: () => void;
}

/**
 * Top application header with a mobile menu toggle, page title,
 * and a notification bell button.
 */
export function Header({ title, onMenuClick }: HeaderProps) {
  return (
    <header className="border-border bg-surface-card z-20 flex h-15 shrink-0 items-center justify-between border-b px-4">
      {/* Left — hamburger + title */}
      <div className="flex items-center gap-3">
        <div className="lg:hidden">
          <button
            type="button"
            onClick={onMenuClick}
            className="btn btn-ghost btn-sm cursor-pointer p-1.5"
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <h1 className="text-text-base text-sm font-semibold">{title}</h1>
      </div>

      {/* Right — notification bell */}
      <div className="relative">
        <button
          type="button"
          className="btn btn-ghost btn-sm relative cursor-pointer p-2"
          aria-label={`Notifications, ${STATIC_UNREAD_COUNT} unread`}
        >
          <Bell className="h-4 w-4" aria-hidden="true" />
          <span
            className="bg-brand absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[9px] leading-none font-bold text-white"
            aria-hidden="true"
          >
            {STATIC_UNREAD_COUNT}
          </span>
        </button>
      </div>
    </header>
  );
}
