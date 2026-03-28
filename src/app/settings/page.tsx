'use client';

/**
 * Settings page — showcases the Button, Input, and Card components.
 *
 * Marked as a Client Component because the forms use onSubmit handlers.
 * In a real application, you would use React Server Actions instead.
 */

import { Save } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';

export default function SettingsPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="animate-fade-up flex flex-col gap-6">
      <div>
        <h2 className="text-text-base text-lg font-semibold">Settings</h2>
        <p className="text-text-muted mt-0.5 text-sm">Manage your workspace preferences.</p>
      </div>

      {/* Profile card */}
      <Card title="Profile" subtitle="Update your personal details">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              label="First name"
              id="first-name"
              defaultValue="Alex"
              placeholder="Your first name"
            />
            <Input
              label="Last name"
              id="last-name"
              defaultValue="Johnson"
              placeholder="Your last name"
            />
          </div>

          <Input
            label="Email address"
            id="email"
            type="email"
            defaultValue="alex.johnson@company.io"
            placeholder="you@company.com"
            helperText="Changing your email requires re-verification."
          />

          <Input
            label="Company"
            id="company"
            defaultValue="Acme Corp"
            placeholder="Your company name"
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              variant="primary"
              leadingIcon={<Save className="h-3.5 w-3.5" aria-hidden="true" />}
            >
              Save changes
            </Button>
          </div>
        </form>
      </Card>

      {/* Password card */}
      <Card title="Password" subtitle="Change your account password">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              label="Current password"
              id="current-password"
              type="password"
              placeholder="••••••••"
            />
            <Input
              label="New password"
              id="new-password"
              type="password"
              placeholder="••••••••"
              helperText="Minimum 8 characters."
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit" variant="secondary">
              Update password
            </Button>
          </div>
        </form>
      </Card>

      {/* Danger zone */}
      <Card title="Danger zone" className="border-red-200">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-text-base text-sm font-medium">Delete workspace</p>
            <p className="text-text-muted mt-0.5 text-xs">
              Permanently remove this workspace and all of its data.
            </p>
          </div>
          <Button
            variant="secondary"
            className="shrink-0 border-red-200 text-red-600 hover:bg-red-50"
          >
            Delete workspace
          </Button>
        </div>
      </Card>
    </div>
  );
}
