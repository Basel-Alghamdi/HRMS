import { ResetPasswordForm } from '@/components/auth/reset-password-form';

export const metadata = {
  title: 'إعادة تعيين كلمة المرور - نظام إدارة الموارد البشرية',
  description: 'إعادة تعيين كلمة المرور',
};

export default function ResetPasswordPage() {
  return <ResetPasswordForm />;
}
