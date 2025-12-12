import { useTranslations } from 'next-intl';

export default function AdminDashboard() {
  const t = useTranslations('admin');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          {t('title')}
        </h1>
        <p className="text-center text-lg">
          HRIS Platform - Admin Dashboard
        </p>
      </div>
    </main>
  );
}
