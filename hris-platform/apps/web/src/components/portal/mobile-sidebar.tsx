'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import {
  Home,
  User,
  Clock,
  Calendar,
  Wallet,
  Users,
} from 'lucide-react';
import { cn } from '@hris/ui';
import { Button } from '@hris/ui';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@hris/ui';
import { ScrollArea } from '@hris/ui';
import { Link } from '@/i18n/routing';
import { useAuth } from '@/hooks/use-auth';

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { label: 'الرئيسية', href: '/dashboard', icon: Home },
  { label: 'الملف الشخصي', href: '/profile', icon: User },
  { label: 'الحضور والانصراف', href: '/attendance', icon: Clock },
  { label: 'الإجازات', href: '/leave', icon: Calendar },
  { label: 'كشوف الرواتب', href: '/payslips', icon: Wallet },
  { label: 'فريق العمل', href: '/team', icon: Users },
];

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const pathname = usePathname();
  const { user } = useAuth();

  const isActive = (href: string) => {
    const currentPath = pathname?.replace(/^\/(ar|en)/, '') || '';
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[280px] p-0">
        <SheetHeader className="border-b p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-lg font-bold">HR</span>
            </div>
            <SheetTitle className="text-lg">نظام الموارد البشرية</SheetTitle>
          </div>
        </SheetHeader>

        <ScrollArea className="flex-1 px-2 py-4">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block"
                >
                  <Button
                    variant={active ? 'default' : 'ghost'}
                    className={cn(
                      'w-full justify-start gap-3',
                      !active && 'hover:bg-accent',
                    )}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </nav>
        </ScrollArea>

        {/* User Info */}
        {user && (
          <div className="border-t p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-sm font-semibold">
                  {user.firstName[0]}
                  {user.lastName[0]}
                </span>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="truncate text-sm font-medium">
                  {user.firstName} {user.lastName}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {user.jobTitle}
                </p>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
