'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

/** Map of route paths to human-readable page titles. */
const PAGE_TITLES: Record<string, string> = {
  '/': 'Overview',
  '/customers': 'Customers',
  '/analytics': 'Analytics',
  '/settings': 'Settings',
};

interface AppShellProps {
  children: React.ReactNode;
}

/**
 * Root layout shell. Manages the responsive sidebar drawer and
 * composes Header + Sidebar around the main content area.
 */
export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const [mobileOpenPath, setMobileOpenPath] = useState<string | null>(null);
  const mobileOpen = mobileOpenPath === pathname;

  // Prevent body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const pageTitle = PAGE_TITLES[pathname] ?? 'Page not found';

  return (
    <div className="bg-surface-page flex h-screen overflow-hidden">
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpenPath(null)} />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Header title={pageTitle} onMenuClick={() => setMobileOpenPath(pathname)} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6" id="main-content" tabIndex={-1}>
          {children}
        </main>
      </div>
    </div>
  );
}
