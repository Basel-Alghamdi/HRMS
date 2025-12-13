'use client';

import * as React from 'react';
import { format, parseISO } from 'date-fns';
import { ar } from 'date-fns/locale';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Button,
  Badge,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  LoadingSpinner,
} from '@hris/ui';
import {
  Calendar,
  Clock,
  FileText,
  CheckCircle2,
  XCircle,
  X as XIcon,
  AlertCircle,
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import type { LeaveRequest } from '@/lib/types/leave';
import {
  getLeaveTypeIcon,
  getLeaveStatusColor,
  getLeaveStatusLabel,
} from '@/lib/mock-data/leave';
import { useCancelLeave } from '@/hooks/use-leave';

interface LeaveDetailsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  request: LeaveRequest | null;
}

export function LeaveDetailsSheet({
  open,
  onOpenChange,
  request,
}: LeaveDetailsSheetProps) {
  const [showCancelDialog, setShowCancelDialog] = React.useState(false);
  const { mutate: cancelLeave, isPending: isCancelling } = useCancelLeave();

  if (!request) return null;

  const formatDate = (dateStr: string) => {
    try {
      return format(parseISO(dateStr), 'd MMMM yyyy', { locale: ar });
    } catch {
      return dateStr;
    }
  };

  const formatDateTime = (dateStr: string) => {
    try {
      return format(parseISO(dateStr), 'd MMMM yyyy - h:mm a', { locale: ar });
    } catch {
      return dateStr;
    }
  };

  const handleCancel = () => {
    cancelLeave(request.id, {
      onSuccess: () => {
        toast.success('تم إلغاء طلب الإجازة بنجاح');
        setShowCancelDialog(false);
        onOpenChange(false);
      },
      onError: () => {
        toast.error('حدث خطأ أثناء إلغاء الطلب');
        setShowCancelDialog(false);
      },
    });
  };

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side="left"
          className="w-full sm:max-w-lg overflow-y-auto"
          dir="rtl"
        >
          <SheetHeader>
            <SheetTitle>تفاصيل طلب الإجازة</SheetTitle>
            <SheetDescription>عرض تفاصيل طلب الإجازة الكاملة</SheetDescription>
          </SheetHeader>

          <div className="mt-6 space-y-6">
            {/* Status Badge */}
            <div className="flex items-center justify-between">
              <Badge className={getLeaveStatusColor(request.status)}>
                {getLeaveStatusLabel(request.status)}
              </Badge>
              <span className="text-sm text-gray-500">#{request.id}</span>
            </div>

            {/* Leave Type */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{getLeaveTypeIcon(request.type)}</span>
                <div>
                  <p className="text-sm text-gray-600">نوع الإجازة</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {request.typeLabel}
                  </p>
                </div>
              </div>
            </div>

            {/* Date Range */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-900">المدة الزمنية</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-xs text-gray-600">من تاريخ</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {formatDate(request.startDate)}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-xs text-gray-600">إلى تاريخ</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {formatDate(request.endDate)}
                  </p>
                </div>
              </div>
              <div className="bg-primary-bg rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">عدد الأيام</span>
                  <span className="text-lg font-bold text-primary">
                    {request.days} {request.days === 1 ? 'يوم' : 'أيام'}
                  </span>
                </div>
              </div>
            </div>

            {/* Reason */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                السبب
              </h3>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-700 whitespace-pre-wrap">
                  {request.reason}
                </p>
              </div>
            </div>

            {/* Attachment */}
            {request.attachmentUrl && (
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-900">المرفقات</h3>
                <Button variant="outline" size="sm" className="w-full">
                  <FileText className="h-4 w-4 ms-2" />
                  تحميل المرفق
                </Button>
              </div>
            )}

            {/* Request Timeline */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                سجل الطلب
              </h3>

              <div className="space-y-3">
                {/* Submitted */}
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full bg-info-light p-1.5">
                      <AlertCircle className="h-4 w-4 text-info" />
                    </div>
                    {(request.status === 'approved' || request.status === 'rejected') && (
                      <div className="w-0.5 h-12 bg-gray-200 my-1" />
                    )}
                  </div>
                  <div className="flex-1 pb-3">
                    <p className="text-sm font-medium text-gray-900">تم تقديم الطلب</p>
                    <p className="text-xs text-gray-500">{formatDateTime(request.requestedAt)}</p>
                    <p className="text-xs text-gray-600 mt-1">بواسطة: {request.employeeName}</p>
                  </div>
                </div>

                {/* Approved */}
                {request.status === 'approved' && request.approvedBy && (
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-success-light p-1.5">
                        <CheckCircle2 className="h-4 w-4 text-success" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">تمت الموافقة</p>
                      <p className="text-xs text-gray-500">
                        {request.approvedAt && formatDateTime(request.approvedAt)}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        بواسطة: {request.approvedBy}
                      </p>
                    </div>
                  </div>
                )}

                {/* Rejected */}
                {request.status === 'rejected' && request.rejectedBy && (
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-error-light p-1.5">
                        <XCircle className="h-4 w-4 text-error" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">تم الرفض</p>
                      <p className="text-xs text-gray-500">
                        {request.rejectedAt && formatDateTime(request.rejectedAt)}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        بواسطة: {request.rejectedBy}
                      </p>
                      {request.rejectionReason && (
                        <div className="mt-2 bg-error-light rounded p-2">
                          <p className="text-xs text-error">
                            <span className="font-medium">سبب الرفض:</span> {request.rejectionReason}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Cancelled */}
                {request.status === 'cancelled' && request.cancelledAt && (
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-gray-200 p-1.5">
                        <XIcon className="h-4 w-4 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">تم الإلغاء</p>
                      <p className="text-xs text-gray-500">
                        {formatDateTime(request.cancelledAt)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            {request.status === 'pending' && (
              <div className="pt-4 border-t">
                <Button
                  variant="outline"
                  className="w-full text-error hover:bg-error-light gap-2"
                  onClick={() => setShowCancelDialog(true)}
                  disabled={isCancelling}
                >
                  <XIcon className="h-4 w-4" />
                  إلغاء الطلب
                </Button>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>

      {/* Cancel Confirmation Dialog */}
      <AlertDialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>تأكيد إلغاء الطلب</AlertDialogTitle>
            <AlertDialogDescription className="text-right">
              هل أنت متأكد من إلغاء طلب الإجازة؟ لا يمكن التراجع عن هذا الإجراء.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isCancelling}>تراجع</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleCancel}
              disabled={isCancelling}
              className="bg-error hover:bg-error-dark"
            >
              {isCancelling ? (
                <>
                  <LoadingSpinner size="sm" />
                  جاري الإلغاء...
                </>
              ) : (
                'تأكيد الإلغاء'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
