import type { Metadata } from 'next';
import { UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CustomerTable } from '@/components/table/CustomerTable';
import { customers } from '@/lib/data';

export const metadata: Metadata = { title: 'Customers' };

/**
 * Dedicated customers page — full-width table with an invite action.
 */
export default function CustomersPage() {
  const active = customers.filter((c) => c.status === 'active').length;
  const pending = customers.filter((c) => c.status === 'pending').length;
  const inactive = customers.filter((c) => c.status === 'inactive').length;

  const summaryBadges = [
    { label: 'Total', count: customers.length, color: 'bg-gray-100 text-gray-700' },
    { label: 'Active', count: active, color: 'bg-emerald-50 text-emerald-700' },
    { label: 'Pending', count: pending, color: 'bg-amber-50 text-amber-700' },
    { label: 'Inactive', count: inactive, color: 'bg-gray-50 text-gray-500' },
  ];

  return (
    <div className="animate-fade-up flex flex-col gap-6">
      {/* Page heading + CTA */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-text-base text-lg font-semibold">Customers</h2>
          <p className="text-text-muted mt-0.5 text-sm">
            Manage your customer accounts and subscriptions.
          </p>
        </div>

        <Button variant="primary" leadingIcon={<UserPlus className="h-4 w-4" aria-hidden="true" />}>
          <span className="hidden sm:inline">Invite customer</span>
          <span className="sm:hidden">Invite</span>
        </Button>
      </div>

      {/* Status summary pills */}
      <div className="flex flex-wrap gap-2">
        {summaryBadges.map(({ label, count, color }) => (
          <span
            key={label}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${color}`}
          >
            {label}
            <span className="font-semibold">{count}</span>
          </span>
        ))}
      </div>

      {/* Table */}
      <Card noPadding>
        <CustomerTable customers={customers} />
      </Card>
    </div>
  );
}
