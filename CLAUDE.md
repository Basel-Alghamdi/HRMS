CLAUDE.md - HRIS Design System & Brand Guidelines

This file provides AI assistants with complete design system specifications for the HRIS platform.
The HRIS must maintain visual consistency with Hailaman ATS (our recruitment system).


🎯 Project Context
This is an HRIS (Human Resource Information System) that will integrate with Hailaman ATS.
Both systems must share the same visual identity for seamless user experience.

Primary Language: Arabic (RTL layout)
Secondary Language: English (to be added later)
Design Philosophy: Modern SaaS, Clean, Professional, Minimal


🎨 Color System
Primary Colors (Hailaman Green)
css--primary: #22C55E;           /* Main brand color - buttons, highlights, active states */
--primary-dark: #16A34A;      /* Hover states, emphasis */
--primary-light: #4ADE80;     /* Light accents */
--primary-lighter: #86EFAC;   /* Subtle highlights */
--primary-bg: #ECFDF5;        /* Background tint */
--primary-bg-soft: #D1FAE5;   /* Soft background */
--primary-bg-muted: #A7F3D0;  /* Muted mint background */
Neutral Colors (Gray Palette)
css/* Text Colors */
--gray-900: #0F172A;          /* Primary text, headings */
--gray-800: #1E293B;          /* Secondary headings */
--gray-700: #334155;          /* Body text */
--gray-600: #475569;          /* Secondary text */
--gray-500: #64748B;          /* Muted text, icons */
--gray-400: #94A3B8;          /* Disabled text, placeholders */

/* Borders & Dividers */
--gray-300: #CBD5E1;          /* Borders */
--gray-200: #E2E8F0;          /* Light borders, dividers */
--gray-100: #F1F5F9;          /* Subtle backgrounds */

/* Surfaces */
--gray-50: #F8FAFC;           /* Page background, sidebar */
--white: #FFFFFF;             /* Card backgrounds */
Semantic Colors
css/* Status Colors */
--error: #EF4444;             /* Errors, destructive actions, absent */
--error-light: #FEE2E2;       /* Error background */

--warning: #F59E0B;           /* Warnings, pending, late */
--warning-light: #FEF3C7;     /* Warning background */

--success: #22C55E;           /* Success, approved, present (same as primary) */
--success-light: #DCFCE7;     /* Success background */

--info: #0EA5E9;              /* Information, links */
--info-light: #E0F2FE;        /* Info background */
HRIS-Specific Status Colors
css/* Attendance Status */
--status-present: #22C55E;    /* Present - Green */
--status-absent: #EF4444;     /* Absent - Red */
--status-late: #F59E0B;       /* Late - Yellow/Amber */
--status-leave: #0EA5E9;      /* On Leave - Blue */
--status-holiday: #8B5CF6;    /* Holiday - Purple */

/* Leave Request Status */
--leave-pending: #F59E0B;     /* Pending approval */
--leave-approved: #22C55E;    /* Approved */
--leave-rejected: #EF4444;    /* Rejected */
--leave-cancelled: #64748B;   /* Cancelled */

/* Payroll Status */
--payroll-draft: #64748B;     /* Draft */
--payroll-processing: #0EA5E9;/* Processing */
--payroll-pending: #F59E0B;   /* Pending Approval */
--payroll-approved: #22C55E;  /* Approved */
--payroll-paid: #16A34A;      /* Paid */

/* Employee Status */
--employee-active: #22C55E;   /* Active */
--employee-inactive: #64748B; /* Inactive */
--employee-onleave: #0EA5E9;  /* On Leave */
--employee-terminated: #EF4444;/* Terminated */

📐 Spacing System
Use Tailwind's default spacing scale (based on 4px):
css--space-1: 4px;    /* 0.25rem */
--space-2: 8px;    /* 0.5rem */
--space-3: 12px;   /* 0.75rem */
--space-4: 16px;   /* 1rem */
--space-5: 20px;   /* 1.25rem */
--space-6: 24px;   /* 1.5rem */
--space-8: 32px;   /* 2rem */
--space-10: 40px;  /* 2.5rem */
--space-12: 48px;  /* 3rem */
--space-16: 64px;  /* 4rem */

🔲 Border Radius
css--radius-sm: 6px;             /* Small elements, badges */
--radius-DEFAULT: 8px;        /* Buttons, inputs, small cards */
--radius-md: 12px;            /* Cards, containers */
--radius-lg: 16px;            /* Modals, large cards */
--radius-xl: 24px;            /* Special containers */
--radius-full: 9999px;        /* Pills, avatars */
Usage Guidelines:

Buttons: 8px
Inputs: 8px
Cards: 12px
Modals/Dialogs: 16px
Avatars: Full (circular)
Badges/Tags: 6px or full (pill)


🌫 Shadows
css--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-DEFAULT: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
Usage Guidelines:

Cards at rest: shadow-sm
Cards on hover: shadow-md
Dropdowns/Popovers: shadow-md
Modals: shadow-lg or shadow-xl
Sidebar: shadow-sm (if floating)


✏️ Typography
Font Families
css/* English Text */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;

/* Arabic Text */
--font-arabic: 'Cairo', 'Noto Sans Arabic', 'Inter', sans-serif;
Font Sizes
css--text-xs: 12px;      /* 0.75rem - Captions, badges */
--text-sm: 14px;      /* 0.875rem - Secondary text, labels */
--text-base: 16px;    /* 1rem - Body text */
--text-lg: 18px;      /* 1.125rem - Card titles */
--text-xl: 20px;      /* 1.25rem - Section titles */
--text-2xl: 24px;     /* 1.5rem - Page titles */
--text-3xl: 30px;     /* 1.875rem - Large headings */
--text-4xl: 36px;     /* 2.25rem - Hero headings */
Font Weights
css--font-normal: 400;   /* Body text */
--font-medium: 500;   /* Emphasized text, buttons */
--font-semibold: 600; /* Titles, headings */
--font-bold: 700;     /* Strong emphasis */
Line Heights
css--leading-tight: 1.25;    /* Headings */
--leading-snug: 1.375;    /* Subheadings */
--leading-normal: 1.5;    /* Body text */
--leading-relaxed: 1.625; /* Long-form content */
Typography Scale (Quick Reference)
ElementSizeWeightColorPage Title24px (2xl)600gray-900Section Title20px (xl)600gray-900Card Title18px (lg)600gray-800Body Text14-16px400gray-700Secondary Text14px (sm)400gray-500Caption/Label12px (xs)500gray-500Button Text14px (sm)500varies

