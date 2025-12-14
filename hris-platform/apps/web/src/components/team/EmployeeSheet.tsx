'use client';

import { Employee } from '@/types/employee';
import { X, Mail, Phone, User, Calendar, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

interface EmployeeSheetProps {
  employee: Employee | null;
  locale: string;
  isOpen: boolean;
  onClose: () => void;
}

export function EmployeeSheet({ employee, locale, isOpen, onClose }: EmployeeSheetProps) {
  const isArabic = locale === 'ar';

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when sheet is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !employee) return null;

  const handleEmailClick = () => {
    window.location.href = `mailto:${employee.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${employee.phone}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(isArabic ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className={`fixed top-0 ${isArabic ? 'left-0' : 'right-0'} h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-lg font-semibold text-gray-900">
            {isArabic ? 'الملف الشخصي' : 'Profile'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Avatar & Basic Info */}
          <div className="text-center">
            <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100 mx-auto mb-4">
              {employee.avatar ? (
                <Image
                  src={employee.avatar}
                  alt={isArabic ? employee.nameAr : employee.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-primary-bg">
                  <User className="w-12 h-12 text-primary" />
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {isArabic ? employee.nameAr : employee.name}
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              {isArabic ? employee.positionAr : employee.position}
            </p>
            <p className="text-sm text-gray-500">
              {isArabic ? employee.departmentAr : employee.department}
            </p>
          </div>

          <div className="h-px bg-gray-200"></div>

          {/* Contact Information */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-200">
              {isArabic ? 'معلومات الاتصال' : 'Contact Information'}
            </h4>
            <div className="space-y-3">
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-3 text-sm text-gray-700 hover:text-primary transition-colors w-full"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-gray-600" />
                </div>
                <span className="truncate text-start">{employee.email}</span>
              </button>
              <button
                onClick={handlePhoneClick}
                className="flex items-center gap-3 text-sm text-gray-700 hover:text-primary transition-colors w-full"
                dir="ltr"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-gray-600" />
                </div>
                <span className="truncate">{employee.phone}</span>
              </button>
            </div>
          </div>

          <div className="h-px bg-gray-200"></div>

          {/* Work Information */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-200">
              {isArabic ? 'معلومات العمل' : 'Work Information'}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-0.5">
                    {isArabic ? 'الرقم الوظيفي' : 'Employee Number'}
                  </p>
                  <p className="text-sm text-gray-900 font-medium">
                    {employee.employeeNumber}
                  </p>
                </div>
              </div>

              {employee.managerName && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-0.5">
                      {isArabic ? 'المدير' : 'Manager'}
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                      {isArabic ? employee.managerNameAr : employee.managerName}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-0.5">
                    {isArabic ? 'تاريخ الانضمام' : 'Join Date'}
                  </p>
                  <p className="text-sm text-gray-900 font-medium">
                    {formatDate(employee.joinDate)}
                  </p>
                </div>
              </div>

              {employee.location && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-0.5">
                      {isArabic ? 'الموقع' : 'Location'}
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                      {isArabic ? employee.locationAr : employee.location}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="h-px bg-gray-200"></div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={handleEmailClick}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{isArabic ? 'إرسال بريد' : 'Send Email'}</span>
            </button>
            <button
              onClick={handlePhoneClick}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{isArabic ? 'اتصال' : 'Call'}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
