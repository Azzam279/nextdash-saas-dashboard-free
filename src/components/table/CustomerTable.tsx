'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import type { Customer } from '@/lib/data';

interface CustomerTableProps {
  customers: Customer[];
}

/**
 * Simple searchable customer table.
 * Filters rows client-side by name or email — no pagination or sorting.
 */
export function CustomerTable({ customers }: CustomerTableProps) {
  const [query, setQuery] = useState('');

  const filtered = customers.filter((c) => {
    const q = query.toLowerCase();
    return c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q);
  });

  return (
    <div className="flex flex-col">
      {/* Search bar */}
      <div className="border-border border-b py-4">
        <div className="max-w-xs">
          <Input
            placeholder="Search by name or email…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            leadingElement={<Search className="h-3.5 w-3.5" aria-hidden="true" />}
            aria-label="Search customers"
          />
        </div>
      </div>

      {/* Table wrapper — horizontal scroll on small screens */}
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th scope="col">Customer</th>
              <th scope="col">Plan</th>
              <th scope="col">Status</th>
              <th scope="col">MRR</th>
              <th scope="col">Joined</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="text-text-muted py-12 text-center text-sm">
                  No customers match &ldquo;{query}&rdquo;
                </td>
              </tr>
            )}

            {filtered.map((customer) => (
              <tr key={customer.id}>
                {/* Customer — avatar + name + email */}
                <td>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
                      style={{ background: 'linear-gradient(135deg, #2dd4bf, #818cf8)' }}
                      aria-hidden="true"
                    >
                      {customer.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-text-base truncate text-sm font-medium">{customer.name}</p>
                      <p className="text-text-muted truncate text-xs">{customer.email}</p>
                    </div>
                  </div>
                </td>

                <td>
                  <span className="text-text-base text-sm">{customer.plan}</span>
                </td>

                <td>
                  <Badge variant={customer.status}>{customer.status}</Badge>
                </td>

                <td>
                  <span className="text-text-base font-mono text-sm tabular-nums">
                    {customer.mrr > 0 ? `$${customer.mrr}` : '—'}
                  </span>
                </td>

                <td>
                  <span className="text-text-secondary font-mono text-sm tabular-nums">
                    {customer.joinedAt}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Row count */}
      <p className="border-border text-text-muted border-t px-5 py-3 text-xs">
        {filtered.length === customers.length
          ? `${customers.length} customers`
          : `${filtered.length} of ${customers.length} customers`}
      </p>
    </div>
  );
}
