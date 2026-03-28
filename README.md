# NextDash Free

A lightweight, open-source Next.js dashboard starter — no authentication, no RBAC, light mode only.

> **Looking for more?** [NextDash Pro](https://github.com) adds authentication, role-based access control, dark mode, charts, advanced table filters, notifications, and more.

---

## What's included

| Feature | Free | Pro |
|---|:---:|:---:|
| Dashboard layout (sidebar + header) | ✓ | ✓ |
| Responsive layout (mobile drawer) | ✓ | ✓ |
| Customer table with search | ✓ | ✓ |
| UI components (Button, Input, Card) | ✓ | ✓ |
| Light mode | ✓ | ✓ |
| Dark mode | — | ✓ |
| Authentication | — | ✓ |
| Role-based access control | — | ✓ |
| Charts (revenue, growth, distribution) | — | ✓ |
| Advanced table filters & sort | — | ✓ |
| Notifications panel | — | ✓ |
| Collapsible nav groups | — | ✓ |
| Loading skeleton screens | — | ✓ |

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables required.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout — wraps all pages in AppShell
│   ├── not-found.tsx           # Not found page
│   ├── page.tsx                # Overview page (KPIs + table)
│   ├── customers/page.tsx      # Customers page
│   ├── analytics/page.tsx      # Analytics placeholder (Pro feature)
│   └── settings/page.tsx       # Settings page (demonstrates UI components)
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx          # Button with variant + size + icon slots
│   │   ├── Input.tsx           # Input with label, helper text, error state
│   │   ├── Card.tsx            # Surface container with optional header
│   │   ├── StatCard.tsx        # KPI metric card
│   │   ├── Badge.tsx           # Status pill (active / inactive / pending)
│   │   └── index.ts
│   ├── layout/
│   │   ├── AppShell.tsx        # Root shell — manages sidebar drawer state
│   │   ├── Sidebar.tsx         # Desktop sidebar + mobile drawer
│   │   ├── Header.tsx          # Top header bar
│   │   └── index.ts
│   └── table/
│       ├── CustomerTable.tsx   # Searchable customer table
│       └── index.ts
│
├── lib/
│   └── data.ts                 # Mock data (customers + stat cards)
│
└── styles/
    └── globals.css             # Tailwind v4 + self-contained CSS classes
```

---

## UI components

### Button

```tsx
import { Button } from '@/components/ui';

<Button variant="primary">Save changes</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="ghost" size="sm">View all</Button>
<Button variant="primary" leadingIcon={<Plus className="w-4 h-4" />}>
  Add item
</Button>
```

**Props:** `variant` (`primary` | `secondary` | `ghost`), `size` (`md` | `sm`), `leadingIcon`, `trailingIcon`, all native `<button>` attributes.

---

### Input

```tsx
import { Input } from '@/components/ui';

<Input label="Email" type="email" placeholder="you@company.com" />
<Input label="Search" leadingElement={<Search className="w-3.5 h-3.5" />} />
<Input label="Name" error="Name is required" />
<Input label="Website" helperText="Include https://" />
```

**Props:** `label`, `helperText`, `error`, `leadingElement`, all native `<input>` attributes.

---

### Card

```tsx
import { Card } from '@/components/ui';

<Card title="Profile" subtitle="Your personal details">
  {/* content */}
</Card>

<Card title="Table" noPadding>
  <table>…</table>
</Card>
```

**Props:** `title`, `subtitle`, `action` (ReactNode, top-right), `noPadding`, `className`.

---

## ESLint Key Rules

- **Extends `next/core-web-vitals` + `prettier`**  
  Uses Next.js recommended rules for performance and best practices, with Prettier integration to avoid formatting conflicts.

- **`unused-imports` plugin enabled**  
  Automatically detects and removes unused imports to keep the codebase clean and maintainable.

- **`no-unused-vars` disabled (replaced by `unused-imports`)**  
  The default ESLint rule is turned off in favor of more precise handling via the `unused-imports` plugin.

- **`unused-imports/no-unused-imports`: error**  
  Throws an error when unused imports are found.

- **`unused-imports/no-unused-vars`: warn**  
  Warns about unused variables with the following behavior:
  - Ignores variables prefixed with `_`
  - Ignores function arguments prefixed with `_`
  - Useful for intentionally unused parameters

- **`react/react-in-jsx-scope` disabled**  
  Not required for modern React (17+) and Next.js environments.

- **`import/prefer-default-export` disabled**  
  Allows consistent use of named exports instead of enforcing default exports.

- **`@typescript-eslint/no-explicit-any`: warn**  
  Discourages the use of `any`, while still allowing flexibility when needed.

---

## Styling approach

**Tailwind v4** utilities handle all layout, spacing, and colours directly in JSX.

Self-contained CSS classes (`.btn`, `.input`, `.card`, `.badge`, `.nav-item`, `.data-table`) are defined in `globals.css` and are **never mixed with Tailwind utilities on the same element** to avoid cascade conflicts.

Light mode only — no `.dark` variant, no `next-themes` dependency.

---

## Tech stack

| Package | Version |
|---|---|
| next | 16.2 |
| react | 19.2 |
| tailwindcss | 4.x |
| lucide-react | 0.488 |
| typescript | 5.8 |
