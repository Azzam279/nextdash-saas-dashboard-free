import type { Metadata } from 'next';
import { DollarSign, Users, TrendingUp, Clock } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { CustomerTable } from '@/components/table/CustomerTable';
import { statCards, customers } from '@/lib/data';

export const metadata: Metadata = { title: 'Overview' };

const STAT_ICONS = [DollarSign, Users, TrendingUp, Clock];

/**
 * Dashboard overview page.
 * Displays KPI stat cards and a searchable customer table.
 */
export default function OverviewPage() {
  return (
    <div className="animate-fade-up flex flex-col gap-6">
      {/* Page heading */}
      <div>
        <h2 className="text-text-base text-lg font-semibold">Good morning 👋</h2>
        <p className="text-text-muted mt-0.5 text-sm">
          Here&apos;s a summary of your product this month.
        </p>
      </div>

      {/* KPI grid */}
      <section aria-label="Key metrics">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statCards.map((stat, index) => {
            const Icon = STAT_ICONS[index];
            return (
              <div key={stat.label} className="card flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <p className="text-text-muted text-xs font-medium tracking-wide uppercase">
                    {stat.label}
                  </p>
                  <span
                    className="bg-brand-soft flex h-7 w-7 items-center justify-center rounded-lg"
                    aria-hidden="true"
                  >
                    <Icon className="text-brand h-3.5 w-3.5" />
                  </span>
                </div>

                <p className="text-text-base text-2xl font-semibold tabular-nums">{stat.value}</p>

                <p
                  className={`text-xs font-medium ${stat.positive ? 'text-emerald-600' : 'text-red-500'}`}
                >
                  {stat.change}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Customer table */}
      <Card title="Customers" subtitle="All registered accounts" noPadding>
        <CustomerTable customers={customers} />
      </Card>
    </div>
  );
}
