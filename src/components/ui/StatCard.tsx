import { TrendingUp, TrendingDown } from 'lucide-react';
import type { StatCard as StatCardData } from '@/lib/data';

interface StatCardProps {
  stat: StatCardData;
}

/**
 * Displays a single KPI metric with label, value, and period-over-period change.
 */
export function StatCard({ stat }: StatCardProps) {
  const { label, value, change, positive } = stat;

  return (
    <div className="card flex flex-col gap-3">
      <p className="text-text-muted text-xs font-medium tracking-wide uppercase">{label}</p>

      <p className="text-text-base text-2xl font-semibold tabular-nums">{value}</p>

      <div
        className={[
          'flex items-center gap-1 text-xs font-medium',
          positive ? 'text-emerald-600' : 'text-red-500',
        ].join(' ')}
      >
        {positive ? (
          <TrendingUp className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        ) : (
          <TrendingDown className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        )}
        <span>{change}</span>
      </div>
    </div>
  );
}
