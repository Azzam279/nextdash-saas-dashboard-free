'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, BarChart3, Settings, Zap, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Overview', href: '/', icon: LayoutDashboard },
  { label: 'Customers', href: '/customers', icon: Users },
  { label: 'Analytics', href: '/analytics', icon: BarChart3 },
  { label: 'Settings', href: '/settings', icon: Settings },
];

interface SidebarProps {
  /** Whether the mobile drawer is open */
  mobileOpen: boolean;
  /** Callback to close the mobile drawer */
  onClose: () => void;
}

/**
 * Application sidebar. Renders as a fixed panel on desktop and
 * as an animated drawer on mobile.
 */
export function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => (href === '/' ? pathname === href : pathname.startsWith(href));

  const content = (
    <div className="flex h-full flex-col">
      {/* Brand */}
      <div className="border-border flex h-15 shrink-0 items-center justify-between border-b px-4">
        <div className="flex items-center gap-2">
          <div className="bg-brand flex h-7 w-7 items-center justify-center rounded-lg">
            <Zap className="h-3.5 w-3.5 text-white" aria-hidden="true" />
          </div>
          <span className="text-text-base text-sm font-semibold">NextDash</span>
          <span className="border-brand-border bg-brand-soft text-brand rounded border px-1.5 py-0.5 text-[10px] font-medium">
            Free
          </span>
        </div>

        {/* Close button — mobile only */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-ghost btn-sm cursor-pointer p-1"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-4" aria-label="Main navigation">
        {NAV_ITEMS.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className={`nav-item ${isActive(href) ? 'active' : ''}`}
            aria-current={isActive(href) ? 'page' : undefined}
          >
            <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
            {label}
          </Link>
        ))}
      </nav>

      {/* Upgrade CTA */}
      <div className="border-brand-border bg-brand-soft m-3 rounded-lg border p-3">
        <p className="text-brand mb-0.5 text-xs font-semibold">Upgrade to Pro</p>
        <p className="text-text-secondary mb-2 text-[11px]">
          Unlock charts, Auth, RBAC, dark mode and more.
        </p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm w-full"
        >
          Learn more
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* ── Desktop sidebar (always visible on lg+) ── */}
      <aside
        className="border-border bg-surface-card hidden flex-col border-r lg:flex"
        style={{ width: 'var(--sidebar-width)', flexShrink: 0 }}
        aria-label="Sidebar"
      >
        {content}
      </aside>

      {/* ── Mobile drawer overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 flex lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <aside
            className="border-border bg-surface-card animate-fade-in relative flex flex-col border-r"
            style={{ width: 'var(--sidebar-width)', maxWidth: '80vw' }}
          >
            {content}
          </aside>
        </div>
      )}
    </>
  );
}
