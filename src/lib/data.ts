// ─── Types ───────────────────────────────────────────────────

export interface Customer {
  id: string;
  name: string;
  email: string;
  plan: 'Free' | 'Pro' | 'Enterprise';
  status: 'active' | 'inactive' | 'pending';
  mrr: number;
  joinedAt: string;
}

export interface StatCard {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

// ─── Stat cards ───────────────────────────────────────────────

export const statCards: StatCard[] = [
  {
    label: 'Monthly Revenue',
    value: '$48,250',
    change: '+12.4% vs last month',
    positive: true,
  },
  {
    label: 'Active Users',
    value: '2,841',
    change: '+8.1% vs last month',
    positive: true,
  },
  {
    label: 'Churn Rate',
    value: '2.3%',
    change: '-0.4% vs last month',
    positive: true,
  },
  {
    label: 'Avg. Session',
    value: '4m 32s',
    change: '+5.2% vs last month',
    positive: true,
  },
];

// ─── Customers ────────────────────────────────────────────────

export const customers: Customer[] = [
  {
    id: 'cus_001',
    name: 'Alex Johnson',
    email: 'alex.johnson@company.io',
    plan: 'Enterprise',
    status: 'active',
    mrr: 599,
    joinedAt: '2024-01-15',
  },
  {
    id: 'cus_002',
    name: 'Maria Garcia',
    email: 'maria.garcia@company.io',
    plan: 'Pro',
    status: 'active',
    mrr: 99,
    joinedAt: '2024-02-03',
  },
  {
    id: 'cus_003',
    name: 'James Chen',
    email: 'james.chen@company.io',
    plan: 'Pro',
    status: 'active',
    mrr: 99,
    joinedAt: '2024-02-18',
  },
  {
    id: 'cus_004',
    name: 'Sarah Williams',
    email: 'sarah.williams@company.io',
    plan: 'Free',
    status: 'inactive',
    mrr: 0,
    joinedAt: '2024-03-05',
  },
  {
    id: 'cus_005',
    name: 'Liam Brown',
    email: 'liam.brown@company.io',
    plan: 'Free',
    status: 'pending',
    mrr: 0,
    joinedAt: '2024-03-22',
  },
  {
    id: 'cus_006',
    name: 'Emma Davis',
    email: 'emma.davis@company.io',
    plan: 'Enterprise',
    status: 'active',
    mrr: 599,
    joinedAt: '2024-04-10',
  },
  {
    id: 'cus_007',
    name: 'Noah Wilson',
    email: 'noah.wilson@company.io',
    plan: 'Pro',
    status: 'active',
    mrr: 99,
    joinedAt: '2024-04-28',
  },
  {
    id: 'cus_008',
    name: 'Olivia Moore',
    email: 'olivia.moore@company.io',
    plan: 'Free',
    status: 'active',
    mrr: 0,
    joinedAt: '2024-05-14',
  },
  {
    id: 'cus_009',
    name: 'Ethan Taylor',
    email: 'ethan.taylor@company.io',
    plan: 'Pro',
    status: 'pending',
    mrr: 99,
    joinedAt: '2024-06-02',
  },
  {
    id: 'cus_010',
    name: 'Isabella Anderson',
    email: 'isabella.anderson@company.io',
    plan: 'Enterprise',
    status: 'active',
    mrr: 599,
    joinedAt: '2024-06-19',
  },
];
