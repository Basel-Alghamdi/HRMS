'use client';

import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Bell, LogOut, Settings, User, Menu } from 'lucide-react';
import { Button } from '@hris/ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@hris/ui';
import { Avatar, AvatarFallback } from '@hris/ui';
import { Badge } from '@hris/ui';
import { useAuth } from '@/hooks/use-auth';

interface PortalHeaderProps {
  onMenuClick?: () => void;
}

const pageTitles: Record<string, string> = {
  '/dashboard': 'لوحة التحكم',
  '/profile': 'الملف الشخصي',
  '/attendance': 'الحضور والانصراف',
  '/leave': 'الإجازات',
  '/payslips': 'كشوف الرواتب',
  '/team': 'فريق العمل',
};

export function PortalHeader({ onMenuClick }: PortalHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const currentPath = pathname?.replace(/^\/(ar|en)/, '') || '';
  const pageTitle = pageTitles[currentPath] || 'نظام الموارد البشرية';

  const handleLogout = () => {
    logout();
  };

  // Mock notification count
  const notificationCount = 3;

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={onMenuClick}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">فتح القائمة</span>
      </Button>

      {/* Page Title */}
      <div className="flex-1">
        <h1 className="text-xl font-semibold">{pageTitle}</h1>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {notificationCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -end-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full p-0 text-xs"
            >
              {notificationCount}
            </Badge>
          )}
          <span className="sr-only">الإشعارات</span>
        </Button>

        {/* User Menu */}
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-10 w-10 rounded-full"
              >
                <Avatar>
                  <AvatarFallback>
                    {user.firstName[0]}
                    {user.lastName[0]}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push('/ar/profile')}>
                <User className="me-2 h-4 w-4" />
                الملف الشخصي
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="me-2 h-4 w-4" />
                الإعدادات
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-destructive focus:text-destructive"
                onClick={handleLogout}
              >
                <LogOut className="me-2 h-4 w-4" />
                تسجيل الخروج
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
}
