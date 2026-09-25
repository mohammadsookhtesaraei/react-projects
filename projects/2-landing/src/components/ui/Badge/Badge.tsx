import { type ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-surface-light text-text-secondary border-surface-border',
    primary: 'bg-primary/10 text-primary-light border-primary/20',
    success: 'bg-accent-green/10 text-accent-green border-accent-green/20',
    warning: 'bg-accent-orange/10 text-accent-orange border-accent-orange/20',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}