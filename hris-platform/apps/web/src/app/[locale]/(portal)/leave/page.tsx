'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  Button,
  LoadingSpinner,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@hris/ui';
import { Plus, Eye, X } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { ar } from 'date-fns/locale';
import { useLeaveRequests, useLeaveBalance } from '@/hooks/use-leave';
import {
  getLeaveTypeIcon,
  getLeaveStatusColor,
  getLeaveStatusLabel,
} from '@/lib/mock-data/leave';
import type { LeaveStatus, LeaveRequest } from '@/lib/types/leave';
import { LeaveDetailsSheet } from '@/components/leave/leave-details-sheet';

export default function LeavePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState<LeaveStatus | 'all'>('all');
  const [selectedRequest, setSelectedRequest] = React.useState<LeaveRequest | null>(null);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const { data: allRequests, isLoading: isLoadingRequests } = useLeaveRequests();
  const { data: balance, isLoading: isLoadingBalance } = useLeaveBalance();

  // Filter requests based on active tab
  const filteredRequests = React.useMemo(() => {
    if (!allRequests) return [];
    if (activeTab === 'all') return allRequests;
    return allRequests.filter((req) => req.status === activeTab);
  }, [allRequests, activeTab]);

  const formatDate = (dateStr: string) => {
    try {
      return format(parseISO(dateStr), 'd MMMM yyyy', { locale: ar });
    } catch {
      return dateStr;
    }
  };

  const handleViewRequest = (request: LeaveRequest) => {
    setSelectedRequest(request);
    setIsSheetOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">الإجازات</h1>
          <p className="text-gray-500">إدارة طلبات الإجازات والأرصدة</p>
        </div>

        <Button
          onClick={() => router.push('/ar/leave/new')}
          className="gap-2"
        >
          <Plus className="h-4 w-4" />
          طلب إجازة
        </Button>
      </div>

      {/* Leave Balance Cards */}
      <div className="overflow-x-auto">
        <div className="flex gap-4 pb-2">
          {isLoadingBalance ? (
            <div className="flex items-center justify-center w-full py-12">
              <LoadingSpinner size="lg" />
            </div>
          ) : (
            balance?.map((item) => (
              <Card key={item.type} className="min-w-[280px] flex-shrink-0">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-semibold text-gray-900">
                          {item.label}
                        </span>
                      </div>
                    </div>

                    <div className="text-center py-2">
                      <div className="text-3xl font-bold" style={{ color: item.color }}>
                        {item.used} / {item.total}
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 right-0 h-full rounded-full transition-all"
                        style={{
                          width: `${(item.used / item.total) * 100}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>

                    <div className="text-center">
                      <span className="text-sm text-gray-600">
                        متبقي: <span className="font-semibold text-gray-900">{item.remaining}</span>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* Tabs and Table */}
      <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as LeaveStatus | 'all')} dir="rtl">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">الكل</TabsTrigger>
          <TabsTrigger value="pending">قيد الانتظار</TabsTrigger>
          <TabsTrigger value="approved">موافق عليها</TabsTrigger>
          <TabsTrigger value="rejected">مرفوضة</TabsTrigger>
          <TabsTrigger value="cancelled">ملغاة</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <Card>
            <CardContent className="p-0">
              {isLoadingRequests ? (
                <div className="flex items-center justify-center py-12">
                  <LoadingSpinner size="lg" />
                </div>
              ) : filteredRequests.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p>لا توجد طلبات إجازات</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          نوع الإجازة
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          من
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          إلى
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          الأيام
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          الحالة
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          تاريخ الطلب
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          الإجراءات
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredRequests.map((request) => (
                        <tr
                          key={request.id}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{getLeaveTypeIcon(request.type)}</span>
                              <span className="font-medium text-gray-900">
                                {request.typeLabel}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-700">
                            {formatDate(request.startDate)}
                          </td>
                          <td className="px-6 py-4 text-gray-700">
                            {formatDate(request.endDate)}
                          </td>
                          <td className="px-6 py-4">
                            <span className="font-semibold text-gray-900">
                              {request.days} {request.days === 1 ? 'يوم' : 'أيام'}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <Badge className={getLeaveStatusColor(request.status)}>
                              {getLeaveStatusLabel(request.status)}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {formatDate(request.requestedAt.split('T')[0])}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="gap-1"
                                onClick={() => handleViewRequest(request)}
                              >
                                <Eye className="h-3 w-3" />
                                عرض
                              </Button>
                              {request.status === 'pending' && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="gap-1 text-error hover:bg-error-light"
                                  onClick={() => handleViewRequest(request)}
                                >
                                  <X className="h-3 w-3" />
                                  إلغاء
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Leave Details Sheet */}
      <LeaveDetailsSheet
        open={isSheetOpen}
        onOpenChange={setIsSheetOpen}
        request={selectedRequest}
      />
    </div>
  );
}
