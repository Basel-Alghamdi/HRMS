'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, Upload, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';
import { useProfile, useUpdateProfile, useChangePassword } from '@/hooks/use-profile';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Label,
  Avatar,
  AvatarFallback,
  LoadingSpinner,
} from '@hris/ui';

// Validation schemas
const profileSchema = z.object({
  phone: z.string().min(10, 'رقم الجوال يجب أن يكون 10 أرقام على الأقل'),
  address: z.string().min(5, 'العنوان يجب أن يكون 5 أحرف على الأقل'),
  emergencyContact: z.object({
    name: z.string().min(2, 'الاسم مطلوب'),
    phone: z.string().min(10, 'رقم الجوال يجب أن يكون 10 أرقام على الأقل'),
    relationship: z.string().min(2, 'صلة القرابة مطلوبة'),
  }),
});

const passwordSchema = z
  .object({
    currentPassword: z.string().min(1, 'كلمة المرور الحالية مطلوبة'),
    newPassword: z
      .string()
      .min(8, 'كلمة المرور يجب أن تكون 8 أحرف على الأقل')
      .regex(/[A-Z]/, 'يجب أن تحتوي على حرف كبير واحد على الأقل')
      .regex(/[a-z]/, 'يجب أن تحتوي على حرف صغير واحد على الأقل')
      .regex(/[0-9]/, 'يجب أن تحتوي على رقم واحد على الأقل')
      .regex(/[^A-Za-z0-9]/, 'يجب أن تحتوي على رمز خاص واحد على الأقل'),
    confirmPassword: z.string().min(1, 'تأكيد كلمة المرور مطلوب'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'كلمات المرور غير متطابقة',
    path: ['confirmPassword'],
  });

type ProfileFormData = z.infer<typeof profileSchema>;
type PasswordFormData = z.infer<typeof passwordSchema>;

export default function ProfileEditPage() {
  const router = useRouter();
  const { data: profile, isLoading } = useProfile();
  const updateProfileMutation = useUpdateProfile();
  const changePasswordMutation = useChangePassword();

  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(false);

  // Profile form
  const profileForm = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      phone: profile?.phone || '',
      address: profile?.address || '',
      emergencyContact: {
        name: profile?.emergencyContact.name || '',
        phone: profile?.emergencyContact.phone || '',
        relationship: profile?.emergencyContact.relationship || '',
      },
    },
  });

  // Password form
  const passwordForm = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  // Update form when profile loads
  React.useEffect(() => {
    if (profile) {
      profileForm.reset({
        phone: profile.phone,
        address: profile.address,
        emergencyContact: {
          name: profile.emergencyContact.name,
          phone: profile.emergencyContact.phone,
          relationship: profile.emergencyContact.relationship,
        },
      });
    }
  }, [profile, profileForm]);

  // Track unsaved changes
  React.useEffect(() => {
    const subscription = profileForm.watch(() => {
      setHasUnsavedChanges(true);
    });
    return () => subscription.unsubscribe();
  }, [profileForm]);

  // Warn on navigation if unsaved changes
  React.useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);

  const onProfileSubmit = async (data: ProfileFormData) => {
    try {
      await updateProfileMutation.mutateAsync(data);
      setHasUnsavedChanges(false);
      toast.success('تم حفظ التغييرات بنجاح');
      router.push('/ar/profile');
    } catch (error) {
      toast.error('حدث خطأ أثناء حفظ التغييرات');
    }
  };

  const onPasswordSubmit = async (data: PasswordFormData) => {
    try {
      await changePasswordMutation.mutateAsync(data);
      toast.success('تم تغيير كلمة المرور بنجاح');
      passwordForm.reset();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'حدث خطأ أثناء تغيير كلمة المرور';
      toast.error(message);
    }
  };

  const handleCancel = () => {
    if (hasUnsavedChanges) {
      const confirmed = window.confirm(
        'لديك تغييرات غير محفوظة. هل أنت متأكد من الإلغاء؟'
      );
      if (!confirmed) return;
    }
    router.push('/ar/profile');
  };

  if (isLoading || !profile) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={handleCancel}>
            <ArrowRight className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">تعديل الملف الشخصي</h1>
            <p className="text-gray-500">تعديل معلوماتك الشخصية وكلمة المرور</p>
          </div>
        </div>
      </div>

      {/* Profile Picture */}
      <Card>
        <CardHeader>
          <CardTitle>صورة الملف الشخصي</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="bg-primary text-2xl text-white">
                {profile.firstName[0]}
                {profile.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <Button variant="outline" className="gap-2">
                <Upload className="h-4 w-4" />
                تحميل صورة جديدة
              </Button>
              <p className="mt-2 text-sm text-gray-500">
                JPG, PNG أو GIF (الحد الأقصى 2MB)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Information Form */}
      <form onSubmit={profileForm.handleSubmit(onProfileSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>المعلومات الشخصية</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Non-editable fields */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">الاسم الكامل</Label>
                <Input
                  id="fullName"
                  value={profile.fullName}
                  disabled
                  className="bg-gray-50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="employeeNumber">الرقم الوظيفي</Label>
                <Input
                  id="employeeNumber"
                  value={profile.employeeNumber}
                  disabled
                  className="bg-gray-50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  value={profile.email}
                  disabled
                  className="bg-gray-50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nationalId">رقم الهوية</Label>
                <Input
                  id="nationalId"
                  value={`***** ${profile.nationalId.slice(-4)}`}
                  disabled
                  className="bg-gray-50"
                />
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="mb-4 text-lg font-semibold">معلومات قابلة للتعديل</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الجوال *</Label>
                  <Input
                    id="phone"
                    {...profileForm.register('phone')}
                    placeholder="+966501234567"
                  />
                  {profileForm.formState.errors.phone && (
                    <p className="text-sm text-error">
                      {profileForm.formState.errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="address">العنوان *</Label>
                  <Input
                    id="address"
                    {...profileForm.register('address')}
                    placeholder="الرياض، حي النخيل، شارع الملك فهد"
                  />
                  {profileForm.formState.errors.address && (
                    <p className="text-sm text-error">
                      {profileForm.formState.errors.address.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="border-t pt-6">
              <h3 className="mb-4 text-lg font-semibold">
                جهة اتصال الطوارئ
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="emergencyName">الاسم *</Label>
                  <Input
                    id="emergencyName"
                    {...profileForm.register('emergencyContact.name')}
                    placeholder="أحمد محمد العمري"
                  />
                  {profileForm.formState.errors.emergencyContact?.name && (
                    <p className="text-sm text-error">
                      {profileForm.formState.errors.emergencyContact.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emergencyPhone">رقم الجوال *</Label>
                  <Input
                    id="emergencyPhone"
                    {...profileForm.register('emergencyContact.phone')}
                    placeholder="+966509876543"
                  />
                  {profileForm.formState.errors.emergencyContact?.phone && (
                    <p className="text-sm text-error">
                      {profileForm.formState.errors.emergencyContact.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emergencyRelationship">صلة القرابة *</Label>
                  <Input
                    id="emergencyRelationship"
                    {...profileForm.register('emergencyContact.relationship')}
                    placeholder="أب"
                  />
                  {profileForm.formState.errors.emergencyContact?.relationship && (
                    <p className="text-sm text-error">
                      {
                        profileForm.formState.errors.emergencyContact.relationship
                          .message
                      }
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-start gap-3 border-t pt-6">
              <Button
                type="submit"
                disabled={updateProfileMutation.isPending}
                className="gap-2"
              >
                {updateProfileMutation.isPending && <LoadingSpinner size="sm" />}
                حفظ التغييرات
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                disabled={updateProfileMutation.isPending}
              >
                إلغاء
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>

      {/* Change Password Section */}
      <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>تغيير كلمة المرور</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {/* Current Password */}
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="currentPassword">كلمة المرور الحالية *</Label>
                <div className="relative">
                  <Input
                    id="currentPassword"
                    type={showCurrentPassword ? 'text' : 'password'}
                    {...passwordForm.register('currentPassword')}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showCurrentPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {passwordForm.formState.errors.currentPassword && (
                  <p className="text-sm text-error">
                    {passwordForm.formState.errors.currentPassword.message}
                  </p>
                )}
              </div>

              {/* New Password */}
              <div className="space-y-2">
                <Label htmlFor="newPassword">كلمة المرور الجديدة *</Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showNewPassword ? 'text' : 'password'}
                    {...passwordForm.register('newPassword')}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showNewPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {passwordForm.formState.errors.newPassword && (
                  <p className="text-sm text-error">
                    {passwordForm.formState.errors.newPassword.message}
                  </p>
                )}
                <p className="text-xs text-gray-500">
                  يجب أن تحتوي على 8 أحرف على الأقل، حرف كبير، حرف صغير، رقم، ورمز
                  خاص
                </p>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">تأكيد كلمة المرور *</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    {...passwordForm.register('confirmPassword')}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {passwordForm.formState.errors.confirmPassword && (
                  <p className="text-sm text-error">
                    {passwordForm.formState.errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            {/* Password Change Button */}
            <div className="border-t pt-6">
              <Button
                type="submit"
                disabled={changePasswordMutation.isPending}
                className="gap-2"
              >
                {changePasswordMutation.isPending && <LoadingSpinner size="sm" />}
                تغيير كلمة المرور
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
