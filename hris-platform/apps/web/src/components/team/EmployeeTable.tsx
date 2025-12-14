'use client';

import { Employee } from '@/types/employee';
import { Mail, Phone, Eye, User } from 'lucide-react';
import Image from 'next/image';

interface EmployeeTableProps {
  employees: Employee[];
  locale: string;
  onViewProfile: (employee: Employee) => void;
}

export function EmployeeTable({ employees, locale, onViewProfile }: EmployeeTableProps) {
  const isArabic = locale === 'ar';

  const handleEmailClick = (email: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">
                {isArabic ? 'الصورة' : 'Avatar'}
              </th>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">
                {isArabic ? 'الاسم' : 'Name'}
              </th>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">
                {isArabic ? 'المسمى الوظيفي' : 'Position'}
              </th>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">
                {isArabic ? 'القسم' : 'Department'}
              </th>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">
                {isArabic ? 'البريد' : 'Email'}
              </th>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">
                {isArabic ? 'الجوال' : 'Phone'}
              </th>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">
                {isArabic ? 'الإجراءات' : 'Actions'}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {employees.map((employee) => (
              <tr
                key={employee.id}
                className="hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => onViewProfile(employee)}
              >
                {/* Avatar */}
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                    {employee.avatar ? (
                      <Image
                        src={employee.avatar}
                        alt={isArabic ? employee.nameAr : employee.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary-bg">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                    )}
                  </div>
                </td>

                {/* Name */}
                <td className="px-4 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {isArabic ? employee.nameAr : employee.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {employee.employeeNumber}
                    </div>
                  </div>
                </td>

                {/* Position */}
                <td className="px-4 py-4">
                  <div className="text-sm text-gray-900">
                    {isArabic ? employee.positionAr : employee.position}
                  </div>
                </td>

                {/* Department */}
                <td className="px-4 py-4">
                  <div className="text-sm text-gray-700">
                    {isArabic ? employee.departmentAr : employee.department}
                  </div>
                </td>

                {/* Email */}
                <td className="px-4 py-4">
                  <button
                    onClick={(e) => handleEmailClick(employee.email, e)}
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="truncate max-w-[200px]">
                      {employee.email}
                    </span>
                  </button>
                </td>

                {/* Phone */}
                <td className="px-4 py-4">
                  <button
                    onClick={(e) => handlePhoneClick(employee.phone, e)}
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors"
                    dir="ltr"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{employee.phone}</span>
                  </button>
                </td>

                {/* Actions */}
                <td className="px-4 py-4 whitespace-nowrap">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewProfile(employee);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50 hover:border-primary transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'عرض' : 'View'}</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {employees.length === 0 && (
        <div className="text-center py-12">
          <User className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-sm text-gray-500">
            {isArabic ? 'لا يوجد موظفين' : 'No employees found'}
          </p>
        </div>
      )}
    </div>
  );
}
