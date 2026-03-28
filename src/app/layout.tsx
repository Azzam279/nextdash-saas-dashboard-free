import type { Metadata, Viewport } from 'next';
import { AppShell } from '@/components/layout';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | NextDash Free',
    default: 'NextDash Free — Dashboard Starter',
  },
  description: 'NextDash Free — a lightweight Next.js dashboard starter with no auth required.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root layout. Wraps every page in the application shell
 * (sidebar + header). Light mode only — no theme toggling.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
