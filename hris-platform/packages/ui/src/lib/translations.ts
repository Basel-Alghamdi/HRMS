/**
 * Arabic translations for common UI text
 * Provides localized strings for all UI components
 */

export const translations = {
  common: {
    loading: 'جار التحميل...',
    save: 'حفظ',
    cancel: 'إلغاء',
    delete: 'حذف',
    edit: 'تعديل',
    add: 'إضافة',
    close: 'إغلاق',
    confirm: 'تأكيد',
    back: 'رجوع',
    next: 'التالي',
    previous: 'السابق',
    search: 'بحث',
    filter: 'تصفية',
    reset: 'إعادة تعيين',
    apply: 'تطبيق',
    ok: 'موافق',
    yes: 'نعم',
    no: 'لا',
    submit: 'إرسال',
    clear: 'مسح',
    viewMore: 'عرض المزيد',
    viewLess: 'عرض أقل',
    selectAll: 'تحديد الكل',
    deselectAll: 'إلغاء تحديد الكل',
    noResults: 'لا توجد نتائج',
    error: 'خطأ',
    success: 'نجاح',
    warning: 'تحذير',
    info: 'معلومات',
  },

  table: {
    noData: 'لا توجد بيانات',
    rowsPerPage: 'صفوف في الصفحة',
    page: 'صفحة',
    of: 'من',
    selected: 'محدد',
    rows: 'صفوف',
    sortAscending: 'ترتيب تصاعدي',
    sortDescending: 'ترتيب تنازلي',
    toggleColumns: 'إظهار/إخفاء الأعمدة',
    filter: 'تصفية',
    search: 'بحث...',
    export: 'تصدير',
    firstPage: 'الصفحة الأولى',
    lastPage: 'الصفحة الأخيرة',
    nextPage: 'الصفحة التالية',
    previousPage: 'الصفحة السابقة',
  },

  validation: {
    required: 'هذا الحقل مطلوب',
    email: 'البريد الإلكتروني غير صحيح',
    min: 'القيمة يجب أن تكون على الأقل {min}',
    max: 'القيمة يجب ألا تتجاوز {max}',
    minLength: 'يجب أن يكون {min} حرفًا على الأقل',
    maxLength: 'يجب ألا يتجاوز {max} حرفًا',
    pattern: 'التنسيق غير صحيح',
    passwordMismatch: 'كلمات المرور غير متطابقة',
    invalidDate: 'التاريخ غير صحيح',
    invalidTime: 'الوقت غير صحيح',
    invalidPhone: 'رقم الهاتف غير صحيح',
    invalidUrl: 'الرابط غير صحيح',
    fileTooLarge: 'الملف كبير جداً',
    invalidFileType: 'نوع الملف غير مدعوم',
  },

  date: {
    selectDate: 'اختر التاريخ',
    selectTime: 'اختر الوقت',
    today: 'اليوم',
    yesterday: 'أمس',
    tomorrow: 'غداً',
    thisWeek: 'هذا الأسبوع',
    thisMonth: 'هذا الشهر',
    lastMonth: 'الشهر الماضي',
    am: 'ص',
    pm: 'م',
    days: {
      sunday: 'الأحد',
      monday: 'الاثنين',
      tuesday: 'الثلاثاء',
      wednesday: 'الأربعاء',
      thursday: 'الخميس',
      friday: 'الجمعة',
      saturday: 'السبت',
    },
    months: {
      january: 'يناير',
      february: 'فبراير',
      march: 'مارس',
      april: 'أبريل',
      may: 'مايو',
      june: 'يونيو',
      july: 'يوليو',
      august: 'أغسطس',
      september: 'سبتمبر',
      october: 'أكتوبر',
      november: 'نوفمبر',
      december: 'ديسمبر',
    },
  },

  file: {
    dragAndDrop: 'اسحب الملفات وأفلتها هنا',
    dropFiles: 'أفلت الملفات هنا',
    clickToSelect: 'أو انقر لتحديد الملفات',
    maxSize: 'الحد الأقصى لحجم الملف',
    allowedTypes: 'أنواع الملفات المسموح بها',
    remove: 'حذف',
    upload: 'رفع',
    uploading: 'جار الرفع...',
    uploadSuccess: 'تم الرفع بنجاح',
    uploadError: 'فشل الرفع',
  },

  errors: {
    unexpected: 'حدث خطأ غير متوقع',
    tryAgain: 'يرجى المحاولة مرة أخرى',
    retry: 'إعادة المحاولة',
    errorDetails: 'تفاصيل الخطأ',
    notFound: 'الصفحة غير موجودة',
    unauthorized: 'غير مصرح',
    forbidden: 'محظور',
    serverError: 'خطأ في الخادم',
    networkError: 'خطأ في الاتصال بالشبكة',
  },

  dialogs: {
    confirmDelete: 'تأكيد الحذف',
    confirmDeleteMessage: 'هل أنت متأكد من حذف هذا العنصر؟ لا يمكن التراجع عن هذا الإجراء.',
    confirmAction: 'تأكيد الإجراء',
    areYouSure: 'هل أنت متأكد؟',
  },
} as const;

// Type helper for translations
export type TranslationKey = keyof typeof translations;
export type CommonKey = keyof typeof translations.common;
export type TableKey = keyof typeof translations.table;
export type ValidationKey = keyof typeof translations.validation;
export type DateKey = keyof typeof translations.date;
export type FileKey = keyof typeof translations.file;
export type ErrorKey = keyof typeof translations.errors;
export type DialogKey = keyof typeof translations.dialogs;

// Helper function to get translation
export function t(
  category: TranslationKey,
  key: string,
  params?: Record<string, string | number>,
): string {
  let text = (translations[category] as Record<string, unknown>)[key] as string;

  if (params) {
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(`{${param}}`, String(value));
    });
  }

  return text || key;
}
