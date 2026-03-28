type BadgeVariant = 'active' | 'inactive' | 'pending';

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
}

const VARIANT_CLASS: Record<BadgeVariant, string> = {
  active: 'badge-active',
  inactive: 'badge-inactive',
  pending: 'badge-pending',
};

/**
 * Small status pill with semantic colour variants.
 */
export function Badge({ variant, children }: BadgeProps) {
  return (
    <span className={`badge ${VARIANT_CLASS[variant]}`}>
      {children}
    </span>
  );
}