🧩 Component Specifications
Buttons
css/* Primary Button */
.btn-primary {
  background: #22C55E;
  color: white;
  border-radius: 8px;
  padding: 8px 16px;       /* py-2 px-4 */
  font-weight: 500;
  font-size: 14px;
  transition: background 150ms;
}
.btn-primary:hover {
  background: #16A34A;
}

/* Secondary/Outline Button */
.btn-secondary {
  background: white;
  color: #334155;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 14px;
}
.btn-secondary:hover {
  background: #F8FAFC;
  border-color: #CBD5E1;
}

/* Ghost Button */
.btn-ghost {
  background: transparent;
  color: #475569;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 500;
}
.btn-ghost:hover {
  background: #F1F5F9;
}

/* Destructive Button */
.btn-destructive {
  background: #EF4444;
  color: white;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 500;
}
.btn-destructive:hover {
  background: #DC2626;
}
Button Sizes:

Small: py-1.5 px-3 text-xs (height ~32px)
Medium: py-2 px-4 text-sm (height ~40px) - Default
Large: py-2.5 px-5 text-base (height ~44px)

Inputs
css.input {
  width: 100%;
  padding: 8px 12px;       /* py-2 px-3 */
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 14px;
  color: #0F172A;
  background: white;
  transition: border-color 150ms, box-shadow 150ms;
}
.input::placeholder {
  color: #94A3B8;
}
.input:focus {
  outline: none;
  border-color: #22C55E;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}
.input:disabled {
  background: #F8FAFC;
  color: #94A3B8;
  cursor: not-allowed;
}
.input.error {
  border-color: #EF4444;
}
.input.error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
Cards
css.card {
  background: white;
  border-radius: 12px;
  border: 1px solid #E2E8F0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
.card-header {
  padding: 16px 20px;
  border-bottom: 1px solid #E2E8F0;
}
.card-body {
  padding: 20px;
}
.card-footer {
  padding: 16px 20px;
  border-top: 1px solid #E2E8F0;
  background: #F8FAFC;
  border-radius: 0 0 12px 12px;
}
Badges
css/* Base Badge */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}

/* Badge Variants */
.badge-default { background: #F1F5F9; color: #475569; }
.badge-primary { background: #DCFCE7; color: #16A34A; }
.badge-success { background: #DCFCE7; color: #16A34A; }
.badge-warning { background: #FEF3C7; color: #D97706; }
.badge-error   { background: #FEE2E2; color: #DC2626; }
.badge-info    { background: #E0F2FE; color: #0284C7; }
Tables
css.table {
  width: 100%;
  border-collapse: collapse;
}
.table th {
  text-align: right;        /* RTL */
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 500;
  color: #64748B;
  background: #F8FAFC;
  border-bottom: 1px solid #E2E8F0;
}
.table td {
  padding: 16px;
  font-size: 14px;
  color: #334155;
  border-bottom: 1px solid #E2E8F0;
}
.table tr:hover td {
  background: #F8FAFC;
}
Sidebar
css.sidebar {
  width: 280px;             /* Expanded */
  /* width: 80px; */        /* Collapsed */
  background: #F8FAFC;
  border-left: 1px solid #E2E8F0;  /* RTL: border on left */
  height: 100vh;
  position: fixed;
  right: 0;                 /* RTL: sidebar on right */
}
.sidebar-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  color: #64748B;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  margin: 2px 8px;
  transition: all 150ms;
}
.sidebar-item:hover {
  background: #F1F5F9;
  color: #334155;
}
.sidebar-item.active {
  background: #ECFDF5;
  color: #22C55E;
}
.sidebar-item.active .icon {
  color: #22C55E;
}
Modals/Dialogs
css.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}
.modal {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  max-width: 500px;         /* Varies by size: sm=400, md=500, lg=600, xl=800 */
  width: 90%;
}
.modal-header {
  padding: 20px 24px;
  border-bottom: 1px solid #E2E8F0;
}
.modal-body {
  padding: 24px;
}
.modal-footer {
  padding: 16px 24px;
  border-top: 1px solid #E2E8F0;
  display: flex;
  justify-content: flex-start; /* RTL */
  gap: 12px;
}
Tabs
css.tabs {
  display: flex;
  gap: 8px;
  border-bottom: 1px solid #E2E8F0;
}
.tab {
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #64748B;
  border-bottom: 2px solid transparent;
  transition: all 150ms;
}
.tab:hover {
  color: #334155;
}
.tab.active {
  color: #22C55E;
  border-bottom-color: #22C55E;
}

📱 Responsive Breakpoints
css--screen-sm: 640px;   /* Small devices */
--screen-md: 768px;   /* Tablets */
--screen-lg: 1024px;  /* Small laptops */
--screen-xl: 1280px;  /* Desktops */
--screen-2xl: 1536px; /* Large screens */
Layout Patterns:

Mobile: Single column, full-width cards
Tablet: 2-column grids where applicable
Desktop: Sidebar + main content (sidebar 280px)
Large: Max content width 1400px, centered


🔄 RTL (Right-to-Left) Guidelines
Critical RTL Considerations:

Layout Direction

Set dir="rtl" on <html> or root container
Sidebar appears on right side
Text aligns to right by default


Tailwind Logical Properties (Use these instead of left/right)

   ps-* → padding-inline-start (replaces pl-*)
   pe-* → padding-inline-end (replaces pr-*)
   ms-* → margin-inline-start (replaces ml-*)
   me-* → margin-inline-end (replaces mr-*)
   start-* → inset-inline-start (replaces left-*)
   end-* → inset-inline-end (replaces right-*)

Icons & Arrows

Flip directional icons (arrows, chevrons)
Back arrow points right (→) in RTL
Forward arrow points left (←) in RTL


Numbers & Dates

Keep numbers in LTR direction
Phone numbers: LTR
Dates can be Arabic or Western numerals


Mixed Content

Use isolate for LTR content within RTL
Email addresses: Keep LTR
URLs: Keep LTR




📋 Tailwind Config
javascript// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22C55E',
          dark: '#16A34A',
          light: '#4ADE80',
          lighter: '#86EFAC',
          bg: '#ECFDF5',
          'bg-soft': '#D1FAE5',
          'bg-muted': '#A7F3D0',
        },
        gray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#FEE2E2',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
        },
        success: {
          DEFAULT: '#22C55E',
          light: '#DCFCE7',
        },
        info: {
          DEFAULT: '#0EA5E9',
          light: '#E0F2FE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'Noto Sans Arabic', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.04)',
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-rtl'),
  ],
}

🇸🇦 Arabic UI Text Reference
Common Labels
javascriptconst ar = {
  // Navigation
  nav: {
    dashboard: 'الرئيسية',
    employees: 'الموظفين',
    attendance: 'الحضور والانصراف',
    leave: 'الإجازات',
    payroll: 'الرواتب',
    reports: 'التقارير',
    settings: 'الإعدادات',
    profile: 'الملف الشخصي',
    team: 'فريق العمل',
  },

  // Actions
  actions: {
    save: 'حفظ',
    cancel: 'إلغاء',
    delete: 'حذف',
    edit: 'تعديل',
    add: 'إضافة',
    search: 'بحث',
    filter: 'تصفية',
    export: 'تصدير',
    import: 'استيراد',
    submit: 'إرسال',
    confirm: 'تأكيد',
    close: 'إغلاق',
    back: 'رجوع',
    next: 'التالي',
    previous: 'السابق',
    approve: 'موافقة',
    reject: 'رفض',
    view: 'عرض',
    download: 'تحميل',
  },

  // Status
  status: {
    active: 'نشط',
    inactive: 'غير نشط',
    pending: 'قيد الانتظار',
    approved: 'موافق عليه',
    rejected: 'مرفوض',
    cancelled: 'ملغي',
    present: 'حاضر',
    absent: 'غائب',
    late: 'متأخر',
    onLeave: 'في إجازة',
    draft: 'مسودة',
    processing: 'قيد المعالجة',
    paid: 'مدفوع',
  },

  // Employee Fields
  employee: {
    name: 'الاسم',
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    email: 'البريد الإلكتروني',
    phone: 'رقم الجوال',
    nationalId: 'رقم الهوية',
    department: 'القسم',
    position: 'المسمى الوظيفي',
    manager: 'المدير المباشر',
    hireDate: 'تاريخ التعيين',
    employeeNumber: 'الرقم الوظيفي',
    status: 'الحالة',
  },

  // Attendance
  attendance: {
    checkIn: 'تسجيل الحضور',
    checkOut: 'تسجيل الانصراف',
    workingHours: 'ساعات العمل',
    overtime: 'العمل الإضافي',
    date: 'التاريخ',
    time: 'الوقت',
  },

  // Leave
  leave: {
    annual: 'إجازة سنوية',
    sick: 'إجازة مرضية',
    unpaid: 'إجازة بدون راتب',
    emergency: 'إجازة طارئة',
    balance: 'الرصيد',
    request: 'طلب إجازة',
    startDate: 'من تاريخ',
    endDate: 'إلى تاريخ',
    days: 'عدد الأيام',
    reason: 'السبب',
  },

  // Payroll
  payroll: {
    basicSalary: 'الراتب الأساسي',
    housingAllowance: 'بدل السكن',
    transportAllowance: 'بدل المواصلات',
    otherAllowances: 'بدلات أخرى',
    deductions: 'الاستقطاعات',
    netSalary: 'صافي الراتب',
    gosi: 'التأمينات الاجتماعية',
    payslip: 'كشف الراتب',
  },

  // Common
  common: {
    loading: 'جاري التحميل...',
    noData: 'لا توجد بيانات',
    required: 'مطلوب',
    optional: 'اختياري',
    all: 'الكل',
    total: 'الإجمالي',
    currency: 'ر.س', // Saudi Riyal
  },

  // Messages
  messages: {
    saveSuccess: 'تم الحفظ بنجاح',
    deleteSuccess: 'تم الحذف بنجاح',
    error: 'حدث خطأ',
    confirmDelete: 'هل أنت متأكد من الحذف؟',
    unsavedChanges: 'لديك تغييرات غير محفوظة',
  },
}

✅ Implementation Checklist
When building components, ensure:

 Uses Hailaman color palette (primary green #22C55E)
 Follows border radius guidelines (8px buttons, 12px cards)
 Uses correct shadows (subtle, modern)
 Typography matches specs (Inter/Cairo, correct sizes)
 RTL layout is properly implemented
 Arabic labels are used
 Responsive breakpoints are handled
 Focus states use green ring
 Hover states are smooth (150ms transition)
 Accessibility: proper contrast, focus indicators


🔗 Related Files

tailwind.config.js - Tailwind configuration
packages/ui/ - Shared UI components
apps/*/src/styles/globals.css - Global styles
apps/*/src/messages/ar.json - Arabic translations



Note to AI: Always reference this file when generating UI code.
Maintain consistency with Hailaman's visual identity across all HRIS components.

graph TB
    subgraph "Frontend Layer"
        WEB[Web App - Next.js 15<br/>TypeScript + React 19<br/>Tailwind CSS + shadcn/ui]
        MOBILE[Mobile App - React Native<br/>TypeScript + Expo]
        ADMIN[Admin Dashboard<br/>Next.js + shadcn/ui]
    end

    subgraph "API Gateway Layer"
        GATEWAY[API Gateway - Next.js API Routes<br/>+ tRPC for type-safety<br/>Rate Limiting + Auth Middleware]
    end

    subgraph "Backend Services - NestJS Microservices"
        AUTH[Auth Service<br/>JWT + Refresh Tokens<br/>SSO Integration]
        EMPLOYEE[Employee Service<br/>Profile Management<br/>Documents]
        PAYROLL[Payroll Service<br/>Salary Calculation<br/>Tax Management]
        ATTENDANCE[Attendance Service<br/>Check-in/out<br/>Leave Management]
        PERFORMANCE[Performance Service<br/>Reviews + Goals<br/>360 Feedback]
        RECRUITMENT[Recruitment Service<br/>ATS Integration<br/>Hailaman.ai Sync]
        BENEFITS[Benefits Service<br/>Insurance + Perks<br/>Enrollment]
        TRAINING[Training & Development<br/>Courses + Certifications<br/>Career Path]
        REPORTS[Analytics & Reports<br/>BI Dashboard<br/>Custom Reports]
    end

    subgraph "Data Layer"
        POSTGRES[(PostgreSQL 16<br/>Primary Database<br/>TimescaleDB for time-series)]
        REDIS[(Redis Stack<br/>Caching + Sessions<br/>Real-time data)]
        S3[Object Storage<br/>AWS S3 / MinIO<br/>Documents + Files]
        SEARCH[Elasticsearch<br/>Full-text Search<br/>Employee Directory]
    end

    subgraph "Message Queue & Events"
        QUEUE[BullMQ + Redis<br/>Job Processing<br/>Async Tasks]
        EVENTS[Event Bus - NATS<br/>Pub/Sub Pattern<br/>Service Communication]
    end

    subgraph "External Integrations"
        ATS[Hailaman.ai ATS<br/>REST API Integration]
        EMAIL[Email Service<br/>SendGrid / Resend]
        SMS[SMS/WhatsApp<br/>Twilio]
        CALENDAR[Calendar Sync<br/>Google / Outlook]
        PAYMENT[Payment Gateway<br/>Stripe / PayPal]
        GOV[Government APIs<br/>GOSI + Tax Authority]
    end

    subgraph "DevOps & Infrastructure"
        DOCKER[Docker Containers<br/>Service Isolation]
        K8S[Kubernetes<br/>Orchestration<br/>Auto-scaling]
        CI[GitHub Actions<br/>CI/CD Pipeline<br/>Automated Testing]
        MONITOR[Monitoring<br/>Prometheus + Grafana<br/>Sentry for errors]
        LOGS[Logging<br/>ELK Stack<br/>Centralized logs]
    end

    WEB --> GATEWAY
    MOBILE --> GATEWAY
    ADMIN --> GATEWAY

    GATEWAY --> AUTH
    GATEWAY --> EMPLOYEE
    GATEWAY --> PAYROLL
    GATEWAY --> ATTENDANCE
    GATEWAY --> PERFORMANCE
    GATEWAY --> RECRUITMENT
    GATEWAY --> BENEFITS
    GATEWAY --> TRAINING
    GATEWAY --> REPORTS

    AUTH --> POSTGRES
    AUTH --> REDIS
    EMPLOYEE --> POSTGRES
    EMPLOYEE --> S3
    EMPLOYEE --> SEARCH
    PAYROLL --> POSTGRES
    PAYROLL --> QUEUE
    ATTENDANCE --> POSTGRES
    ATTENDANCE --> REDIS
    PERFORMANCE --> POSTGRES
    RECRUITMENT --> POSTGRES
    RECRUITMENT --> ATS
    BENEFITS --> POSTGRES
    TRAINING --> POSTGRES
    TRAINING --> S3
    REPORTS --> POSTGRES
    REPORTS --> REDIS

    AUTH --> EVENTS
    EMPLOYEE --> EVENTS
    PAYROLL --> EVENTS
    ATTENDANCE --> EVENTS
    PERFORMANCE --> EVENTS
    RECRUITMENT --> EVENTS

    PAYROLL --> PAYMENT
    AUTH --> EMAIL
    ATTENDANCE --> SMS
    EMPLOYEE --> CALENDAR
    PAYROLL --> GOV

    QUEUE --> PAYROLL
    QUEUE --> EMAIL
    QUEUE --> REPORTS

    style WEB fill:#3b82f6
    style MOBILE fill:#3b82f6
    style ADMIN fill:#3b82f6
    style GATEWAY fill:#8b5cf6
    style AUTH fill:#10b981
    style EMPLOYEE fill:#10b981
    style PAYROLL fill:#10b981
    style ATTENDANCE fill:#10b981
    style PERFORMANCE fill:#10b981
    style RECRUITMENT fill:#10b981
    style BENEFITS fill:#10b981
    style TRAINING fill:#10b981
    style REPORTS fill:#10b981
    style POSTGRES fill:#f59e0b
    style REDIS fill:#ef4444
    style S3 fill:#f59e0b
    style SEARCH fill:#f59e0b

    # HRIS System - Monorepo Structure & Architecture

## 📦 Monorepo Structure (Turborepo)

```
hris-platform/
├── .github/
│   └── workflows/              # CI/CD workflows
│       ├── main.yml           # Main deployment pipeline
│       ├── pr-checks.yml      # PR validation
│       └── security.yml       # Security scanning
│
├── apps/
│   ├── web/                   # Next.js 15 - Employee Portal
│   │   ├── src/
│   │   │   ├── app/          # App Router (Next.js 15)
│   │   │   ├── components/   # UI components
│   │   │   ├── hooks/        # Custom React hooks
│   │   │   └── lib/          # Utilities & configs
│   │   ├── public/
│   │   ├── next.config.js
│   │   ├── tailwind.config.js
│   │   └── package.json
│   │
│   ├── admin/                 # Next.js 15 - Admin Dashboard
│   │   ├── src/
│   │   │   ├── app/
│   │   │   ├── components/
│   │   │   └── lib/
│   │   └── package.json
│   │
│   ├── mobile/                # React Native - Mobile App
│   │   ├── src/
│   │   │   ├── screens/
│   │   │   ├── components/
│   │   │   ├── navigation/
│   │   │   └── services/
│   │   └── package.json
│   │
│   └── docs/                  # VitePress Documentation
│       ├── .vitepress/
│       └── docs/
│
├── services/                   # NestJS Microservices
│   ├── auth-service/
│   │   ├── src/
│   │   │   ├── modules/
│   │   │   │   ├── auth/
│   │   │   │   ├── users/
│   │   │   │   └── sessions/
│   │   │   ├── guards/
│   │   │   ├── strategies/
│   │   │   └── main.ts
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── employee-service/
│   │   ├── src/
│   │   │   ├── modules/
│   │   │   │   ├── profile/
│   │   │   │   ├── documents/
│   │   │   │   ├── contacts/
│   │   │   │   └── hierarchy/
│   │   │   └── main.ts
│   │   └── package.json
│   │
│   ├── payroll-service/
│   │   ├── src/
│   │   │   ├── modules/
│   │   │   │   ├── salary/
│   │   │   │   ├── tax/
│   │   │   │   ├── deductions/
│   │   │   │   └── payments/
│   │   │   ├── jobs/          # BullMQ jobs
│   │   │   └── main.ts
│   │   └── package.json
│   │
│   ├── attendance-service/
│   │   ├── src/
│   │   │   ├── modules/
│   │   │   │   ├── check-in/
│   │   │   │   ├── leave/
│   │   │   │   ├── overtime/
│   │   │   │   └── schedule/
│   │   │   └── main.ts
│   │   └── package.json
│   │
│   ├── performance-service/
│   │   ├── src/
│   │   │   ├── modules/
│   │   │   │   ├── reviews/
│   │   │   │   ├── goals/
│   │   │   │   ├── feedback/
│   │   │   │   └── kpi/
│   │   │   └── main.ts
│   │   └── package.json
│   │
│   ├── recruitment-service/
│   │   ├── src/
│   │   │   ├── modules/
│   │   │   │   ├── jobs/
│   │   │   │   ├── candidates/
│   │   │   │   ├── interviews/
│   │   │   │   └── hailaman-sync/  # ATS integration
│   │   │   └── main.ts
│   │   └── package.json
│   │
│   ├── benefits-service/
│   │   ├── src/
│   │   │   ├── modules/
│   │   │   │   ├── insurance/
│   │   │   │   ├── perks/
│   │   │   │   └── enrollment/
│   │   │   └── main.ts
│   │   └── package.json
│   │
│   ├── training-service/
│   │   ├── src/
│   │   │   ├── modules/
│   │   │   │   ├── courses/
│   │   │   │   ├── certifications/
│   │   │   │   └── career-path/
│   │   │   └── main.ts
│   │   └── package.json
│   │
│   └── analytics-service/
│       ├── src/
│       │   ├── modules/
│       │   │   ├── reports/
│       │   │   ├── dashboards/
│       │   │   └── bi/
│       │   └── main.ts
│       └── package.json
│
├── packages/                   # Shared Libraries
│   ├── ui/                    # Shared UI Components
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Button/
│   │   │   │   ├── Input/
│   │   │   │   ├── Table/
│   │   │   │   └── ...
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   ├── database/              # Database Schema & ORM
│   │   ├── src/
│   │   │   ├── entities/      # TypeORM entities
│   │   │   ├── migrations/
│   │   │   ├── seeds/
│   │   │   └── data-source.ts
│   │   └── package.json
│   │
│   ├── types/                 # Shared TypeScript Types
│   │   ├── src/
│   │   │   ├── employee.ts
│   │   │   ├── payroll.ts
│   │   │   ├── attendance.ts
│   │   │   └── ...
│   │   └── package.json
│   │
│   ├── utils/                 # Shared Utilities
│   │   ├── src/
│   │   │   ├── date.ts
│   │   │   ├── validation.ts
│   │   │   ├── formatters.ts
│   │   │   └── ...
│   │   └── package.json
│   │
│   ├── config/                # Shared Configuration
│   │   ├── src/
│   │   │   ├── constants.ts
│   │   │   ├── env.ts
│   │   │   └── features.ts
│   │   └── package.json
│   │
│   └── trpc/                  # tRPC Router & Procedures
│       ├── src/
│       │   ├── routers/
│       │   ├── procedures/
│       │   └── index.ts
│       └── package.json
│
├── infrastructure/             # Infrastructure as Code
│   ├── docker/
│   │   ├── docker-compose.yml
│   │   ├── docker-compose.dev.yml
│   │   └── docker-compose.prod.yml
│   │
│   ├── kubernetes/
│   │   ├── deployments/
│   │   ├── services/
│   │   ├── ingress/
│   │   └── configmaps/
│   │
│   └── terraform/
│       ├── modules/
│       └── environments/
│
├── scripts/                    # Build & Deployment Scripts
│   ├── setup.sh
│   ├── dev.sh
│   ├── build.sh
│   └── migrate.sh
│
├── .env.example
├── .gitignore
├── turbo.json                 # Turborepo config
├── package.json               # Root package.json
├── pnpm-workspace.yaml        # PNPM workspaces
└── README.md
```

## 🛠️ Tech Stack Details

### Frontend Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.3+
- **Styling**: Tailwind CSS 3.4+
- **UI Components**: shadcn/ui (Radix UI primitives)
- **State Management**: Zustand + React Query (TanStack Query)
- **Forms**: React Hook Form + Zod validation
- **Tables**: TanStack Table
- **Charts**: Recharts / Apache ECharts
- **Date Handling**: date-fns
- **Icons**: Lucide React

### Backend Stack
- **Framework**: NestJS 10+ (Node.js runtime)
- **Language**: TypeScript 5.3+
- **API Protocol**: REST + tRPC (for type-safe frontend-backend communication)
- **ORM**: TypeORM 0.3+
- **Validation**: class-validator + class-transformer
- **Documentation**: Swagger/OpenAPI 3.0
- **Testing**: Jest + Supertest

### Database Stack
- **Primary DB**: PostgreSQL 16
  - Extensions: TimescaleDB (time-series data)
  - Full-text search capabilities
  - Row-level security (RLS)
- **Caching**: Redis Stack 7+
  - Session storage
  - Cache layer
  - Real-time data
  - BullMQ job queues
- **Search Engine**: Elasticsearch 8+
  - Employee directory search
  - Document search
  - Analytics aggregations
- **Object Storage**: 
  - AWS S3 / MinIO
  - For documents, photos, files

### Message Queue & Events
- **Job Queue**: BullMQ (Redis-based)
  - Salary calculations
  - Report generation
  - Email sending
  - Data sync with Hailaman.ai
- **Event Bus**: NATS.io
  - Inter-service communication
  - Pub/Sub pattern
  - Event sourcing

### DevOps & Infrastructure
- **Containerization**: Docker + Docker Compose
- **Orchestration**: Kubernetes (K8s)
  - Horizontal Pod Autoscaler (HPA)
  - Ingress Controller (NGINX)
- **CI/CD**: GitHub Actions
  - Automated testing
  - Build optimization with Turborepo
  - Deployment to K8s
- **Monitoring**:
  - Prometheus + Grafana (metrics)
  - Sentry (error tracking)
  - ELK Stack (logging)
- **IaC**: Terraform
  - Cloud infrastructure provisioning
  - Multi-environment management

### Monorepo Tools
- **Build System**: Turborepo
  - Intelligent caching
  - Parallel execution
  - Remote caching support
- **Package Manager**: PNPM
  - Efficient disk usage
  - Fast installs
  - Workspace support
- **Code Quality**:
  - ESLint + Prettier
  - Husky (Git hooks)
  - Commitlint (conventional commits)
  - TypeScript strict mode

## 🔌 Key Integrations

### 1. Hailaman.ai ATS Integration
```typescript
// Real-time candidate sync
// Job posting sync
// Interview scheduling
// Offer management
```

### 2. Payment Gateways
- Stripe/PayPal for payroll
- Local payment methods (Mada, STC Pay)

### 3. Government APIs (Saudi Arabia)
- GOSI (General Organization for Social Insurance)
- ZATCA (Saudi Tax Authority)
- Ministry of Labor

### 4. Communication
- Email: SendGrid / Resend
- SMS/WhatsApp: Twilio
- Push Notifications: Firebase Cloud Messaging

### 5. Calendar Integration
- Google Calendar
- Microsoft Outlook
- Calendar invites for interviews, meetings

## 🔐 Security Features

1. **Authentication & Authorization**
   - JWT tokens (access + refresh)
   - SSO support (OAuth 2.0, SAML)
   - Multi-factor authentication (MFA)
   - Role-based access control (RBAC)

2. **Data Security**
   - Encryption at rest (database level)
   - Encryption in transit (TLS/SSL)
   - Field-level encryption for sensitive data
   - Data masking for PII

3. **Compliance**
   - GDPR compliance
   - Saudi Arabia data residency
   - Audit logs for all operations
   - Data retention policies

## 📊 Scalability Considerations

1. **Horizontal Scaling**
   - Stateless services
   - Load balancing (K8s Ingress)
   - Database connection pooling

2. **Caching Strategy**
   - Multi-level caching
   - Redis for hot data
   - CDN for static assets

3. **Database Optimization**
   - Read replicas for reporting
   - Partitioning for large tables
   - Indexed queries
   - Materialized views

4. **Performance**
   - API response time < 200ms (p95)
   - Page load time < 2s
   - 99.9% uptime SLA

## 🧪 Testing Strategy

1. **Unit Tests**: 80%+ coverage
2. **Integration Tests**: Critical paths
3. **E2E Tests**: Playwright
4. **Load Testing**: k6 / Artillery
5. **Security Testing**: OWASP ZAP

## 🚀 Deployment Strategy

1. **Environments**
   - Development (dev)
   - Staging (staging)
   - Production (prod)

2. **Deployment Process**
   - GitOps workflow
   - Blue-green deployment
   - Automatic rollback on failure
   - Canary releases for major updates

3. **Feature Flags**
   - LaunchDarkly / Unleash
   - Gradual rollout
   - A/B testing

## 📈 Monitoring & Observability

1. **Metrics**
   - Application metrics (Prometheus)
   - Business metrics (custom dashboards)
   - Infrastructure metrics (Node Exporter)

2. **Logging**
   - Structured logging (JSON)
   - Centralized logs (ELK Stack)
   - Log retention: 90 days

3. **Tracing**
   - Distributed tracing (OpenTelemetry)
   - Request correlation IDs
   - Performance profiling

4. **Alerts**
   - PagerDuty / Opsgenie
   - On-call rotation
   - Incident management

## 💾 Data Models (Core Entities)

### Employee
```typescript
- id, employeeNumber, nationalId
- personalInfo (name, dob, gender, nationality)
- contactInfo (email, phone, address)
- employmentInfo (jobTitle, department, manager)
- salaryInfo (basic, allowances, deductions)
- documents (contracts, certificates, IDs)
```

### Payroll
```typescript
- id, employeeId, period, status
- earnings (basic, overtime, bonuses)
- deductions (tax, insurance, loans)
- netSalary, paymentDate, paymentMethod
```

### Attendance
```typescript
- id, employeeId, date, type
- checkIn, checkOut, duration
- overtime, late, absent
- approvalStatus, approvedBy
```

### Performance Review
```typescript
- id, employeeId, reviewerId, period
- goals, achievements, rating
- feedback, improvementAreas
- status, completedAt
```

## 🎯 Development Workflow

1. **Branch Strategy**
   - main (production)
   - develop (integration)
   - feature/* (new features)
   - bugfix/* (bug fixes)
   - hotfix/* (critical fixes)

2. **Code Review**
   - Required before merge
   - At least 2 approvals
   - Automated checks must pass

3. **Release Process**
   - Semantic versioning (semver)
   - Automated changelog
   - Release notes

## 🌐 Internationalization (i18n)

- Support for Arabic (RTL) and English
- next-intl for Next.js
- i18next for backend
- Date/time localization
- Currency formatting (SAR)

## 📱 Mobile Strategy

- React Native (cross-platform)
- Core features:
  - Employee self-service
  - Attendance check-in/out
  - Leave requests
  - Payslip viewing
  - Notifications
- Offline-first architecture
- Biometric authentication

## 🔄 Migration Strategy

1. **From Existing Systems**
   - Data extraction tools
   - Data transformation pipeline
   - Validation and cleansing
   - Incremental migration

2. **Hailaman.ai Integration**
   - Initial data sync
   - Real-time updates
   - Conflict resolution
   - Fallback mechanisms

# HRIS Implementation Guide - Getting Started

## 🚀 Quick Start

### Prerequisites
```bash
# Required software
- Node.js 20.x LTS
- PNPM 9.x
- Docker Desktop
- PostgreSQL 16 (via Docker)
- Redis 7+ (via Docker)
- Git
```

### Initial Setup

#### 1. Clone and Install
```bash
# Clone repository
git clone https://github.com/your-org/hris-platform.git
cd hris-platform

# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env
# Edit .env with your configuration
```

#### 2. Start Infrastructure (Docker)
```bash
# Start PostgreSQL, Redis, and other services
docker-compose up -d

# Check services are running
docker-compose ps
```

#### 3. Database Setup
```bash
# Run migrations
pnpm db:migrate

# Seed initial data (optional)
pnpm db:seed
```

#### 4. Start Development Servers
```bash
# Start all services in development mode
pnpm dev

# Or start specific services
pnpm dev --filter=web           # Frontend only
pnpm dev --filter=auth-service  # Auth service only
```

## 📁 Project Structure Explained

### Apps Directory
- **web/**: Main employee-facing application (Next.js)
- **admin/**: HR admin dashboard (Next.js)
- **mobile/**: Mobile app (React Native)

### Services Directory
Each service is a NestJS microservice:
- **auth-service/**: Authentication & user management
- **employee-service/**: Employee data & profiles
- **payroll-service/**: Salary, tax, payments
- **attendance-service/**: Check-in/out, leaves
- **performance-service/**: Reviews, goals, feedback
- **recruitment-service/**: ATS integration
- **benefits-service/**: Insurance, perks
- **training-service/**: Courses, certifications
- **analytics-service/**: Reports, BI

### Packages Directory
Shared libraries used across apps and services:
- **ui/**: Reusable React components
- **database/**: TypeORM entities and migrations
- **types/**: TypeScript type definitions
- **utils/**: Helper functions
- **config/**: Shared configuration
- **trpc/**: tRPC routers for type-safe APIs

## 🏗️ Development Workflow

### Creating a New Feature

#### 1. Create Feature Branch
```bash
git checkout -b feature/employee-onboarding
```

#### 2. Generate Service Scaffold (if needed)
```bash
# Using NestJS CLI within service
cd services/employee-service
pnpm nest generate module onboarding
pnpm nest generate service onboarding
pnpm nest generate controller onboarding
```

#### 3. Create Database Entity
```typescript
// packages/database/src/entities/onboarding.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('onboarding')
export class Onboarding {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  employeeId: string;

  @Column()
  status: string;

  @Column({ type: 'jsonb' })
  checklist: OnboardingChecklist;
}
```

#### 4. Create Migration
```bash
cd packages/database
pnpm migration:generate src/migrations/AddOnboardingTable
pnpm migration:run
```

#### 5. Implement Service Logic
```typescript
// services/employee-service/src/modules/onboarding/onboarding.service.ts
@Injectable()
export class OnboardingService {
  constructor(
    @InjectRepository(Onboarding)
    private onboardingRepo: Repository<Onboarding>,
  ) {}

  async create(employeeId: string) {
    const onboarding = this.onboardingRepo.create({
      employeeId,
      status: 'pending',
      checklist: this.getDefaultChecklist(),
    });
    return this.onboardingRepo.save(onboarding);
  }
}
```

#### 6. Create API Endpoint
```typescript
// services/employee-service/src/modules/onboarding/onboarding.controller.ts
@Controller('onboarding')
export class OnboardingController {
  constructor(private onboardingService: OnboardingService) {}

  @Post()
  create(@Body() createDto: CreateOnboardingDto) {
    return this.onboardingService.create(createDto.employeeId);
  }
}
```

#### 7. Add Frontend UI
```typescript
// apps/web/src/app/onboarding/page.tsx
'use client';

import { Button } from '@hris/ui';

export default function OnboardingPage() {
  const handleStart = async () => {
    await fetch('/api/onboarding', {
      method: 'POST',
      body: JSON.stringify({ employeeId: '123' })
    });
  };

  return (
    <div>
      <h1>Employee Onboarding</h1>
      <Button onClick={handleStart}>Start Onboarding</Button>
    </div>
  );
}
```

#### 8. Write Tests
```typescript
// services/employee-service/src/modules/onboarding/onboarding.service.spec.ts
describe('OnboardingService', () => {
  it('should create onboarding record', async () => {
    const result = await service.create('employee-123');
    expect(result.status).toBe('pending');
  });
});
```

#### 9. Run Tests & Build
```bash
# Run tests
pnpm test

# Build all packages
pnpm build

# Or build specific package
pnpm build --filter=employee-service
```

#### 10. Commit & Push
```bash
git add .
git commit -m "feat(employee): add onboarding module"
git push origin feature/employee-onboarding
```

## 🧪 Testing Guide

### Unit Tests
```bash
# Run all unit tests
pnpm test

# Run with coverage
pnpm test:cov

# Watch mode
pnpm test:watch

# Test specific package
pnpm test --filter=employee-service
```

### Integration Tests
```bash
# Run integration tests
pnpm test:e2e

# Test specific service
pnpm test:e2e --filter=payroll-service
```

### End-to-End Tests
```bash
# Run E2E tests with Playwright
cd apps/web
pnpm test:e2e

# Run in UI mode
pnpm test:e2e:ui
```

## 🔨 Build & Deployment

### Local Build
```bash
# Build all packages
pnpm build

# Build for production
pnpm build --filter=!*-service

# Build specific service
pnpm build --filter=auth-service
```

### Docker Build
```bash
# Build Docker images for all services
docker-compose build

# Build specific service
docker-compose build auth-service

# Run production stack
docker-compose -f docker-compose.prod.yml up -d
```

### Deploy to Kubernetes
```bash
# Apply all manifests
kubectl apply -f infrastructure/kubernetes/

# Deploy specific service
kubectl apply -f infrastructure/kubernetes/deployments/auth-service.yaml

# Check deployment status
kubectl get pods
kubectl get services
```

## 🐛 Debugging

### Backend Services
```bash
# Run service in debug mode
cd services/auth-service
pnpm start:debug

# Attach debugger on port 9229
# In VS Code: F5 → Attach to Process
```

### Frontend Apps
```bash
# Next.js has built-in debugging
cd apps/web
pnpm dev

# Then in browser DevTools or VS Code
# Set breakpoints and debug
```

### Database Queries
```typescript
// Enable query logging
// In data-source.ts
{
  type: 'postgres',
  logging: ['query', 'error'],
  // ...
}
```

## 📊 Monitoring in Development

### Viewing Logs
```bash
# View all service logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f auth-service

# View last 100 lines
docker-compose logs --tail=100
```

### Database Access
```bash
# Connect to PostgreSQL
docker exec -it postgres psql -U hris_user -d hris_db

# List tables
\dt

# Query data
SELECT * FROM employees LIMIT 10;
```

### Redis Access
```bash
# Connect to Redis
docker exec -it redis redis-cli

# View keys
KEYS *

# Get value
GET employee:123
```

## 🔐 Environment Variables

### Core Variables
```bash
# .env file structure

# Database
DATABASE_URL=postgresql://hris_user:password@localhost:5432/hris_db
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=hris_user
DATABASE_PASSWORD=password
DATABASE_NAME=hris_db

# Redis
REDIS_URL=redis://localhost:6379
REDIS_HOST=localhost
REDIS_PORT=6379

# JWT
JWT_SECRET=your-super-secret-key-change-this
JWT_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d

# API URLs
API_URL=http://localhost:3000
AUTH_SERVICE_URL=http://localhost:3001
EMPLOYEE_SERVICE_URL=http://localhost:3002
PAYROLL_SERVICE_URL=http://localhost:3003

# External Services
HAILAMAN_API_URL=https://api.hailaman.ai
HAILAMAN_API_KEY=your-api-key

# Email
SENDGRID_API_KEY=your-sendgrid-key
EMAIL_FROM=noreply@yourcompany.com

# SMS
TWILIO_ACCOUNT_SID=your-twilio-sid
TWILIO_AUTH_TOKEN=your-twilio-token
TWILIO_PHONE_NUMBER=+1234567890

# Storage
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=us-east-1
AWS_S3_BUCKET=hris-documents

# Feature Flags
ENABLE_SSO=true
ENABLE_MOBILE_APP=true
ENABLE_ANALYTICS=true
```

## 🎯 Common Tasks

### Add New Package
```bash
# Create new package
mkdir packages/my-package
cd packages/my-package
pnpm init

# Add dependencies
pnpm add dependency-name

# Reference in other packages
# In package.json of consuming package:
{
  "dependencies": {
    "@hris/my-package": "workspace:*"
  }
}
```

### Update Dependencies
```bash
# Update all dependencies
pnpm update

# Update specific package
pnpm update typescript

# Check outdated packages
pnpm outdated
```

### Database Operations
```bash
# Create migration
cd packages/database
pnpm migration:create src/migrations/MyMigration

# Run migrations
pnpm migration:run

# Revert migration
pnpm migration:revert

# Seed database
pnpm seed:run
```

### Code Quality
```bash
# Run linter
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format

# Type check
pnpm type-check
```

## 🚨 Troubleshooting

### Port Already in Use
```bash
# Find process using port
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Docker Issues
```bash
# Remove all containers and volumes
docker-compose down -v

# Rebuild from scratch
docker-compose build --no-cache

# Check logs for errors
docker-compose logs
```

### Database Connection Issues
```bash
# Check PostgreSQL is running
docker-compose ps postgres

# Verify credentials in .env
# Try connecting manually
psql -h localhost -U hris_user -d hris_db
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules
pnpm install

# Clear Turborepo cache
pnpm clean

# Rebuild
pnpm build
```

## 📚 Additional Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [NestJS Docs](https://docs.nestjs.com)
- [TypeORM Docs](https://typeorm.io)
- [Turborepo Docs](https://turbo.build/repo/docs)

### Internal Docs
- API Documentation: `http://localhost:3000/api/docs`
- Storybook (UI Components): `http://localhost:6006`
- Project Wiki: Check `/docs` folder

### Getting Help
- Slack Channel: #hris-dev
- Email: dev-team@yourcompany.com
- GitHub Issues: For bug reports and feature requests

## 🎓 Best Practices

### Code Style
- Use TypeScript strict mode
- Follow ESLint configuration
- Write meaningful commit messages (Conventional Commits)
- Add JSDoc comments for public APIs

### Git Workflow
- Feature branches from `develop`
- Pull requests require 2 approvals
- Squash commits before merging
- Keep PRs focused and small

### Performance
- Use React Query for data fetching
- Implement proper caching strategies
- Optimize database queries
- Use lazy loading for heavy components

### Security
- Never commit secrets to Git
- Use environment variables
- Validate all inputs
- Implement rate limiting
- Keep dependencies updated

## 🚀 Next Steps

1. **Read the Architecture Docs**: Understand the system design
2. **Set Up Local Environment**: Follow this guide
3. **Pick a Task**: Start with good first issues
4. **Write Tests**: Maintain high code coverage
5. **Deploy**: Learn the deployment process
6. **Monitor**: Set up observability tools

Happy coding! 🎉