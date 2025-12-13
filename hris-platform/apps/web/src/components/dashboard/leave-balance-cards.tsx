'use client';

import * as React from 'react';
import { Card, CardContent } from '@hris/ui';
import { Progress } from '@hris/ui';
import { cn } from '@hris/ui';

interface LeaveBalance {
  id: string;
  type: string;
  icon: React.ElementType;
  color: string;
  used: number;
  total: number;
}

interface LeaveBalanceCardsProps {
  balances: LeaveBalance[];
}

export function LeaveBalanceCards({ balances }: LeaveBalanceCardsProps) {
  return (
    <div className="relative">
      <div className="flex gap-4 overflow-x-auto pb-4">
        {balances.map((balance) => {
          const Icon = balance.icon;
          const remaining = balance.total - balance.used;
          const percentage = (remaining / balance.total) * 100;

          return (
            <Card
              key={balance.id}
              className="min-w-[200px] flex-shrink-0 transition-shadow hover:shadow-md"
            >
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-lg',
                        `bg-${balance.color}-100`,
                      )}
                    >
                      <Icon className={cn('h-5 w-5', `text-${balance.color}-600`)} />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {balance.type}
                    </p>
                    <p className="mt-1 text-2xl font-bold">
                      {remaining}
                      <span className="text-base font-normal text-muted-foreground">
                        /{balance.total}
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground">يوم متبقي</p>
                  </div>

                  <div className="space-y-1">
                    <Progress value={percentage} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      استخدمت {balance.used} من {balance.total} يوم
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
