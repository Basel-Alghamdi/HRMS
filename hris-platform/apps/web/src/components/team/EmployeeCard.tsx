'use client';

import { Employee } from '@/types/employee';
import { Mail, Phone, User } from 'lucide-react';
import Image from 'next/image';

interface EmployeeCardProps {
  employee: Employee;
  locale: string;
  onViewProfile: (employee: Employee) => void;
}

export function EmployeeCard({ employee, locale, onViewProfile }: EmployeeCardProps) {
  const isArabic = locale === 'ar';

  const handleEmailClick = () => {
    window.location.href = `mailto:${employee.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${employee.phone}`;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md hover:border-primary transition-all duration-200">
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-100">
          {employee.avatar ? (
            <Image
              src={employee.avatar}
              alt={isArabic ? employee.nameAr : employee.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary-bg">
              <User className="w-10 h-10 text-primary" />
            </div>
          )}
        </div>
      </div>

      {/* Name */}
      <div className="text-center mb-4">
        <h3 className="text-base font-semibold text-gray-900 mb-1">
          {isArabic ? employee.nameAr : employee.name}
        </h3>
        <div className="h-px bg-gray-200 w-16 mx-auto mb-2"></div>
        <p className="text-sm text-gray-600 mb-1">
          {isArabic ? employee.positionAr : employee.position}
        </p>
        <p className="text-sm text-gray-500">
          {isArabic ? employee.departmentAr : employee.department}
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-2 mb-4">
        <button
          onClick={handleEmailClick}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors w-full"
        >
          <Mail className="w-4 h-4 flex-shrink-0" />
          <span className="truncate text-start">{employee.email}</span>
        </button>
        <button
          onClick={handlePhoneClick}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors w-full"
          dir="ltr"
        >
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">{employee.phone}</span>
        </button>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => onViewProfile(employee)}
          className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-primary transition-colors"
        >
          {isArabic ? 'عرض الملف' : 'View Profile'}
        </button>
        <button
          onClick={handleEmailClick}
          className="px-3 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors flex items-center justify-center gap-1.5"
        >
          <Mail className="w-4 h-4" />
          <span>{isArabic ? 'إرسال' : 'Email'}</span>
        </button>
      </div>
    </div>
  );
}
