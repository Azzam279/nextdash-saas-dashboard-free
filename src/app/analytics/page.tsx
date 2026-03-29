import type { Metadata } from 'next';
import { BarChart3 } from 'lucide-react';
import { Card } from '@/components/ui';

export const metadata: Metadata = { title: 'Analytics' };

/**
 * Analytics page placeholder.
 * Charts are a Pro feature — this page shows an upgrade prompt.
 */
export default function AnalyticsPage() {
  return (
    <div className="animate-fade-up flex flex-col gap-6">
      <div>
        <h2 className="text-text-base text-lg font-semibold">Analytics</h2>
        <p className="text-text-muted mt-0.5 text-sm">
          Track revenue, growth, and engagement metrics.
        </p>
      </div>

      <Card>
        <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <div className="border-brand-border bg-brand-soft flex h-14 w-14 items-center justify-center rounded-2xl border">
            <BarChart3 className="text-brand h-7 w-7" aria-hidden="true" />
          </div>

          <div>
            <h3 className="text-text-base mb-1 text-sm font-semibold">Charts are a Pro feature</h3>
            <p className="text-text-muted max-w-xs text-sm">
              Upgrade to NextDash Pro to unlock revenue charts, user growth graphs, and plan
              distribution analytics.
            </p>
          </div>

          <a
            href="https://azzamtaq.gumroad.com/l/zzclvi"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Upgrade to Pro
          </a>
        </div>
      </Card>
    </div>
  );
}
