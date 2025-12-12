import { ForgotPasswordForm } from '@/components/auth/forgot-password-form';

export const metadata = {
  title: 'استعادة كلمة المرور - نظام إدارة الموارد البشرية',
  description: 'استعادة كلمة المرور',
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
