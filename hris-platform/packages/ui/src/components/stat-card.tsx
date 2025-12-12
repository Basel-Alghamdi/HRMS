import * as React from 'react';
import { LucideIcon } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../lib/utils';
import { Card, CardContent } from './card';

const statCardVariants = cva('', {
  variants: {
    trend: {
      up: 'text-green-600',
      down: 'text-red-600',
      neutral: 'text-muted-foreground',
    },
  },
  defaultVariants: {
    trend: 'neutral',
  },
});

export interface StatCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statCardVariants> {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  loading?: boolean;
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      className,
      title,
      value,
      description,
      icon: Icon,
      trend,
      trendValue,
      loading = false,
      ...props
    },
    ref,
  ) => {
    return (
      <Card ref={ref} className={cn('', className)} {...props}>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">
                {title}
              </p>
              {loading ? (
                <div className="mt-2 h-8 w-24 animate-pulse rounded bg-muted" />
              ) : (
                <p className="mt-2 text-3xl font-bold">{value}</p>
              )}
              {description && !loading && (
                <p className="mt-1 text-xs text-muted-foreground">
                  {description}
                </p>
              )}
              {trendValue && !loading && (
                <p
                  className={cn(
                    'mt-2 text-sm font-medium',
                    statCardVariants({ trend }),
                  )}
                >
                  {trendValue}
                </p>
              )}
            </div>
            {Icon && (
              <div className="rounded-lg bg-primary/10 p-3">
                <Icon className="h-6 w-6 text-primary" />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  },
);
StatCard.displayName = 'StatCard';

export { StatCard };
