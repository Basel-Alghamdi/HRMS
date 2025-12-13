'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { User, Briefcase, Phone, FileText, Edit } from 'lucide-react';
import { useProfile, useDocuments } from '@/hooks/use-profile';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Avatar,
  AvatarFallback,
  Button,
  Badge,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  LoadingSpinner,
} from '@hris/ui';
import {
  calculateServiceDuration,
  getDaysUntilExpiry,
} from '@/lib/mock-data/profile';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

export default function ProfilePage() {
  const router = useRouter();
  const { data: profile, isLoading } = useProfile();
  const { data: documents } = useDocuments();

  if (isLoading || !profile) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const statusColors = {
    active: 'bg-success-light text-success',
    inactive: 'bg-gray-100 text-gray-600',
    on_leave: 'bg-info-light text-info',
    terminated: 'bg-error-light text-error',
  };

  const statusLabels = {
    active: 'نشط',
    inactive: 'غير نشط',
    on_leave: 'في إجازة',
    terminated: 'منتهي الخدمة',
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col items-start gap-6 sm:flex-row">
            {/* Avatar */}
            <Avatar className="h-24 w-24">
              <AvatarFallback className="bg-primary text-2xl text-white">
                {profile.firstName[0]}
                {profile.lastName[0]}
              </AvatarFallback>
            </Avatar>

            {/* Info */}
            <div className="flex-1 space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">
                {profile.fullName}
              </h1>
              <p className="text-lg text-gray-600">{profile.jobTitle}</p>
              <p className="text-gray-500">{profile.department}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="font-normal">
                  {profile.employeeNumber}
                </Badge>
                <Badge className={statusColors[profile.employmentStatus]}>
                  {statusLabels[profile.employmentStatus]}
                </Badge>
              </div>
            </div>

            {/* Edit Button */}
            <Button
              onClick={() => router.push('/ar/profile/edit')}
              className="gap-2"
            >
              <Edit className="h-4 w-4" />
              تعديل الملف الشخصي
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="personal" dir="rtl">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">
            <User className="ml-2 h-4 w-4" />
            معلومات شخصية
          </TabsTrigger>
          <TabsTrigger value="employment">
            <Briefcase className="ml-2 h-4 w-4" />
            معلومات الوظيفة
          </TabsTrigger>
          <TabsTrigger value="contact">
            <Phone className="ml-2 h-4 w-4" />
            معلومات الاتصال
          </TabsTrigger>
          <TabsTrigger value="documents">
            <FileText className="ml-2 h-4 w-4" />
            الوثائق
          </TabsTrigger>
        </TabsList>

        {/* Personal Information Tab */}
        <TabsContent value="personal">
          <Card>
            <CardHeader>
              <CardTitle>المعلومات الشخصية</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <InfoField label="الاسم الكامل" value={profile.fullName} />
                <InfoField
                  label="رقم الهوية"
                  value={`***** ${profile.nationalId.slice(-4)}`}
                />
                <InfoField
                  label="تاريخ الميلاد"
                  value={format(new Date(profile.dateOfBirth), 'd MMMM yyyy', {
                    locale: ar,
                  })}
                />
                <InfoField
                  label="الجنس"
                  value={profile.gender === 'male' ? 'ذكر' : 'أنثى'}
                />
                <InfoField label="الجنسية" value={profile.nationality} />
                <InfoField
                  label="الحالة الاجتماعية"
                  value={
                    {
                      single: 'أعزب',
                      married: 'متزوج',
                      divorced: 'مطلق',
                      widowed: 'أرمل',
                    }[profile.maritalStatus]
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Employment Information Tab */}
        <TabsContent value="employment">
          <Card>
            <CardHeader>
              <CardTitle>معلومات الوظيفة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <InfoField
                  label="الرقم الوظيفي"
                  value={profile.employeeNumber}
                />
                <InfoField label="المسمى الوظيفي" value={profile.jobTitle} />
                <InfoField label="القسم" value={profile.department} />
                <InfoField
                  label="المدير المباشر"
                  value={
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-primary text-xs text-white">
                          {profile.manager.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      {profile.manager.name}
                    </div>
                  }
                />
                <InfoField
                  label="تاريخ التعيين"
                  value={format(new Date(profile.hireDate), 'd MMMM yyyy', {
                    locale: ar,
                  })}
                />
                <InfoField
                  label="مدة الخدمة"
                  value={calculateServiceDuration(profile.hireDate)}
                />
                <InfoField
                  label="نوع العقد"
                  value={
                    {
                      permanent: 'دائم',
                      contract: 'عقد',
                      temporary: 'مؤقت',
                    }[profile.contractType]
                  }
                />
                <InfoField
                  label="حالة التوظيف"
                  value={
                    <Badge className={statusColors[profile.employmentStatus]}>
                      {statusLabels[profile.employmentStatus]}
                    </Badge>
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Information Tab */}
        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>معلومات الاتصال</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <InfoField label="البريد الإلكتروني" value={profile.email} />
                <InfoField label="رقم الجوال" value={profile.phone} />
                <div className="md:col-span-2">
                  <InfoField label="العنوان" value={profile.address} />
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="mb-4 text-lg font-semibold">
                  جهة اتصال الطوارئ
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <InfoField
                    label="الاسم"
                    value={profile.emergencyContact.name}
                  />
                  <InfoField
                    label="رقم الجوال"
                    value={profile.emergencyContact.phone}
                  />
                  <InfoField
                    label="صلة القرابة"
                    value={profile.emergencyContact.relationship}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Documents Tab */}
        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>الوثائق</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents?.map((doc) => {
                  const daysUntilExpiry = doc.expiryDate
                    ? getDaysUntilExpiry(doc.expiryDate)
                    : null;
                  const isExpiringSoon =
                    daysUntilExpiry !== null && daysUntilExpiry <= 30;

                  return (
                    <div
                      key={doc.id}
                      className="flex items-start gap-4 rounded-lg border p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium">{doc.name}</h4>
                            <p className="text-sm text-gray-500">
                              تم الرفع:{' '}
                              {format(new Date(doc.uploadedAt), 'd MMMM yyyy', {
                                locale: ar,
                              })}
                            </p>
                            {isExpiringSoon && (
                              <p className="mt-1 text-sm text-warning">
                                ⚠️ ينتهي في: {daysUntilExpiry} يوم
                              </p>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              عرض
                            </Button>
                            <Button variant="outline" size="sm">
                              تحميل
                            </Button>
                            {isExpiringSoon && (
                              <Button variant="outline" size="sm">
                                تحديث
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Info Field Component
function InfoField({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-500">{label}</label>
      <div className="text-base text-gray-900">{value}</div>
    </div>
  );
}
