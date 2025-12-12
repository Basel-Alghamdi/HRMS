'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../button';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  defaultCollapsed?: boolean;
}

export function Sidebar({
  children,
  defaultCollapsed = false,
  className,
  ...props
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  return (
    <aside
      className={cn(
        'relative flex h-screen flex-col border-e bg-card transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64',
        className,
      )}
      {...props}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary" />
            <span className="font-semibold">HRIS</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className={cn('h-8 w-8', isCollapsed && 'mx-auto')}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>
      <nav className="flex-1 overflow-y-auto p-2">{children}</nav>
    </aside>
  );
}

interface SidebarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  collapsed?: boolean;
}

export function SidebarItem({
  icon,
  label,
  active,
  collapsed,
  className,
  ...props
}: SidebarItemProps) {
  return (
    <button
      className={cn(
        'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
        active
          ? 'bg-primary text-primary-foreground'
          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
        collapsed && 'justify-center',
        className,
      )}
      {...props}
    >
      {icon && <span className="h-5 w-5">{icon}</span>}
      {!collapsed && <span>{label}</span>}
    </button>
  );
}

interface SidebarGroupProps {
  label?: string;
  children: React.ReactNode;
  collapsed?: boolean;
}

export function SidebarGroup({
  label,
  children,
  collapsed,
}: SidebarGroupProps) {
  return (
    <div className="mb-4">
      {label && !collapsed && (
        <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </h3>
      )}
      <div className="space-y-1">{children}</div>
    </div>
  );
}
