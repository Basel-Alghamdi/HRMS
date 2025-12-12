import { LoginForm } from '@/components/auth/login-form';

export const metadata = {
  title: 'تسجيل الدخول - نظام إدارة الموارد البشرية',
  description: 'تسجيل الدخول إلى حسابك',
};

export default function LoginPage() {
  return <LoginForm />;
}
