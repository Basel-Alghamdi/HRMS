'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  Label,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  DatePicker,
  LoadingSpinner,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@hris/ui';
import { ArrowRight, Upload, X } from 'lucide-react';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { toast } from 'react-hot-toast';
import { useLeaveBalance, useCreateLeave } from '@/hooks/use-leave';
import {
  leaveTypeOptions,
  calculateWorkingDays,
  validateLeaveRequest,
} from '@/lib/mock-data/leave';
import type { LeaveType } from '@/lib/types/leave';

// Form validation schema
const leaveRequestSchema = z.object({
  type: z.string().min(1, 'يرجى اختيار نوع الإجازة'),
  startDate: z.date({ required_error: 'يرجى تحديد تاريخ البداية' }),
  endDate: z.date({ required_error: 'يرجى تحديد تاريخ النهاية' }),
  reason: z.string().min(10, 'يجب أن يكون السبب 10 أحرف على الأقل'),
  attachment: z.instanceof(File).optional(),
});

type LeaveRequestForm = z.infer<typeof leaveRequestSchema>;

export default function NewLeaveRequestPage() {
  const router = useRouter();
  const [showConfirmDialog, setShowConfirmDialog] = React.useState(false);
  const [uploadedFile, setUploadedFile] = React.useState<File | null>(null);

  const { data: balances, isLoading: isLoadingBalance } = useLeaveBalance();
  const { mutate: createLeave, isPending: isSubmitting } = useCreateLeave();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<LeaveRequestForm>({
    resolver: zodResolver(leaveRequestSchema),
  });

  const selectedType = watch('type') as LeaveType;
  const startDate = watch('startDate');
  const endDate = watch('endDate');

  // Calculate working days
  const workingDays = React.useMemo(() => {
    if (startDate && endDate) {
      const start = format(startDate, 'yyyy-MM-dd');
      const end = format(endDate, 'yyyy-MM-dd');
      return calculateWorkingDays(start, end);
    }
    return 0;
  }, [startDate, endDate]);

  // Get current balance for selected type
  const currentBalance = React.useMemo(() => {
    return balances?.find((b) => b.type === selectedType);
  }, [balances, selectedType]);

  // Calculate remaining balance after request
  const remainingAfter = React.useMemo(() => {
    if (!currentBalance) return null;
    return currentBalance.remaining - workingDays;
  }, [currentBalance, workingDays]);

  // Validate form data
  const validationError = React.useMemo(() => {
    if (!selectedType || !startDate || !endDate) return null;

    const start = format(startDate, 'yyyy-MM-dd');
    const end = format(endDate, 'yyyy-MM-dd');

    const result = validateLeaveRequest(selectedType, start, end, currentBalance);

    return result.valid ? null : result.error;
  }, [selectedType, startDate, endDate, currentBalance]);

  // Check if attachment is required
  const requiresAttachment = React.useMemo(() => {
    const option = leaveTypeOptions.find((opt) => opt.value === selectedType);
    if (option?.requiresAttachment) {
      // Sick leave > 2 days requires attachment
      return selectedType === 'sick' && workingDays > 2;
    }
    return false;
  }, [selectedType, workingDays]);

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast.error('حجم الملف يجب أن يكون أقل من 10 ميجابايت');
        return;
      }

      // Validate file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
      if (!allowedTypes.includes(file.type)) {
        toast.error('نوع الملف غير مدعوم. الملفات المسموحة: PDF, JPG, PNG');
        return;
      }

      setUploadedFile(file);
      setValue('attachment', file);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setValue('attachment', undefined);
  };

  const onSubmit = () => {
    // Check validation
    if (validationError) {
      toast.error(validationError);
      return;
    }

    // Check attachment requirement
    if (requiresAttachment && !uploadedFile) {
      toast.error('يجب إرفاق تقرير طبي للإجازة المرضية أكثر من يومين');
      return;
    }

    // Show confirmation dialog
    setShowConfirmDialog(true);
  };

  const confirmSubmit = () => {
    const formData = watch();

    createLeave(
      {
        type: formData.type as LeaveType,
        startDate: format(formData.startDate, 'yyyy-MM-dd'),
        endDate: format(formData.endDate, 'yyyy-MM-dd'),
        reason: formData.reason,
      },
      {
        onSuccess: () => {
          toast.success('تم إرسال طلب الإجازة بنجاح');
          setShowConfirmDialog(false);
          router.push('/ar/leave');
        },
        onError: () => {
          toast.error('حدث خطأ أثناء إرسال الطلب');
          setShowConfirmDialog(false);
        },
      }
    );
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push('/ar/leave')}
          className="gap-2"
        >
          <ArrowRight className="h-4 w-4" />
          رجوع
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">طلب إجازة جديد</h1>
          <p className="text-gray-500">املأ النموذج لتقديم طلب إجازة</p>
        </div>
      </div>

      {/* Form */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">تفاصيل الإجازة</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Leave Type */}
            <div className="space-y-2">
              <Label htmlFor="type">
                نوع الإجازة <span className="text-error">*</span>
              </Label>
              {isLoadingBalance ? (
                <div className="flex items-center justify-center py-8">
                  <LoadingSpinner />
                </div>
              ) : (
                <>
                  <Select
                    value={selectedType}
                    onValueChange={(value) => setValue('type', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="اختر نوع الإجازة" />
                    </SelectTrigger>
                    <SelectContent>
                      {leaveTypeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div className="flex items-center gap-2">
                            <span>{option.icon}</span>
                            <span>{option.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.type && (
                    <p className="text-sm text-error">{errors.type.message}</p>
                  )}
                </>
              )}
            </div>

            {/* Date Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Start Date */}
              <div className="space-y-2">
                <Label htmlFor="startDate">
                  من تاريخ <span className="text-error">*</span>
                </Label>
                <DatePicker
                  selected={startDate}
                  onSelect={(date: Date | undefined) => setValue('startDate', date as Date)}
                  locale={ar}
                  disabled={(date: Date) => date < new Date()}
                />
                {errors.startDate && (
                  <p className="text-sm text-error">{errors.startDate.message}</p>
                )}
              </div>

              {/* End Date */}
              <div className="space-y-2">
                <Label htmlFor="endDate">
                  إلى تاريخ <span className="text-error">*</span>
                </Label>
                <DatePicker
                  selected={endDate}
                  onSelect={(date: Date | undefined) => setValue('endDate', date as Date)}
                  locale={ar}
                  disabled={(date: Date) => date < new Date() || (startDate && date < startDate)}
                />
                {errors.endDate && (
                  <p className="text-sm text-error">{errors.endDate.message}</p>
                )}
              </div>
            </div>

            {/* Calculated Days */}
            {workingDays > 0 && (
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">عدد الأيام:</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {workingDays} {workingDays === 1 ? 'يوم' : 'أيام'}
                  </span>
                </div>

                {currentBalance && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">الرصيد المتبقي:</span>
                    <span className="text-sm">
                      <span className="font-semibold text-gray-900">
                        {currentBalance.remaining} يوم
                      </span>
                      <span className="mx-2">←</span>
                      <span
                        className={`font-semibold ${
                          remainingAfter !== null && remainingAfter < 0
                            ? 'text-error'
                            : 'text-success'
                        }`}
                      >
                        {remainingAfter} يوم
                      </span>
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Validation Error */}
            {validationError && (
              <div className="bg-error-light border border-error rounded-lg p-3">
                <p className="text-sm text-error">{validationError}</p>
              </div>
            )}

            {/* Reason */}
            <div className="space-y-2">
              <Label htmlFor="reason">
                السبب <span className="text-error">*</span>
              </Label>
              <textarea
                {...register('reason')}
                id="reason"
                rows={4}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="اكتب سبب الإجازة (10 أحرف على الأقل)..."
              />
              {errors.reason && (
                <p className="text-sm text-error">{errors.reason.message}</p>
              )}
            </div>

            {/* File Attachment */}
            <div className="space-y-2">
              <Label htmlFor="attachment">
                إرفاق ملف {requiresAttachment && <span className="text-error">*</span>}
              </Label>
              <p className="text-xs text-gray-500">
                {requiresAttachment
                  ? 'مطلوب تقرير طبي للإجازة المرضية أكثر من يومين'
                  : 'اختياري - PDF, JPG, PNG (حد أقصى 10 ميجابايت)'}
              </p>

              {uploadedFile ? (
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2">
                    <Upload className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{uploadedFile.name}</p>
                      <p className="text-xs text-gray-500">
                        {(uploadedFile.size / 1024).toFixed(0)} كيلوبايت
                      </p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={removeFile}
                    className="text-error hover:bg-error-light"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                  <input
                    type="file"
                    id="attachment"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="attachment" className="cursor-pointer">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">اضغط لاختيار ملف</p>
                    <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (حد أقصى 10 ميجابايت)</p>
                  </label>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push('/ar/leave')}
                disabled={isSubmitting}
              >
                إلغاء
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !!validationError}
                className="gap-2"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" />
                    جاري الإرسال...
                  </>
                ) : (
                  'إرسال الطلب'
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>تأكيد طلب الإجازة</AlertDialogTitle>
            <AlertDialogDescription className="space-y-2 text-right">
              <p>هل أنت متأكد من إرسال طلب الإجازة بالتفاصيل التالية:</p>
              <div className="bg-gray-50 rounded-lg p-4 mt-3 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">نوع الإجازة:</span>
                  <span className="font-medium text-gray-900">
                    {leaveTypeOptions.find((opt) => opt.value === selectedType)?.label}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">المدة:</span>
                  <span className="font-medium text-gray-900">
                    {startDate && format(startDate, 'd MMMM yyyy', { locale: ar })} -{' '}
                    {endDate && format(endDate, 'd MMMM yyyy', { locale: ar })}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">عدد الأيام:</span>
                  <span className="font-medium text-gray-900">
                    {workingDays} {workingDays === 1 ? 'يوم' : 'أيام'}
                  </span>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isSubmitting}>إلغاء</AlertDialogCancel>
            <AlertDialogAction onClick={confirmSubmit} disabled={isSubmitting}>
              {isSubmitting ? 'جاري الإرسال...' : 'تأكيد الإرسال'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
