import Link from 'next/link';
import { ArrowLeft, SearchX } from 'lucide-react';

/**
 * Custom 404 page shown when a route does not match any page.
 * Keeps the dashboard shell visible so the experience feels native.
 */
export default function NotFound() {
  return (
    <div className="animate-fade-up flex min-h-[calc(100vh-7.5rem)] items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="card overflow-hidden p-0">
          <div className="border-brand-border bg-brand-soft/60 border-b px-6 py-5 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="border-brand-border bg-surface-card flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border">
                  <SearchX className="text-brand h-7 w-7" aria-hidden="true" />
                </div>

                <div>
                  <p className="text-brand text-xs font-semibold tracking-[0.18em] uppercase">
                    Error 404
                  </p>
                  <h2 className="text-text-base mt-1 text-2xl font-semibold">
                    We couldn&apos;t find that page
                  </h2>
                  <p className="text-text-secondary mt-2 max-w-2xl text-sm">
                    The link may be outdated, the page may have moved, or the URL might be
                    incomplete. Your dashboard is still intact, and you can keep navigating from
                    here.
                  </p>
                </div>
              </div>

              <span className="border-brand-border bg-surface-card text-text-secondary inline-flex w-fit rounded-full border px-3 py-1 text-xs font-medium">
                NextDash Free
              </span>
            </div>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-7">
            <Link href="/" className="btn btn-primary">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
