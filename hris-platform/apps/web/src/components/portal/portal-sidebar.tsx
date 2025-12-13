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
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { cn } from '@hris/ui';
import { Button } from '@hris/ui';
import { ScrollArea } from '@hris/ui';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@hris/ui';
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

export function PortalSidebar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  // Load collapsed state from localStorage
  React.useEffect(() => {
    const saved = localStorage.getItem('sidebar-collapsed');
    if (saved !== null) {
      setIsCollapsed(saved === 'true');
    }
  }, []);

  // Save collapsed state to localStorage
  const toggleCollapsed = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem('sidebar-collapsed', String(newState));
  };

  const isActive = (href: string) => {
    const currentPath = pathname?.replace(/^\/(ar|en)/, '') || '';
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };

  return (
    <aside
      className={cn(
        'relative hidden h-screen flex-col border-s bg-card transition-all duration-300 md:flex',
        isCollapsed ? 'w-20' : 'w-[280px]',
      )}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b px-4">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-lg font-bold">HR</span>
            </div>
            <span className="text-lg font-semibold">نظام الموارد البشرية</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className={cn('h-8 w-8', isCollapsed && 'mx-auto')}
          onClick={toggleCollapsed}
        >
          {isCollapsed ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-2 py-4">
        <TooltipProvider delayDuration={0}>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              const navButton = (
                <Link href={item.href} className="block">
                  <Button
                    variant={active ? 'default' : 'ghost'}
                    className={cn(
                      'w-full justify-start gap-3',
                      isCollapsed && 'justify-center px-2',
                      !active && 'hover:bg-accent',
                    )}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    {!isCollapsed && <span>{item.label}</span>}
                  </Button>
                </Link>
              );

              if (isCollapsed) {
                return (
                  <Tooltip key={item.href}>
                    <TooltipTrigger asChild>{navButton}</TooltipTrigger>
                    <TooltipContent side="left">
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              }

              return <div key={item.href}>{navButton}</div>;
            })}
          </nav>
        </TooltipProvider>
      </ScrollArea>

      {/* User Info */}
      {user && (
        <div className="border-t p-4">
          {!isCollapsed ? (
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
          ) : (
            <div className="flex justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-sm font-semibold">
                  {user.firstName[0]}
                  {user.lastName[0]}
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </aside>
  );
}
