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

   # API Architecture & Communication Patterns

## 🔌 API Gateway Architecture

### API Gateway Responsibilities
```typescript
// Next.js API Routes + tRPC
1. Authentication & Authorization
2. Rate Limiting
3. Request Validation
4. Response Caching
5. Service Discovery
6. Load Balancing
7. API Versioning
8. Error Handling
```

### API Endpoints Structure
```
/api
├── /auth
│   ├── /login
│   ├── /logout
│   ├── /refresh
│   └── /sso
├── /employees
│   ├── /:id
│   ├── /:id/profile
│   ├── /:id/documents
│   └── /:id/hierarchy
├── /payroll
│   ├── /run
│   ├── /payslips
│   └── /tax-reports
├── /attendance
│   ├── /check-in
│   ├── /check-out
│   └── /leave-requests
├── /performance
│   ├── /reviews
│   ├── /goals
│   └── /feedback
└── /reports
    ├── /custom
    ├── /scheduled
    └── /export
```

## 🔗 Inter-Service Communication

### 1. Synchronous Communication (REST/tRPC)
```typescript
// Example: Employee Service calling Payroll Service
// Using NestJS HttpService

@Injectable()
export class EmployeeService {
  async getEmployeeWithSalary(employeeId: string) {
    // Direct HTTP call to payroll service
    const salary = await this.httpService.get(
      `http://payroll-service:3002/api/salary/${employeeId}`
    ).toPromise();
    
    return { employee, salary: salary.data };
  }
}

// Or using tRPC for type-safety
const salary = await trpc.payroll.getSalary.query({ 
  employeeId 
});
```

### 2. Asynchronous Communication (NATS Event Bus)
```typescript
// Publishing Events
@Injectable()
export class EmployeeService {
  async updateEmployee(id: string, data: UpdateEmployeeDto) {
    const employee = await this.employeeRepo.update(id, data);
    
    // Publish event to NATS
    await this.natsClient.emit('employee.updated', {
      employeeId: id,
      changes: data,
      timestamp: new Date()
    });
    
    return employee;
  }
}

// Subscribing to Events
@Injectable()
export class PayrollService {
  @NatsSubscriber('employee.updated')
  async handleEmployeeUpdate(data: EmployeeUpdatedEvent) {
    // Update salary records if department or position changed
    if (data.changes.department || data.changes.position) {
      await this.recalculateSalary(data.employeeId);
    }
  }
}
```

### 3. Background Jobs (BullMQ)
```typescript
// Producer - Schedule a job
@Injectable()
export class PayrollService {
  async schedulePayrollRun(period: string) {
    await this.payrollQueue.add('run-payroll', {
      period,
      timestamp: new Date()
    }, {
      attempts: 3,
      backoff: {
        type: 'exponential',
        delay: 5000
      }
    });
  }
}

// Consumer - Process the job
@Processor('payroll-queue')
export class PayrollProcessor {
  @Process('run-payroll')
  async handlePayrollRun(job: Job) {
    const { period } = job.data;
    
    // 1. Fetch all employees
    const employees = await this.getActiveEmployees();
    
    // 2. Calculate salaries
    for (const employee of employees) {
      await this.calculateSalary(employee, period);
      await job.progress(employees.indexOf(employee) / employees.length * 100);
    }
    
    // 3. Generate reports
    await this.generatePayrollReport(period);
    
    return { success: true, count: employees.length };
  }
}
```

## 📡 Real-time Communication

### WebSocket Implementation (Socket.IO)
```typescript
// Real-time notifications for:
// - Attendance check-in/out
// - Leave approvals
// - Performance review assignments
// - System announcements

// Server-side
@WebSocketGateway({ 
  cors: { origin: '*' },
  namespace: '/notifications' 
})
export class NotificationGateway {
  @WebSocketServer()
  server: Server;

  sendToUser(userId: string, notification: Notification) {
    this.server.to(`user:${userId}`).emit('notification', notification);
  }
}

// Client-side (Next.js)
import { io } from 'socket.io-client';

const socket = io('ws://api.hris.com/notifications', {
  auth: { token: session.accessToken }
});

socket.on('notification', (data) => {
  toast.info(data.message);
  queryClient.invalidateQueries(['notifications']);
});
```

## 🔐 Authentication Flow

### 1. JWT-Based Authentication
```typescript
// Login Flow
POST /api/auth/login
{
  "email": "user@company.com",
  "password": "********"
}

Response:
{
  "accessToken": "eyJhbG...",  // 15 minutes expiry
  "refreshToken": "eyJhbG...", // 7 days expiry
  "user": {
    "id": "123",
    "email": "user@company.com",
    "role": "employee"
  }
}

// Token Refresh Flow
POST /api/auth/refresh
Headers: {
  Authorization: "Bearer <refreshToken>"
}

Response:
{
  "accessToken": "eyJhbG...",
  "refreshToken": "eyJhbG..."
}

// Protected Route Middleware
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // Verify JWT token
    // Check user permissions
    // Validate token expiry
    return super.canActivate(context);
  }
}
```

### 2. SSO Integration (OAuth 2.0)
```typescript
// Google/Azure AD SSO
GET /api/auth/sso/google
  → Redirect to Google OAuth
  → User approves
  → Callback to /api/auth/sso/google/callback
  → Exchange code for tokens
  → Create/update user in HRIS
  → Generate JWT tokens
  → Redirect to dashboard
```

## 🛡️ Authorization & RBAC

### Role-Based Access Control
```typescript
// Define Roles
enum Role {
  SUPER_ADMIN = 'super_admin',
  HR_ADMIN = 'hr_admin',
  MANAGER = 'manager',
  EMPLOYEE = 'employee',
  PAYROLL_ADMIN = 'payroll_admin',
}

// Define Permissions
enum Permission {
  // Employee permissions
  READ_OWN_PROFILE = 'read:own_profile',
  UPDATE_OWN_PROFILE = 'update:own_profile',
  
  // Manager permissions
  READ_TEAM_PROFILES = 'read:team_profiles',
  APPROVE_LEAVE = 'approve:leave',
  CONDUCT_REVIEW = 'conduct:review',
  
  // HR Admin permissions
  READ_ALL_EMPLOYEES = 'read:all_employees',
  CREATE_EMPLOYEE = 'create:employee',
  UPDATE_EMPLOYEE = 'update:employee',
  DELETE_EMPLOYEE = 'delete:employee',
  
  // Payroll Admin
  RUN_PAYROLL = 'run:payroll',
  VIEW_SALARY = 'view:salary',
  UPDATE_SALARY = 'update:salary',
}

// Role-Permission Mapping
const rolePermissions = {
  [Role.EMPLOYEE]: [
    Permission.READ_OWN_PROFILE,
    Permission.UPDATE_OWN_PROFILE,
  ],
  [Role.MANAGER]: [
    Permission.READ_OWN_PROFILE,
    Permission.UPDATE_OWN_PROFILE,
    Permission.READ_TEAM_PROFILES,
    Permission.APPROVE_LEAVE,
    Permission.CONDUCT_REVIEW,
  ],
  [Role.HR_ADMIN]: [
    Permission.READ_ALL_EMPLOYEES,
    Permission.CREATE_EMPLOYEE,
    Permission.UPDATE_EMPLOYEE,
    Permission.DELETE_EMPLOYEE,
  ],
  [Role.PAYROLL_ADMIN]: [
    Permission.RUN_PAYROLL,
    Permission.VIEW_SALARY,
    Permission.UPDATE_SALARY,
  ],
};

// Guard Implementation
@Injectable()
export class PermissionsGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.get<Permission[]>(
      'permissions',
      context.getHandler()
    );
    
    const { user } = context.switchToHttp().getRequest();
    
    return requiredPermissions.every(permission =>
      user.permissions.includes(permission)
    );
  }
}

// Usage in Controller
@Controller('employees')
export class EmployeeController {
  @Get()
  @Permissions(Permission.READ_ALL_EMPLOYEES)
  @UseGuards(JwtAuthGuard, PermissionsGuard)
  async getAllEmployees() {
    return this.employeeService.findAll();
  }
}
```

## 📊 API Versioning Strategy

### URL-Based Versioning
```typescript
// v1 API (current stable)
/api/v1/employees

// v2 API (new features)
/api/v2/employees

// Implementation
@Controller('v1/employees')
export class EmployeeControllerV1 { }

@Controller('v2/employees')
export class EmployeeControllerV2 { }
```

### Header-Based Versioning
```typescript
// Client sends:
Headers: {
  "API-Version": "2.0"
}

// Interceptor handles routing
@Injectable()
export class VersioningInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const version = request.headers['api-version'];
    
    // Route to appropriate handler
    return next.handle();
  }
}
```

## 🔄 Data Synchronization with Hailaman.ai

### 1. Initial Sync (One-time)
```typescript
// Fetch all candidates from Hailaman.ai
async initialSync() {
  const candidates = await this.hailamanApi.getCandidates();
  
  for (const candidate of candidates) {
    await this.syncCandidate(candidate);
  }
}
```

### 2. Webhook-based Real-time Sync
```typescript
// Hailaman.ai sends webhook on events
POST /api/webhooks/hailaman
{
  "event": "candidate.hired",
  "data": {
    "candidateId": "123",
    "jobId": "456",
    "startDate": "2025-01-01"
  }
}

// Handle webhook
@Post('webhooks/hailaman')
async handleHailamanWebhook(@Body() payload: HailamanWebhook) {
  switch (payload.event) {
    case 'candidate.hired':
      await this.onboardNewEmployee(payload.data);
      break;
    case 'candidate.rejected':
      await this.archiveCandidate(payload.data);
      break;
  }
}
```

### 3. Scheduled Sync (Fallback)
```typescript
// Run every 30 minutes
@Cron('*/30 * * * *')
async scheduledSync() {
  const lastSyncTime = await this.getLastSyncTime();
  const updates = await this.hailamanApi.getUpdates(lastSyncTime);
  
  for (const update of updates) {
    await this.processUpdate(update);
  }
  
  await this.updateLastSyncTime(new Date());
}
```

## 🎯 API Rate Limiting

```typescript
// Global rate limiting
@Injectable()
export class RateLimitGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const key = `rate_limit:${request.user.id}`;
    
    const current = await this.redis.incr(key);
    
    if (current === 1) {
      await this.redis.expire(key, 60); // 1 minute window
    }
    
    if (current > 100) { // 100 requests per minute
      throw new ThrottlerException();
    }
    
    return true;
  }
}
```

## 🔍 API Documentation (Swagger)

```typescript
// Swagger setup
const config = new DocumentBuilder()
  .setTitle('HRIS API')
  .setDescription('HRIS System API Documentation')
  .setVersion('1.0')
  .addBearerAuth()
  .addTag('employees')
  .addTag('payroll')
  .addTag('attendance')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api/docs', app, document);

// Endpoint documentation
@ApiTags('employees')
@Controller('employees')
export class EmployeeController {
  @Get(':id')
  @ApiOperation({ summary: 'Get employee by ID' })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ 
    status: 200, 
    description: 'Employee found',
    type: EmployeeDto 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Employee not found' 
  })
  async getEmployee(@Param('id') id: string) {
    return this.employeeService.findById(id);
  }
}
```

## 🚨 Error Handling

```typescript
// Centralized error handling
@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception.getStatus?.() || 500;
    const message = exception.message || 'Internal server error';

    // Log error
    this.logger.error({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      message,
      stack: exception.stack,
    });

    // Send response
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
      ...(process.env.NODE_ENV === 'development' && { 
        stack: exception.stack 
      }),
    });
  }
}
```

## 📈 API Performance Optimization

### 1. Caching Strategy
```typescript
// Redis caching
@Injectable()
export class EmployeeService {
  async getEmployee(id: string): Promise<Employee> {
    // Check cache first
    const cached = await this.redis.get(`employee:${id}`);
    if (cached) {
      return JSON.parse(cached);
    }
    
    // Fetch from database
    const employee = await this.employeeRepo.findOne(id);
    
    // Cache for 5 minutes
    await this.redis.setex(
      `employee:${id}`, 
      300, 
      JSON.stringify(employee)
    );
    
    return employee;
  }
}
```

### 2. Database Query Optimization
```typescript
// Eager loading relationships
const employee = await this.employeeRepo.findOne(id, {
  relations: ['department', 'manager', 'salary']
});

// Pagination
const [employees, total] = await this.employeeRepo.findAndCount({
  skip: (page - 1) * limit,
  take: limit,
  order: { createdAt: 'DESC' }
});
```

### 3. Response Compression
```typescript
// Enable gzip compression
app.use(compression());
```

## 🎭 API Mocking for Development

```typescript
// Mock service for development
@Injectable()
export class MockHailamanService {
  async getCandidates() {
    return [
      { id: '1', name: 'Ahmed Ali', status: 'hired' },
      { id: '2', name: 'Sara Mohammed', status: 'interviewing' },
    ];
  }
}

// Use mock in development
@Module({
  providers: [
    {
      provide: HailamanService,
      useClass: process.env.NODE_ENV === 'development'
        ? MockHailamanService
        : HailamanService
    }
  ]
})
export class RecruitmentModule {}
```

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

# HRIS Web Application - Requirements Document

## 📋 Project Overview

### Project Information
- **Project Name**: HRIS Platform - Web Application
- **Type**: Enterprise Cloud-based HR Management System
- **Architecture**: Monorepo with Next.js 15 Frontend + NestJS Microservices Backend
- **Target Region**: Saudi Arabia (expandable)

### Purpose
Develop a comprehensive web-based HR management system covering the complete employee lifecycle from recruitment to offboarding, with full integration with Hailaman.ai ATS and Saudi government systems.

---

## 1️⃣ Functional Requirements - Web Application

### 1.1 Authentication & Authorization

#### 1.1.1 Login System
- **REQ-WEB-AUTH-001**: System must provide email/password login
- **REQ-WEB-AUTH-002**: System must support Multi-Factor Authentication (MFA)
  - OTP via SMS
  - OTP via Email
  - Authenticator app (Google Authenticator, Authy)
- **REQ-WEB-AUTH-003**: System must support Single Sign-On (SSO)
  - Google OAuth 2.0
  - Microsoft Azure AD
  - SAML 2.0 integration
- **REQ-WEB-AUTH-004**: System must implement "Remember Me" functionality (7 days)
- **REQ-WEB-AUTH-005**: System must support password reset via email
- **REQ-WEB-AUTH-006**: System must enforce password policies:
  - Minimum 8 characters
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
  - At least one special character
- **REQ-WEB-AUTH-007**: System must auto-logout after 15 minutes of inactivity
- **REQ-WEB-AUTH-008**: System must show last login time and device

#### 1.1.2 Session Management
- **REQ-WEB-AUTH-009**: System must use JWT tokens (access + refresh)
- **REQ-WEB-AUTH-010**: Access token expires in 15 minutes
- **REQ-WEB-AUTH-011**: Refresh token expires in 7 days
- **REQ-WEB-AUTH-012**: System must allow users to view active sessions
- **REQ-WEB-AUTH-013**: System must allow users to terminate other sessions

#### 1.1.3 Role-Based Access Control
- **REQ-WEB-AUTH-014**: System must implement RBAC with the following roles:
  - Super Admin
  - HR Admin
  - HR Manager
  - Payroll Admin
  - Department Manager
  - Employee
  - Recruitment Manager
- **REQ-WEB-AUTH-015**: System must enforce permissions at page level
- **REQ-WEB-AUTH-016**: System must enforce permissions at component level
- **REQ-WEB-AUTH-017**: System must enforce permissions at API level
- **REQ-WEB-AUTH-018**: System must display only authorized menu items

### 1.2 Dashboard & Home Page

#### 1.2.1 Employee Dashboard
- **REQ-WEB-DASH-001**: Display personalized welcome message
- **REQ-WEB-DASH-002**: Show quick stats cards:
  - Leave balance
  - Pending approvals
  - Recent notifications
  - Upcoming events
- **REQ-WEB-DASH-003**: Display recent payslips (last 3 months)
- **REQ-WEB-DASH-004**: Show attendance summary for current month
- **REQ-WEB-DASH-005**: Display upcoming holidays and company events
- **REQ-WEB-DASH-006**: Show quick action buttons:
  - Request Leave
  - Check-in/Check-out
  - Download Payslip
  - Submit Request
- **REQ-WEB-DASH-007**: Display company announcements
- **REQ-WEB-DASH-008**: Show birthday/work anniversary reminders

#### 1.2.2 HR Admin Dashboard
- **REQ-WEB-DASH-009**: Display key metrics:
  - Total employees
  - New hires this month
  - Employees on leave today
  - Pending approvals
  - Attrition rate
- **REQ-WEB-DASH-010**: Show headcount by department (chart)
- **REQ-WEB-DASH-011**: Display gender distribution (chart)
- **REQ-WEB-DASH-012**: Show attendance overview (chart)
- **REQ-WEB-DASH-013**: Display payroll summary for current month
- **REQ-WEB-DASH-014**: Show recent activities feed
- **REQ-WEB-DASH-015**: Display pending tasks requiring attention
- **REQ-WEB-DASH-016**: Show recruitment pipeline summary

#### 1.2.3 Manager Dashboard
- **REQ-WEB-DASH-017**: Display team overview:
  - Total team members
  - Team on leave today
  - Pending leave approvals
  - Performance review status
- **REQ-WEB-DASH-018**: Show team attendance for current week
- **REQ-WEB-DASH-019**: Display team performance metrics
- **REQ-WEB-DASH-020**: Show pending approval queue

### 1.3 Employee Management Module

#### 1.3.1 Employee Directory
- **REQ-WEB-EMP-001**: Display searchable employee list with pagination
- **REQ-WEB-EMP-002**: Show employee cards with:
  - Photo
  - Name
  - Job title
  - Department
  - Contact info
- **REQ-WEB-EMP-003**: Implement advanced search with filters:
  - Name
  - Employee number
  - Department
  - Job title
  - Status (Active/Inactive)
  - Location
- **REQ-WEB-EMP-004**: Support bulk operations:
  - Export to Excel
  - Send bulk email
  - Bulk status update
- **REQ-WEB-EMP-005**: Display organizational chart (tree view)
- **REQ-WEB-EMP-006**: Allow switching between list, grid, and org chart views

#### 1.3.2 Employee Profile Page
- **REQ-WEB-EMP-007**: Display comprehensive profile with tabs:
  - Personal Information
  - Employment Information
  - Documents
  - Salary Information (restricted access)
  - Attendance History
  - Leave Records
  - Performance Reviews
  - Training History
- **REQ-WEB-EMP-008**: Personal Information section must show:
  - Full name (Arabic & English)
  - National ID / Iqama number
  - Date of birth
  - Gender
  - Nationality
  - Marital status
  - Contact information
  - Address
  - Emergency contacts
- **REQ-WEB-EMP-009**: Employment Information section must show:
  - Employee number
  - Hire date
  - Job title
  - Department
  - Direct manager
  - Employment type
  - Work location
  - Contract details
  - Probation status
- **REQ-WEB-EMP-010**: Allow inline editing of fields (based on permissions)
- **REQ-WEB-EMP-011**: Display profile completion percentage
- **REQ-WEB-EMP-012**: Show activity timeline (promotions, transfers, etc.)

#### 1.3.3 Add New Employee
- **REQ-WEB-EMP-013**: Provide multi-step form wizard:
  - Step 1: Personal Information
  - Step 2: Employment Details
  - Step 3: Salary & Benefits
  - Step 4: Documents
  - Step 5: Review & Submit
- **REQ-WEB-EMP-014**: Validate all required fields
- **REQ-WEB-EMP-015**: Check for duplicate National ID / Email
- **REQ-WEB-EMP-016**: Auto-generate employee number
- **REQ-WEB-EMP-017**: Allow saving as draft
- **REQ-WEB-EMP-018**: Send welcome email upon creation
- **REQ-WEB-EMP-019**: Trigger onboarding workflow automatically

#### 1.3.4 Document Management
- **REQ-WEB-EMP-020**: Display document library with categories:
  - Contracts
  - ID Documents (National ID, Passport)
  - Educational Certificates
  - Professional Certifications
  - Medical Records
  - Other
- **REQ-WEB-EMP-021**: Support document upload (drag & drop)
- **REQ-WEB-EMP-022**: Accept file formats: PDF, JPG, PNG, DOCX
- **REQ-WEB-EMP-023**: Limit file size to 10MB per document
- **REQ-WEB-EMP-024**: Show document metadata (uploaded by, date, size)
- **REQ-WEB-EMP-025**: Allow document preview (PDF, images)
- **REQ-WEB-EMP-026**: Support document download
- **REQ-WEB-EMP-027**: Track document expiry dates
- **REQ-WEB-EMP-028**: Send notifications before document expiry (30 days)
- **REQ-WEB-EMP-029**: Implement document access control based on roles

#### 1.3.5 Organizational Hierarchy
- **REQ-WEB-EMP-030**: Display interactive org chart
- **REQ-WEB-EMP-031**: Support zoom in/out and pan
- **REQ-WEB-EMP-032**: Show reporting relationships
- **REQ-WEB-EMP-033**: Click on employee to view profile
- **REQ-WEB-EMP-034**: Export org chart as image
- **REQ-WEB-EMP-035**: Filter org chart by department

### 1.4 Payroll Management Module

#### 1.4.1 Payroll Dashboard
- **REQ-WEB-PAY-001**: Display current payroll period status
- **REQ-WEB-PAY-002**: Show payroll summary:
  - Total employees
  - Total gross salary
  - Total deductions
  - Total net salary
- **REQ-WEB-PAY-003**: Display payroll processing progress
- **REQ-WEB-PAY-004**: Show payroll calendar with payment dates
- **REQ-WEB-PAY-005**: Display pending payroll approvals

#### 1.4.2 Run Payroll
- **REQ-WEB-PAY-006**: Provide "Run Payroll" wizard:
  - Step 1: Select Period
  - Step 2: Review Employees
  - Step 3: Calculate Salaries
  - Step 4: Review & Adjust
  - Step 5: Approve & Process
- **REQ-WEB-PAY-007**: Show real-time calculation progress
- **REQ-WEB-PAY-008**: Display calculation summary before approval
- **REQ-WEB-PAY-009**: Allow manual adjustments for individual employees
- **REQ-WEB-PAY-010**: Support adding one-time bonuses/deductions
- **REQ-WEB-PAY-011**: Validate all calculations before approval
- **REQ-WEB-PAY-012**: Require confirmation before finalizing
- **REQ-WEB-PAY-013**: Generate payroll register report
- **REQ-WEB-PAY-014**: Export payroll data for bank transfer
- **REQ-WEB-PAY-015**: Send payslips to employees via email

#### 1.4.3 Salary Structure
- **REQ-WEB-PAY-016**: Display salary components table:
  - Basic salary
  - Housing allowance
  - Transport allowance
  - Other allowances
  - Bonuses
  - Overtime
- **REQ-WEB-PAY-017**: Show deductions table:
  - Tax
  - GOSI
  - Loans
  - Absence deductions
  - Other deductions
- **REQ-WEB-PAY-018**: Allow editing salary components (with permissions)
- **REQ-WEB-PAY-019**: Support creating salary templates
- **REQ-WEB-PAY-020**: Apply salary templates to multiple employees

#### 1.4.4 Payslips
- **REQ-WEB-PAY-021**: Generate PDF payslip with:
  - Company logo and details
  - Employee information
  - Pay period
  - Earnings breakdown
  - Deductions breakdown
  - Net salary
  - Payment method
- **REQ-WEB-PAY-022**: Support payslip preview before generation
- **REQ-WEB-PAY-023**: Allow bulk payslip generation
- **REQ-WEB-PAY-024**: Support payslip download
- **REQ-WEB-PAY-025**: Maintain payslip archive (accessible for 5 years)
- **REQ-WEB-PAY-026**: Allow employees to download their payslips
- **REQ-WEB-PAY-027**: Support password-protected payslips

#### 1.4.5 Tax Reports
- **REQ-WEB-PAY-028**: Generate GOSI report with:
  - Employee contributions
  - Employer contributions
  - Total contributions
- **REQ-WEB-PAY-029**: Generate ZATCA tax report
- **REQ-WEB-PAY-030**: Export reports in required formats (XML, CSV, Excel)
- **REQ-WEB-PAY-031**: Support custom date range selection
- **REQ-WEB-PAY-032**: Schedule automatic report generation

#### 1.4.6 Payment Processing
- **REQ-WEB-PAY-033**: Display payment queue
- **REQ-WEB-PAY-034**: Show payment status for each employee
- **REQ-WEB-PAY-035**: Support multiple payment methods:
  - Bank transfer (IBAN)
  - Cash
  - Cheque
  - Digital wallets
- **REQ-WEB-PAY-036**: Generate bank transfer file (WPS format)
- **REQ-WEB-PAY-037**: Track payment confirmation
- **REQ-WEB-PAY-038**: Allow marking payments as completed manually

### 1.5 Attendance & Leave Management Module

#### 1.5.1 Attendance Dashboard
- **REQ-WEB-ATT-001**: Display attendance overview for today:
  - Present employees
  - Absent employees
  - On leave
  - Late arrivals
- **REQ-WEB-ATT-002**: Show real-time check-in/check-out feed
- **REQ-WEB-ATT-003**: Display attendance calendar (month view)
- **REQ-WEB-ATT-004**: Show attendance trends chart
- **REQ-WEB-ATT-005**: Display top late arrivals

#### 1.5.2 Check-In / Check-Out
- **REQ-WEB-ATT-006**: Provide prominent check-in button on dashboard
- **REQ-WEB-ATT-007**: Capture timestamp on check-in
- **REQ-WEB-ATT-008**: Capture browser geolocation (if permitted)
- **REQ-WEB-ATT-009**: Optional: Capture photo via webcam
- **REQ-WEB-ATT-010**: Display current status (checked in/out)
- **REQ-WEB-ATT-011**: Show time elapsed since check-in
- **REQ-WEB-ATT-012**: Provide check-out button when checked in
- **REQ-WEB-ATT-013**: Calculate work hours automatically
- **REQ-WEB-ATT-014**: Detect and flag overtime hours
- **REQ-WEB-ATT-015**: Prevent duplicate check-ins

#### 1.5.3 Attendance Records
- **REQ-WEB-ATT-016**: Display attendance history table with:
  - Date
  - Check-in time
  - Check-out time
  - Total hours
  - Status
  - Overtime
- **REQ-WEB-ATT-017**: Support filtering by date range
- **REQ-WEB-ATT-018**: Allow export to Excel
- **REQ-WEB-ATT-019**: Show monthly attendance summary
- **REQ-WEB-ATT-020**: Calculate attendance statistics:
  - Present days
  - Absent days
  - Late days
  - Total hours worked
  - Overtime hours

#### 1.5.4 Leave Management
- **REQ-WEB-ATT-021**: Display leave balance dashboard:
  - Annual leave (used/remaining)
  - Sick leave (used/remaining)
  - Emergency leave
  - Other leave types
- **REQ-WEB-ATT-022**: Provide "Request Leave" form with:
  - Leave type
  - Start date
  - End date
  - Number of days (auto-calculated)
  - Reason
  - Attachments (for sick leave)
- **REQ-WEB-ATT-023**: Validate leave balance before submission
- **REQ-WEB-ATT-024**: Check for leave conflicts (overlapping dates)
- **REQ-WEB-ATT-025**: Send notification to manager upon submission
- **REQ-WEB-ATT-026**: Display leave request status:
  - Pending
  - Approved
  - Rejected
  - Cancelled
- **REQ-WEB-ATT-027**: Allow cancelling pending leave requests
- **REQ-WEB-ATT-028**: Show leave history table

#### 1.5.5 Leave Approvals (Manager View)
- **REQ-WEB-ATT-029**: Display pending leave approvals queue
- **REQ-WEB-ATT-030**: Show leave request details:
  - Employee name
  - Leave type
  - Dates
  - Reason
  - Current balance
- **REQ-WEB-ATT-031**: Provide approve/reject buttons
- **REQ-WEB-ATT-032**: Require rejection reason
- **REQ-WEB-ATT-033**: Send notification to employee upon decision
- **REQ-WEB-ATT-034**: Update leave balance automatically upon approval
- **REQ-WEB-ATT-035**: Display team leave calendar
- **REQ-WEB-ATT-036**: Support bulk approvals

#### 1.5.6 Leave Calendar
- **REQ-WEB-ATT-037**: Display company-wide leave calendar
- **REQ-WEB-ATT-038**: Show employees on leave for selected date
- **REQ-WEB-ATT-039**: Color-code by leave type
- **REQ-WEB-ATT-040**: Support month/week/day views
- **REQ-WEB-ATT-041**: Mark public holidays
- **REQ-WEB-ATT-042**: Allow filtering by department/team

#### 1.5.7 Shift Management
- **REQ-WEB-ATT-043**: Create and manage work shifts:
  - Shift name
  - Start time
  - End time
  - Break duration
  - Working days
- **REQ-WEB-ATT-044**: Assign employees to shifts
- **REQ-WEB-ATT-045**: Support shift rotation schedules
- **REQ-WEB-ATT-046**: Allow shift swapping (with approval)
- **REQ-WEB-ATT-047**: Display shift schedule calendar
- **REQ-WEB-ATT-048**: Send shift reminders to employees

### 1.6 Performance Management Module

#### 1.6.1 Performance Dashboard
- **REQ-WEB-PERF-001**: Display performance overview:
  - Active review cycles
  - Pending reviews
  - Completed reviews
  - Average rating
- **REQ-WEB-PERF-002**: Show performance trends chart
- **REQ-WEB-PERF-003**: Display top performers
- **REQ-WEB-PERF-004**: Show employees needing attention

#### 1.6.2 Review Cycles
- **REQ-WEB-PERF-005**: Create review cycle with:
  - Name
  - Type (Annual, Quarterly, Probation)
  - Period
  - Due date
  - Template
- **REQ-WEB-PERF-006**: Assign reviewers automatically based on org chart
- **REQ-WEB-PERF-007**: Support multi-rater reviews (360°)
- **REQ-WEB-PERF-008**: Display review cycle progress
- **REQ-WEB-PERF-009**: Send reminders to pending reviewers
- **REQ-WEB-PERF-010**: Allow closing review cycles

#### 1.6.3 Review Templates
- **REQ-WEB-PERF-011**: Create customizable review templates with:
  - Multiple sections
  - Rating criteria
  - Rating scale (1-5, A-F, etc.)
  - Open-ended questions
  - Weighted scoring
- **REQ-WEB-PERF-012**: Support template versioning
- **REQ-WEB-PERF-013**: Clone existing templates
- **REQ-WEB-PERF-014**: Preview template before use

#### 1.6.4 Conduct Review (Reviewer View)
- **REQ-WEB-PERF-015**: Display review form with employee context:
  - Employee name and photo
  - Job title
  - Department
  - Review period
- **REQ-WEB-PERF-016**: Show rating sections from template
- **REQ-WEB-PERF-017**: Provide rating inputs (stars, dropdown, etc.)
- **REQ-WEB-PERF-018**: Support text comments for each section
- **REQ-WEB-PERF-019**: Calculate overall score automatically
- **REQ-WEB-PERF-020**: Allow saving as draft
- **REQ-WEB-PERF-021**: Require all fields before submission
- **REQ-WEB-PERF-022**: Display progress indicator

#### 1.6.5 Self-Assessment (Employee View)
- **REQ-WEB-PERF-023**: Provide self-assessment form
- **REQ-WEB-PERF-024**: Display same template as reviewer
- **REQ-WEB-PERF-025**: Allow employees to rate themselves
- **REQ-WEB-PERF-026**: Support achievement highlights
- **REQ-WEB-PERF-027**: Submit before manager review

#### 1.6.6 Review Results
- **REQ-WEB-PERF-028**: Display completed review with:
  - Overall rating
  - Section-wise ratings
  - Manager comments
  - Self-assessment comparison
  - Development areas
  - Strengths
- **REQ-WEB-PERF-029**: Generate review report (PDF)
- **REQ-WEB-PERF-030**: Allow employee to acknowledge review
- **REQ-WEB-PERF-031**: Support review discussions/meetings
- **REQ-WEB-PERF-032**: Track review history

#### 1.6.7 Goals & OKRs
- **REQ-WEB-PERF-033**: Create individual/team goals with:
  - Title
  - Description
  - Target date
  - Key results
  - Weight/Priority
- **REQ-WEB-PERF-034**: Align goals with company objectives
- **REQ-WEB-PERF-035**: Track goal progress (0-100%)
- **REQ-WEB-PERF-036**: Add check-ins and updates
- **REQ-WEB-PERF-037**: Display goals dashboard
- **REQ-WEB-PERF-038**: Mark goals as achieved/not achieved
- **REQ-WEB-PERF-039**: Generate goal reports

#### 1.6.8 Continuous Feedback
- **REQ-WEB-PERF-040**: Provide quick feedback form
- **REQ-WEB-PERF-041**: Support praise and constructive feedback
- **REQ-WEB-PERF-042**: Tag skills and competencies
- **REQ-WEB-PERF-043**: Display feedback feed
- **REQ-WEB-PERF-044**: Allow reactions (thumbs up, etc.)
- **REQ-WEB-PERF-045**: Private/public feedback options

### 1.7 Recruitment & Onboarding Module

#### 1.7.1 Hailaman.ai Integration Dashboard
- **REQ-WEB-REC-001**: Display sync status with Hailaman.ai
- **REQ-WEB-REC-002**: Show recent candidate imports
- **REQ-WEB-REC-003**: Display sync errors (if any)
- **REQ-WEB-REC-004**: Provide manual sync trigger button
- **REQ-WEB-REC-005**: Show last sync timestamp

#### 1.7.2 Candidates List
- **REQ-WEB-REC-006**: Display candidates imported from Hailaman.ai
- **REQ-WEB-REC-007**: Show candidate cards with:
  - Name
  - Applied position
  - Status (Applied, Screening, Interviewing, Offered, Hired)
  - Source
  - Applied date
- **REQ-WEB-REC-008**: Filter by status, position, date range
- **REQ-WEB-REC-009**: Search by name or email
- **REQ-WEB-REC-010**: Sort by date, name, status

#### 1.7.3 Candidate Profile
- **REQ-WEB-REC-011**: Display comprehensive candidate info:
  - Personal details
  - Contact information
  - Resume/CV
  - Application details
  - Interview history (from Hailaman.ai)
  - Notes and comments
- **REQ-WEB-REC-012**: Show candidate status timeline
- **REQ-WEB-REC-013**: Display offer details (if offered)
- **REQ-WEB-REC-014**: Allow viewing resume (PDF)
- **REQ-WEB-REC-015**: Support adding internal notes

#### 1.7.4 Convert to Employee
- **REQ-WEB-REC-016**: Provide "Convert to Employee" button for hired candidates
- **REQ-WEB-REC-017**: Pre-fill employee form with candidate data
- **REQ-WEB-REC-018**: Allow editing before creating employee record
- **REQ-WEB-REC-019**: Automatically initiate onboarding workflow
- **REQ-WEB-REC-020**: Update candidate status to "Hired"
- **REQ-WEB-REC-021**: Link employee record to candidate

#### 1.7.5 Onboarding Workflow
- **REQ-WEB-REC-022**: Display onboarding dashboard with:
  - Active onboarding processes
  - Completion status
  - Pending tasks
- **REQ-WEB-REC-023**: Create onboarding checklist templates:
  - Equipment assignment
  - Account creation
  - Document signing
  - Training sessions
  - First day orientation
- **REQ-WEB-REC-024**: Assign tasks to different stakeholders:
  - HR
  - IT
  - Manager
  - New employee
- **REQ-WEB-REC-025**: Set task due dates
- **REQ-WEB-REC-026**: Track task completion
- **REQ-WEB-REC-027**: Send task reminders
- **REQ-WEB-REC-028**: Display onboarding progress (%)
- **REQ-WEB-REC-029**: Generate onboarding completion report

#### 1.7.6 New Employee Portal
- **REQ-WEB-REC-030**: Provide dedicated portal for new employees
- **REQ-WEB-REC-031**: Display welcome message
- **REQ-WEB-REC-032**: Show onboarding checklist
- **REQ-WEB-REC-033**: Allow uploading required documents
- **REQ-WEB-REC-034**: Provide company handbook/policies
- **REQ-WEB-REC-035**: Display team introduction
- **REQ-WEB-REC-036**: Show first week schedule

### 1.8 Benefits Management Module

#### 1.8.1 Benefits Dashboard
- **REQ-WEB-BEN-001**: Display available benefits overview
- **REQ-WEB-BEN-002**: Show enrolled benefits
- **REQ-WEB-BEN-003**: Display benefit costs
- **REQ-WEB-BEN-004**: Show enrollment periods

#### 1.8.2 Benefits Catalog
- **REQ-WEB-BEN-005**: List all available benefits:
  - Health insurance
  - Life insurance
  - Dental insurance
  - Vision insurance
  - Retirement plan
  - Gym membership
  - Transportation allowance
  - Meal vouchers
  - Other perks
- **REQ-WEB-BEN-006**: Display benefit details:
  - Description
  - Coverage
  - Eligibility
  - Cost (employer/employee share)
  - Provider information
- **REQ-WEB-BEN-007**: Support benefit comparison
- **REQ-WEB-BEN-008**: Show benefit documents/brochures

#### 1.8.3 Benefit Enrollment
- **REQ-WEB-BEN-009**: Provide enrollment wizard
- **REQ-WEB-BEN-010**: Check employee eligibility
- **REQ-WEB-BEN-011**: Support adding dependents:
  - Name
  - Relationship
  - Date of birth
  - ID documents
- **REQ-WEB-BEN-012**: Calculate total cost
- **REQ-WEB-BEN-013**: Preview payroll deduction
- **REQ-WEB-BEN-014**: Require confirmation before enrollment
- **REQ-WEB-BEN-015**: Generate enrollment confirmation

#### 1.8.4 My Benefits (Employee View)
- **REQ-WEB-BEN-016**: Display enrolled benefits
- **REQ-WEB-BEN-017**: Show coverage details
- **REQ-WEB-BEN-018**: Display dependent information
- **REQ-WEB-BEN-019**: Show insurance cards (digital)
- **REQ-WEB-BEN-020**: Provide claims submission (if applicable)
- **REQ-WEB-BEN-021**: Track claims status
- **REQ-WEB-BEN-022**: Allow benefit changes during open enrollment
- **REQ-WEB-BEN-023**: Support life event changes

#### 1.8.5 Benefits Administration (HR View)
- **REQ-WEB-BEN-024**: Manage benefit plans
- **REQ-WEB-BEN-025**: Set enrollment periods
- **REQ-WEB-BEN-026**: Review enrollment requests
- **REQ-WEB-BEN-027**: Process benefit changes
- **REQ-WEB-BEN-028**: Generate benefits reports:
  - Enrollment statistics
  - Cost analysis
  - Provider reports

### 1.9 Training & Development Module

#### 1.9.1 Training Dashboard
- **REQ-WEB-TRN-001**: Display training overview:
  - Upcoming courses
  - Enrolled courses
  - Completed courses
  - Certifications
- **REQ-WEB-TRN-002**: Show training calendar
- **REQ-WEB-TRN-003**: Display required vs optional training

#### 1.9.2 Course Catalog
- **REQ-WEB-TRN-004**: List all available courses with:
  - Course name
  - Category
  - Duration
  - Type (Online/In-person)
  - Instructor
  - Schedule
  - Capacity
  - Cost
- **REQ-WEB-TRN-005**: Support course filtering by:
  - Category
  - Type
  - Duration
  - Required/Optional
- **REQ-WEB-TRN-006**: Provide course search
- **REQ-WEB-TRN-007**: Display course details page:
  - Description
  - Learning objectives
  - Prerequisites
  - Schedule
  - Location (if in-person)
  - Materials
- **REQ-WEB-TRN-008**: Show available seats
- **REQ-WEB-TRN-009**: Display course ratings/reviews

#### 1.9.3 Course Enrollment
- **REQ-WEB-TRN-010**: Provide course registration form
- **REQ-WEB-TRN-011**: Check prerequisites
- **REQ-WEB-TRN-012**: Verify seat availability
- **REQ-WEB-TRN-013**: Request manager approval (if required)
- **REQ-WEB-TRN-014**: Send enrollment confirmation
- **REQ-WEB-TRN-015**: Add to employee's training record
- **REQ-WEB-TRN-016**: Send calendar invite (for scheduled courses)
- **REQ-WEB-TRN-017**: Allow waitlist for full courses

#### 1.9.4 My Learning (Employee View)
- **REQ-WEB-TRN-018**: Display enrolled courses
- **REQ-WEB-TRN-019**: Show course progress (for online courses)
- **REQ-WEB-TRN-020**: Provide course materials download
- **REQ-WEB-TRN-021**: Display upcoming sessions
- **REQ-WEB-TRN-022**: Show completed courses with certificates
- **REQ-WEB-TRN-023**: Display learning path progress
- **REQ-WEB-TRN-024**: Allow course cancellation (with rules)

#### 1.9.5 Certifications
- **REQ-WEB-TRN-025**: Record professional certifications:
  - Certification name
  - Issuing organization
  - Issue date
  - Expiry date
  - Certificate number
  - Certificate file
- **REQ-WEB-TRN-026**: Display certification library
- **REQ-WEB-TRN-027**: Track expiry dates
- **REQ-WEB-TRN-028**: Send renewal reminders
- **REQ-WEB-TRN-029**: Support certificate verification

#### 1.9.6 Career Development
- **REQ-WEB-TRN-030**: Define career paths:
  - Position hierarchy
  - Required skills
  - Required training
  - Typical progression timeline
- **REQ-WEB-TRN-031**: Display employee's career path
- **REQ-WEB-TRN-032**: Show skill gaps
- **REQ-WEB-TRN-033**: Recommend courses based on career goals
- **REQ-WEB-TRN-034**: Create Individual Development Plans (IDP):
  - Goals
  - Required training
  - Timeline
  - Progress tracking

#### 1.9.7 Training Administration (HR View)
- **REQ-WEB-TRN-035**: Create/edit courses
- **REQ-WEB-TRN-036**: Schedule course sessions
- **REQ-WEB-TRN-037**: Manage enrollments
- **REQ-WEB-TRN-038**: Track attendance
- **REQ-WEB-TRN-039**: Record completion
- **REQ-WEB-TRN-040**: Issue certificates
- **REQ-WEB-TRN-041**: Generate training reports:
  - Enrollment statistics
  - Completion rates
  - Training costs
  - Effectiveness analysis

### 1.10 Analytics & Reporting Module

#### 1.10.1 Analytics Dashboard
- **REQ-WEB-REP-001**: Display executive dashboard with key metrics:
  - Total headcount
  - Headcount trend (chart)
  - Attrition rate
  - Average tenure
  - Gender distribution
  - Age distribution
  - Cost per employee
- **REQ-WEB-REP-002**: Show department-wise breakdown
- **REQ-WEB-REP-003**: Display real-time widgets
- **REQ-WEB-REP-004**: Support date range selection
- **REQ-WEB-REP-005**: Allow dashboard customization
- **REQ-WEB-REP-006**: Support drill-down into metrics

#### 1.10.2 Standard Reports
- **REQ-WEB-REP-007**: Provide pre-built reports:
  - Employee Master Report
  - New Hire Report
  - Termination Report
  - Attendance Summary Report
  - Leave Balance Report
  - Payroll Summary Report
  - Training Report
  - Performance Report
  - Headcount by Department
  - Age & Gender Analysis
- **REQ-WEB-REP-008**: Support report parameters (date range, department, etc.)
- **REQ-WEB-REP-009**: Display reports in table format
- **REQ-WEB-REP-010**: Support column sorting
- **REQ-WEB-REP-011**: Support pagination for large reports

#### 1.10.3 Custom Report Builder
- **REQ-WEB-REP-012**: Provide visual report builder interface
- **REQ-WEB-REP-013**: Allow selecting data source (employees, payroll, attendance, etc.)
- **REQ-WEB-REP-014**: Support selecting fields/columns
- **REQ-WEB-REP-015**: Support applying filters
- **REQ-WEB-REP-016**: Support grouping and aggregations
- **REQ-WEB-REP-017**: Provide preview before saving
- **REQ-WEB-REP-018**: Save custom reports for reuse
- **REQ-WEB-REP-019**: Share reports with other users

#### 1.10.4 Report Export
- **REQ-WEB-REP-020**: Export reports to Excel (.xlsx)
- **REQ-WEB-REP-021**: Export reports to PDF
- **REQ-WEB-REP-022**: Export reports to CSV
- **REQ-WEB-REP-023**: Support bulk export
- **REQ-WEB-REP-024**: Maintain export history

#### 1.10.5 Scheduled Reports
- **REQ-WEB-REP-025**: Allow scheduling reports:
  - Daily
  - Weekly
  - Monthly
  - Quarterly
  - Annually
- **REQ-WEB-REP-026**: Configure email recipients
- **REQ-WEB-REP-027**: Select export format
- **REQ-WEB-REP-028**: Set delivery time
- **REQ-WEB-REP-029**: View scheduled reports list
- **REQ-WEB-REP-030**: Edit/delete scheduled reports

#### 1.10.6 Data Visualization
- **REQ-WEB-REP-031**: Support chart types:
  - Line charts
  - Bar charts
  - Pie charts
  - Donut charts
  - Area charts
  - Scatter plots
- **REQ-WEB-REP-032**: Interactive charts (hover, zoom, filter)
- **REQ-WEB-REP-033**: Export charts as images
- **REQ-WEB-REP-034**: Embed charts in dashboards

### 1.11 Settings & Configuration Module

#### 1.11.1 Company Settings
- **REQ-WEB-SET-001**: Configure company information:
  - Company name
  - Logo
  - Address
  - Contact details
  - Tax ID
  - Registration numbers
- **REQ-WEB-SET-002**: Set company timezone
- **REQ-WEB-SET-003**: Configure default currency
- **REQ-WEB-SET-004**: Set fiscal year start
- **REQ-WEB-SET-005**: Configure working days
- **REQ-WEB-SET-006**: Set public holidays

#### 1.11.2 User Management
- **REQ-WEB-SET-007**: List all users with:
  - Name
  - Email
  - Role
  - Status
  - Last login
- **REQ-WEB-SET-008**: Create new users
- **REQ-WEB-SET-009**: Edit user details
- **REQ-WEB-SET-010**: Deactivate/activate users
- **REQ-WEB-SET-011**: Reset user passwords
- **REQ-WEB-SET-012**: View user activity logs

#### 1.11.3 Role Management
- **REQ-WEB-SET-013**: List all roles
- **REQ-WEB-SET-014**: Create custom roles
- **REQ-WEB-SET-015**: Edit role permissions
- **REQ-WEB-SET-016**: Clone existing roles
- **REQ-WEB-SET-017**: Delete roles (with safeguards)
- **REQ-WEB-SET-018**: Assign roles to users

#### 1.11.4 Permission Management
- **REQ-WEB-SET-019**: Display permission matrix (roles × permissions)
- **REQ-WEB-SET-020**: Support granular permissions for:
  - View
  - Create
  - Edit
  - Delete
  - Approve
  - Export
- **REQ-WEB-SET-021**: Apply permissions by module
- **REQ-WEB-SET-022**: Test permissions before applying

#### 1.11.5 Department Management
- **REQ-WEB-SET-023**: List all departments
- **REQ-WEB-SET-024**: Create new departments
- **REQ-WEB-SET-025**: Edit department details:
  - Name
  - Code
  - Manager
  - Parent department
- **REQ-WEB-SET-026**: Delete departments (with checks)
- **REQ-WEB-SET-027**: Display department hierarchy

#### 1.11.6 Job Title Management
- **REQ-WEB-SET-028**: List all job titles
- **REQ-WEB-SET-029**: Create new job titles
- **REQ-WEB-SET-030**: Edit job title details:
  - Title name
  - Job level
  - Department
  - Description
- **REQ-WEB-SET-031**: Delete job titles (with checks)

#### 1.11.7 Leave Types Configuration
- **REQ-WEB-SET-032**: Configure leave types:
  - Name
  - Annual entitlement
  - Carry forward rules
  - Requires approval
  - Requires documentation
  - Paid/Unpaid
- **REQ-WEB-SET-033**: Set leave accrual rules
- **REQ-WEB-SET-034**: Configure leave restrictions

#### 1.11.8 Payroll Settings
- **REQ-WEB-SET-035**: Configure salary components
- **REQ-WEB-SET-036**: Set tax rates
- **REQ-WEB-SET-037**: Configure GOSI rates
- **REQ-WEB-SET-038**: Set overtime rates
- **REQ-WEB-SET-039**: Configure loan deduction rules
- **REQ-WEB-SET-040**: Set payroll processing schedule

#### 1.11.9 Integration Settings
- **REQ-WEB-SET-041**: Configure Hailaman.ai integration:
  - API credentials
  - Webhook URL
  - Sync frequency
- **REQ-WEB-SET-042**: Configure email service (SendGrid/Resend)
- **REQ-WEB-SET-043**: Configure SMS service (Twilio)
- **REQ-WEB-SET-044**: Configure payment gateway
- **REQ-WEB-SET-045**: Configure storage service (AWS S3/MinIO)
- **REQ-WEB-SET-046**: Test integrations

#### 1.11.10 Notification Settings
- **REQ-WEB-SET-047**: Configure notification preferences:
  - Email notifications
  - SMS notifications
  - In-app notifications
  - Push notifications
- **REQ-WEB-SET-048**: Set notification templates
- **REQ-WEB-SET-049**: Configure notification triggers
- **REQ-WEB-SET-050**: Allow users to customize their notification preferences

#### 1.11.11 Audit Logs
- **REQ-WEB-SET-051**: Display system audit logs with:
  - User
  - Action
  - Module
  - Timestamp
  - IP address
  - Details
- **REQ-WEB-SET-052**: Filter logs by user, module, date
- **REQ-WEB-SET-053**: Search logs
- **REQ-WEB-SET-054**: Export logs
- **REQ-WEB-SET-055**: Retain logs for 90 days minimum

### 1.12 Notifications Module

#### 1.12.1 Notification Center
- **REQ-WEB-NOT-001**: Display notification bell icon in header
- **REQ-WEB-NOT-002**: Show unread notification count badge
- **REQ-WEB-NOT-003**: Display notification dropdown with:
  - Recent notifications (last 10)
  - Notification icon/avatar
  - Title
  - Description
  - Timestamp
  - Read/unread indicator
- **REQ-WEB-NOT-004**: Mark notifications as read on click
- **REQ-WEB-NOT-005**: Provide "Mark all as read" option
- **REQ-WEB-NOT-006**: Link to full notifications page

#### 1.12.2 Notifications Page
- **REQ-WEB-NOT-007**: Display all notifications with pagination
- **REQ-WEB-NOT-008**: Filter by:
  - All
  - Unread
  - Type (Leave, Payroll, Performance, etc.)
- **REQ-WEB-NOT-009**: Support bulk actions (mark as read, delete)
- **REQ-WEB-NOT-010**: Show notification details on click
- **REQ-WEB-NOT-011**: Auto-delete notifications older than 90 days

#### 1.12.3 Notification Types
- **REQ-WEB-NOT-012**: Support notification categories:
  - Leave request submitted/approved/rejected
  - Attendance issues (late, absent)
  - Payslip available
  - Performance review assigned/completed
  - Training enrollment/reminder
  - Document expiry warning
  - Birthday/anniversary
  - System announcements
  - Task assignments
  - Approvals pending

### 1.13 Employee Self-Service Portal

#### 1.13.1 My Profile
- **REQ-WEB-ESS-001**: Display employee profile summary
- **REQ-WEB-ESS-002**: Allow editing personal information (based on permissions)
- **REQ-WEB-ESS-003**: Update contact information
- **REQ-WEB-ESS-004**: Upload/update profile photo
- **REQ-WEB-ESS-005**: Update emergency contacts
- **REQ-WEB-ESS-006**: View employment history
- **REQ-WEB-ESS-007**: View manager and team members

#### 1.13.2 My Documents
- **REQ-WEB-ESS-008**: View all personal documents
- **REQ-WEB-ESS-009**: Download documents
- **REQ-WEB-ESS-010**: Upload requested documents
- **REQ-WEB-ESS-011**: Track document approval status

#### 1.13.3 My Payslips
- **REQ-WEB-ESS-012**: View payslip history (last 12 months)
- **REQ-WEB-ESS-013**: Download individual payslips
- **REQ-WEB-ESS-014**: View salary breakdown
- **REQ-WEB-ESS-015**: View year-to-date earnings

#### 1.13.4 My Attendance
- **REQ-WEB-ESS-016**: View attendance calendar
- **REQ-WEB-ESS-017**: View attendance statistics
- **REQ-WEB-ESS-018**: Check-in/check-out
- **REQ-WEB-ESS-019**: View work hours summary

#### 1.13.5 My Leaves
- **REQ-WEB-ESS-020**: View leave balance
- **REQ-WEB-ESS-021**: Request leave
- **REQ-WEB-ESS-022**: View leave history
- **REQ-WEB-ESS-023**: Cancel pending leave requests
- **REQ-WEB-ESS-024**: View team leave calendar

#### 1.13.6 My Performance
- **REQ-WEB-ESS-025**: View performance review history
- **REQ-WEB-ESS-026**: Complete self-assessments
- **REQ-WEB-ESS-027**: View goals and OKRs
- **REQ-WEB-ESS-028**: Update goal progress
- **REQ-WEB-ESS-029**: View feedback received

#### 1.13.7 My Training
- **REQ-WEB-ESS-030**: View enrolled courses
- **REQ-WEB-ESS-031**: Browse course catalog
- **REQ-WEB-ESS-032**: Enroll in courses
- **REQ-WEB-ESS-033**: View certifications
- **REQ-WEB-ESS-034**: Track learning progress

#### 1.13.8 Requests & Approvals
- **REQ-WEB-ESS-035**: Submit various requests:
  - Salary certificate
  - Experience letter
  - Loan/advance
  - Work from home
  - Equipment request
- **REQ-WEB-ESS-036**: Track request status
- **REQ-WEB-ESS-037**: View approval workflow
- **REQ-WEB-ESS-038**: Cancel pending requests

#### 1.13.9 Team Directory
- **REQ-WEB-ESS-039**: View company directory
- **REQ-WEB-ESS-040**: Search employees
- **REQ-WEB-ESS-041**: View colleague profiles
- **REQ-WEB-ESS-042**: View organizational chart

### 1.14 Search & Global Features

#### 1.14.1 Global Search
- **REQ-WEB-GLOB-001**: Provide global search bar in header
- **REQ-WEB-GLOB-002**: Search across:
  - Employees
  - Documents
  - Policies
  - Help articles
- **REQ-WEB-GLOB-003**: Display search suggestions (autocomplete)
- **REQ-WEB-GLOB-004**: Show recent searches
- **REQ-WEB-GLOB-005**: Filter results by type
- **REQ-WEB-GLOB-006**: Keyboard shortcut to focus search (Cmd+K / Ctrl+K)

#### 1.14.2 Quick Actions
- **REQ-WEB-GLOB-007**: Provide command palette (Cmd+K)
- **REQ-WEB-GLOB-008**: Quick navigation to any page
- **REQ-WEB-GLOB-009**: Quick actions (Create Employee, Request Leave, etc.)
- **REQ-WEB-GLOB-010**: Display keyboard shortcuts

#### 1.14.3 Help & Support
- **REQ-WEB-GLOB-011**: Provide help icon in header
- **REQ-WEB-GLOB-012**: Display help center with:
  - FAQs
  - User guides
  - Video tutorials
  - Contact support
- **REQ-WEB-GLOB-013**: Context-sensitive help (help for current page)
- **REQ-WEB-GLOB-014**: Submit support tickets
- **REQ-WEB-GLOB-015**: Live chat support (optional)

#### 1.14.4 User Preferences
- **REQ-WEB-GLOB-016**: Allow users to set preferences:
  - Language (English/Arabic)
  - Theme (Light/Dark/Auto)
  - Date format
  - Time format
  - Number format
  - Notification preferences
- **REQ-WEB-GLOB-017**: Remember user preferences across sessions
- **REQ-WEB-GLOB-018**: Sync preferences across devices

---

## 2️⃣ Non-Functional Requirements - Web Application

### 2.1 Performance

- **REQ-WEB-NFR-001**: Initial page load time < 2 seconds
- **REQ-WEB-NFR-002**: API response time < 200ms (p95)
- **REQ-WEB-NFR-003**: Time to interactive (TTI) < 3 seconds
- **REQ-WEB-NFR-004**: Support 10,000 concurrent users
- **REQ-WEB-NFR-005**: Support 100 concurrent sessions per user
- **REQ-WEB-NFR-006**: Database query optimization (indexed queries)
- **REQ-WEB-NFR-007**: Implement lazy loading for components
- **REQ-WEB-NFR-008**: Implement infinite scroll for large lists
- **REQ-WEB-NFR-009**: Bundle size optimization (< 500KB initial JS)
- **REQ-WEB-NFR-010**: Image optimization (WebP, lazy loading)

### 2.2 User Experience (UX)

- **REQ-WEB-NFR-011**: Responsive design for all screen sizes:
  - Desktop (1920px+)
  - Laptop (1366px - 1919px)
  - Tablet (768px - 1365px)
  - Mobile (320px - 767px)
- **REQ-WEB-NFR-012**: Consistent UI/UX across all pages
- **REQ-WEB-NFR-013**: Intuitive navigation (max 3 clicks to any feature)
- **REQ-WEB-NFR-014**: Loading indicators for all async operations
- **REQ-WEB-NFR-015**: Error messages must be user-friendly
- **REQ-WEB-NFR-016**: Success confirmations for all actions
- **REQ-WEB-NFR-017**: Form validation with inline errors
- **REQ-WEB-NFR-018**: Auto-save for long forms
- **REQ-WEB-NFR-019**: Keyboard navigation support
- **REQ-WEB-NFR-020**: Focus management for accessibility

### 2.3 Localization & Internationalization

- **REQ-WEB-NFR-021**: Full support for Arabic and English
- **REQ-WEB-NFR-022**: RTL (Right-to-Left) layout for Arabic
- **REQ-WEB-NFR-023**: Date formatting based on locale
- **REQ-WEB-NFR-024**: Number formatting based on locale
- **REQ-WEB-NFR-025**: Currency formatting (SAR)
- **REQ-WEB-NFR-026**: Translate all UI text
- **REQ-WEB-NFR-027**: Translate error messages
- **REQ-WEB-NFR-028**: Translate email templates
- **REQ-WEB-NFR-029**: Support language switching without reload

### 2.4 Accessibility

- **REQ-WEB-NFR-030**: WCAG 2.1 Level AA compliance
- **REQ-WEB-NFR-031**: Screen reader support
- **REQ-WEB-NFR-032**: Keyboard navigation for all features
- **REQ-WEB-NFR-033**: ARIA labels and roles
- **REQ-WEB-NFR-034**: Sufficient color contrast (4.5:1 for text)
- **REQ-WEB-NFR-035**: Resizable text (up to 200%)
- **REQ-WEB-NFR-036**: Focus indicators
- **REQ-WEB-NFR-037**: Alt text for images
- **REQ-WEB-NFR-038**: Form labels and instructions
- **REQ-WEB-NFR-039**: Skip to main content link

### 2.5 Security

#### 2.5.1 Authentication & Authorization
- **REQ-WEB-NFR-040**: HTTPS only (TLS 1.3)
- **REQ-WEB-NFR-041**: HTTP Strict Transport Security (HSTS)
- **REQ-WEB-NFR-042**: JWT token authentication
- **REQ-WEB-NFR-043**: Secure token storage (httpOnly cookies)
- **REQ-WEB-NFR-044**: Token refresh mechanism
- **REQ-WEB-NFR-045**: Session timeout after 15 minutes inactivity
- **REQ-WEB-NFR-046**: Rate limiting on login (5 attempts per 15 minutes)
- **REQ-WEB-NFR-047**: Account lockout after failed attempts
- **REQ-WEB-NFR-048**: Password strength enforcement
- **REQ-WEB-NFR-049**: MFA enforcement for admins

#### 2.5.2 Data Protection
- **REQ-WEB-NFR-050**: XSS protection (Content Security Policy)
- **REQ-WEB-NFR-051**: CSRF protection
- **REQ-WEB-NFR-052**: SQL injection prevention (parameterized queries)
- **REQ-WEB-NFR-053**: Input sanitization and validation
- **REQ-WEB-NFR-054**: Output encoding
- **REQ-WEB-NFR-055**: Secure file upload (type/size validation)
- **REQ-WEB-NFR-056**: Prevent directory traversal
- **REQ-WEB-NFR-057**: Clickjacking protection (X-Frame-Options)
- **REQ-WEB-NFR-058**: Data encryption in transit (TLS)
- **REQ-WEB-NFR-059**: Data encryption at rest (database level)
- **REQ-WEB-NFR-060**: PII field-level encryption (salary, national ID)

#### 2.5.3 Audit & Compliance
- **REQ-WEB-NFR-061**: Log all user actions
- **REQ-WEB-NFR-062**: Log all data modifications
- **REQ-WEB-NFR-063**: Log authentication events
- **REQ-WEB-NFR-064**: Store audit logs for 90 days minimum
- **REQ-WEB-NFR-065**: GDPR compliance (data export, deletion)
- **REQ-WEB-NFR-066**: Saudi data residency compliance
- **REQ-WEB-NFR-067**: Cookie consent banner
- **REQ-WEB-NFR-068**: Privacy policy display
- **REQ-WEB-NFR-069**: Terms of service acceptance

### 2.6 Browser Compatibility

- **REQ-WEB-NFR-070**: Chrome 90+ (full support)
- **REQ-WEB-NFR-071**: Firefox 88+ (full support)
- **REQ-WEB-NFR-072**: Safari 14+ (full support)
- **REQ-WEB-NFR-073**: Edge 90+ (full support)
- **REQ-WEB-NFR-074**: Graceful degradation for older browsers
- **REQ-WEB-NFR-075**: Display browser compatibility warning

### 2.7 Reliability & Availability

- **REQ-WEB-NFR-076**: 99.9% uptime SLA
- **REQ-WEB-NFR-077**: Graceful error handling
- **REQ-WEB-NFR-078**: Offline support for critical features (via PWA)
- **REQ-WEB-NFR-079**: Auto-retry for failed API calls
- **REQ-WEB-NFR-080**: Fallback UI for errors
- **REQ-WEB-NFR-081**: Health check endpoint
- **REQ-WEB-NFR-082**: Error boundary components (React)

### 2.8 Scalability

- **REQ-WEB-NFR-083**: Horizontal scaling support
- **REQ-WEB-NFR-084**: CDN for static assets
- **REQ-WEB-NFR-085**: Client-side caching (React Query)
- **REQ-WEB-NFR-086**: API response caching
- **REQ-WEB-NFR-087**: Pagination for large datasets
- **REQ-WEB-NFR-088**: Virtual scrolling for long lists
- **REQ-WEB-NFR-089**: Code splitting and lazy loading
- **REQ-WEB-NFR-090**: Optimistic UI updates

### 2.9 Monitoring & Analytics

- **REQ-WEB-NFR-091**: Real User Monitoring (RUM)
- **REQ-WEB-NFR-092**: Error tracking (Sentry)
- **REQ-WEB-NFR-093**: Performance monitoring (Core Web Vitals)
- **REQ-WEB-NFR-094**: Usage analytics
- **REQ-WEB-NFR-095**: API call tracking
- **REQ-WEB-NFR-096**: User behavior tracking
- **REQ-WEB-NFR-097**: Session recording (optional, with consent)

### 2.10 SEO & Meta Tags

- **REQ-WEB-NFR-098**: Proper HTML semantics
- **REQ-WEB-NFR-099**: Meta tags (title, description) for each page
- **REQ-WEB-NFR-100**: Open Graph tags
- **REQ-WEB-NFR-101**: Sitemap.xml
- **REQ-WEB-NFR-102**: Robots.txt
- **REQ-WEB-NFR-103**: Structured data (JSON-LD)

---

## 3️⃣ Technical Stack - Web Application

### 3.1 Frontend Technologies

#### 3.1.1 Core Framework
- **REQ-WEB-TECH-001**: Next.js 15 with App Router
- **REQ-WEB-TECH-002**: React 19+
- **REQ-WEB-TECH-003**: TypeScript 5.3+ (strict mode)

#### 3.1.2 Styling
- **REQ-WEB-TECH-004**: Tailwind CSS 3.4+
- **REQ-WEB-TECH-005**: CSS Modules (for component-specific styles)
- **REQ-WEB-TECH-006**: PostCSS

#### 3.1.3 UI Components
- **REQ-WEB-TECH-007**: shadcn/ui (Radix UI primitives)
- **REQ-WEB-TECH-008**: Headless UI (for complex components)
- **REQ-WEB-TECH-009**: Lucide React (icons)

#### 3.1.4 State Management
- **REQ-WEB-TECH-010**: Zustand (global state)
- **REQ-WEB-TECH-011**: React Context (theme, auth)
- **REQ-WEB-TECH-012**: React Query / TanStack Query (server state)

#### 3.1.5 Forms & Validation
- **REQ-WEB-TECH-013**: React Hook Form
- **REQ-WEB-TECH-014**: Zod (schema validation)

#### 3.1.6 Data Tables
- **REQ-WEB-TECH-015**: TanStack Table (React Table v8)
- **REQ-WEB-TECH-016**: Custom pagination component

#### 3.1.7 Charts & Visualization
- **REQ-WEB-TECH-017**: Recharts (primary)
- **REQ-WEB-TECH-018**: Apache ECharts (for complex charts)

#### 3.1.8 Date & Time
- **REQ-WEB-TECH-019**: date-fns (date manipulation)
- **REQ-WEB-TECH-020**: react-day-picker (date picker)

#### 3.1.9 File Upload
- **REQ-WEB-TECH-021**: react-dropzone
- **REQ-WEB-TECH-022**: Custom upload component with progress

#### 3.1.10 Internationalization
- **REQ-WEB-TECH-023**: next-intl
- **REQ-WEB-TECH-024**: JSON translation files

#### 3.1.11 Notifications
- **REQ-WEB-TECH-025**: react-hot-toast
- **REQ-WEB-TECH-026**: Custom notification system

#### 3.1.12 PDF Generation
- **REQ-WEB-TECH-027**: react-pdf or jsPDF
- **REQ-WEB-TECH-028**: html2canvas (for screenshots)

### 3.2 API Communication

- **REQ-WEB-TECH-029**: tRPC (type-safe API calls)
- **REQ-WEB-TECH-030**: Axios (HTTP client fallback)
- **REQ-WEB-TECH-031**: Socket.IO client (WebSocket)
- **REQ-WEB-TECH-032**: SWR or React Query for caching

### 3.3 Development Tools

- **REQ-WEB-TECH-033**: ESLint (code linting)
- **REQ-WEB-TECH-034**: Prettier (code formatting)
- **REQ-WEB-TECH-035**: Husky (Git hooks)
- **REQ-WEB-TECH-036**: lint-staged
- **REQ-WEB-TECH-037**: Commitlint (conventional commits)

### 3.4 Testing

- **REQ-WEB-TECH-038**: Jest (unit tests)
- **REQ-WEB-TECH-039**: React Testing Library
- **REQ-WEB-TECH-040**: Playwright (E2E tests)
- **REQ-WEB-TECH-041**: MSW (Mock Service Worker)

### 3.5 Build & Deployment

- **REQ-WEB-TECH-042**: Turborepo (monorepo build system)
- **REQ-WEB-TECH-043**: PNPM (package manager)
- **REQ-WEB-TECH-044**: Docker (containerization)
- **REQ-WEB-TECH-045**: GitHub Actions (CI/CD)
- **REQ-WEB-TECH-046**: Vercel or self-hosted deployment

---

## 4️⃣ UI/UX Design Requirements

### 4.1 Design System

- **REQ-WEB-UI-001**: Consistent color palette:
  - Primary colors
  - Secondary colors
  - Success, Warning, Error, Info colors
  - Neutral grays
  - Dark mode variants
- **REQ-WEB-UI-002**: Typography scale (8 levels)
- **REQ-WEB-UI-003**: Spacing scale (based on 4px/8px grid)
- **REQ-WEB-UI-004**: Border radius standards
- **REQ-WEB-UI-005**: Shadow elevation system
- **REQ-WEB-UI-006**: Component library documentation

### 4.2 Layout

- **REQ-WEB-UI-007**: Sidebar navigation (collapsible)
- **REQ-WEB-UI-008**: Top header with:
  - Logo
  - Global search
  - Notifications
  - User menu
- **REQ-WEB-UI-009**: Breadcrumb navigation
- **REQ-WEB-UI-010**: Page title and actions section
- **REQ-WEB-UI-011**: Main content area with proper spacing
- **REQ-WEB-UI-012**: Footer with links and copyright

### 4.3 Components

#### 4.3.1 Navigation
- **REQ-WEB-UI-013**: Multi-level sidebar menu
- **REQ-WEB-UI-014**: Active state indicators
- **REQ-WEB-UI-015**: Icons for menu items
- **REQ-WEB-UI-016**: Tooltips for collapsed menu

#### 4.3.2 Forms
- **REQ-WEB-UI-017**: Consistent form field styles
- **REQ-WEB-UI-018**: Inline validation
- **REQ-WEB-UI-019**: Required field indicators
- **REQ-WEB-UI-020**: Helper text support
- **REQ-WEB-UI-021**: Disabled state styling
- **REQ-WEB-UI-022**: Multi-step form progress indicator

#### 4.3.3 Tables
- **REQ-WEB-UI-023**: Sortable columns
- **REQ-WEB-UI-024**: Filterable columns
- **REQ-WEB-UI-025**: Row actions menu
- **REQ-WEB-UI-026**: Bulk selection
- **REQ-WEB-UI-027**: Pagination controls
- **REQ-WEB-UI-028**: Empty state design
- **REQ-WEB-UI-029**: Loading skeleton

#### 4.3.4 Cards
- **REQ-WEB-UI-030**: Stat cards with icons
- **REQ-WEB-UI-031**: Hover effects
- **REQ-WEB-UI-032**: Click actions
- **REQ-WEB-UI-033**: Card variants (outlined, filled)

#### 4.3.5 Modals & Dialogs
- **REQ-WEB-UI-034**: Confirmation dialogs
- **REQ-WEB-UI-035**: Form modals
- **REQ-WEB-UI-036**: Fullscreen modals for complex forms
- **REQ-WEB-UI-037**: Drawer/Slide-over for details
- **REQ-WEB-UI-038**: Modal backdrop blur

#### 4.3.6 Buttons
- **REQ-WEB-UI-039**: Primary, secondary, ghost variants
- **REQ-WEB-UI-040**: Size variants (sm, md, lg)
- **REQ-WEB-UI-041**: Icon buttons
- **REQ-WEB-UI-042**: Button groups
- **REQ-WEB-UI-043**: Loading state with spinner
- **REQ-WEB-UI-044**: Disabled state

#### 4.3.7 Badges & Tags
- **REQ-WEB-UI-045**: Status badges (success, warning, error)
- **REQ-WEB-UI-046**: Count badges
- **REQ-WEB-UI-047**: Removable tags

#### 4.3.8 Charts
- **REQ-WEB-UI-048**: Consistent chart color scheme
- **REQ-WEB-UI-049**: Interactive tooltips
- **REQ-WEB-UI-050**: Legend toggle
- **REQ-WEB-UI-051**: Export chart options

### 4.4 Responsive Behavior

- **REQ-WEB-UI-052**: Mobile: Bottom navigation
- **REQ-WEB-UI-053**: Mobile: Hamburger menu
- **REQ-WEB-UI-054**: Tablet: Persistent sidebar (collapsible)
- **REQ-WEB-UI-055**: Desktop: Full sidebar
- **REQ-WEB-UI-056**: Touch-friendly tap targets (min 44px)
- **REQ-WEB-UI-057**: Swipe gestures for mobile (optional)

### 4.5 Animations & Transitions

- **REQ-WEB-UI-058**: Page transition animations
- **REQ-WEB-UI-059**: Modal enter/exit animations
- **REQ-WEB-UI-060**: Loading animations
- **REQ-WEB-UI-061**: Micro-interactions (button clicks, etc.)
- **REQ-WEB-UI-062**: Skeleton loaders
- **REQ-WEB-UI-063**: Reduced motion support (prefers-reduced-motion)

### 4.6 Dark Mode

- **REQ-WEB-UI-064**: Full dark mode support
- **REQ-WEB-UI-065**: System preference detection
- **REQ-WEB-UI-066**: Manual toggle
- **REQ-WEB-UI-067**: Smooth theme transition
- **REQ-WEB-UI-068**: Proper contrast in dark mode

---

## 5️⃣ Integration Requirements - Web Application

### 5.1 Backend API Integration

- **REQ-WEB-INT-001**: Connect to Auth Service (port 3001)
- **REQ-WEB-INT-002**: Connect to Employee Service (port 3002)
- **REQ-WEB-INT-003**: Connect to Payroll Service (port 3003)
- **REQ-WEB-INT-004**: Connect to Attendance Service (port 3004)
- **REQ-WEB-INT-005**: Connect to Performance Service (port 3005)
- **REQ-WEB-INT-006**: Connect to Recruitment Service (port 3006)
- **REQ-WEB-INT-007**: Connect to Benefits Service (port 3007)
- **REQ-WEB-INT-008**: Connect to Training Service (port 3008)
- **REQ-WEB-INT-009**: Connect to Analytics Service (port 3009)

### 5.2 Real-time Communication

- **REQ-WEB-INT-010**: WebSocket connection for real-time notifications
- **REQ-WEB-INT-011**: Real-time attendance feed
- **REQ-WEB-INT-012**: Real-time approval updates
- **REQ-WEB-INT-013**: Reconnection handling

### 5.3 File Storage

- **REQ-WEB-INT-014**: Upload files to S3/MinIO
- **REQ-WEB-INT-015**: Generate presigned URLs for downloads
- **REQ-WEB-INT-016**: Display file previews
- **REQ-WEB-INT-017**: Handle upload progress

### 5.4 External Services

- **REQ-WEB-INT-018**: Google OAuth integration
- **REQ-WEB-INT-019**: Microsoft Azure AD integration
- **REQ-WEB-INT-020**: Analytics tracking (Google Analytics/Mixpanel)
- **REQ-WEB-INT-021**: Error tracking (Sentry)

---

## 6️⃣ Testing Requirements

### 6.1 Unit Testing

- **REQ-WEB-TEST-001**: 80%+ code coverage
- **REQ-WEB-TEST-002**: Test all utility functions
- **REQ-WEB-TEST-003**: Test custom hooks
- **REQ-WEB-TEST-004**: Test component rendering
- **REQ-WEB-TEST-005**: Test user interactions

### 6.2 Integration Testing

- **REQ-WEB-TEST-006**: Test API integrations
- **REQ-WEB-TEST-007**: Test authentication flows
- **REQ-WEB-TEST-008**: Test form submissions
- **REQ-WEB-TEST-009**: Test data fetching

### 6.3 End-to-End Testing

- **REQ-WEB-TEST-010**: Test critical user journeys:
  - Login
  - Create employee
  - Request leave
  - Run payroll
  - Submit performance review
- **REQ-WEB-TEST-011**: Test responsive layouts
- **REQ-WEB-TEST-012**: Test browser compatibility
- **REQ-WEB-TEST-013**: Test accessibility

### 6.4 Performance Testing

- **REQ-WEB-TEST-014**: Lighthouse score > 90
- **REQ-WEB-TEST-015**: Load time testing
- **REQ-WEB-TEST-016**: Bundle size monitoring
- **REQ-WEB-TEST-017**: Memory leak detection

---

## 7️⃣ Deployment & DevOps

### 7.1 Build Process

- **REQ-WEB-DEV-001**: Automated builds with Turborepo
- **REQ-WEB-DEV-002**: Environment-specific builds (dev, staging, prod)
- **REQ-WEB-DEV-003**: Build optimization (minification, tree-shaking)
- **REQ-WEB-DEV-004**: Source maps for production debugging

### 7.2 CI/CD Pipeline

- **REQ-WEB-DEV-005**: GitHub Actions workflows
- **REQ-WEB-DEV-006**: Automated testing on PR
- **REQ-WEB-DEV-007**: Automated deployment on merge
- **REQ-WEB-DEV-008**: Deployment preview for PRs
- **REQ-WEB-DEV-009**: Rollback capability

### 7.3 Environments

- **REQ-WEB-DEV-010**: Development environment
- **REQ-WEB-DEV-011**: Staging environment (production-like)
- **REQ-WEB-DEV-012**: Production environment
- **REQ-WEB-DEV-013**: Environment variables management

### 7.4 Monitoring

- **REQ-WEB-DEV-014**: Application performance monitoring
- **REQ-WEB-DEV-015**: Error tracking and alerts
- **REQ-WEB-DEV-016**: Uptime monitoring
- **REQ-WEB-DEV-017**: User analytics
- **REQ-WEB-DEV-018**: Log aggregation

---

## 8️⃣ Documentation Requirements

- **REQ-WEB-DOC-001**: User documentation (end-user guide)
- **REQ-WEB-DOC-002**: Admin documentation
- **REQ-WEB-DOC-003**: Developer documentation
- **REQ-WEB-DOC-004**: Component library (Storybook)
- **REQ-WEB-DOC-005**: API documentation
- **REQ-WEB-DOC-006**: Deployment guide
- **REQ-WEB-DOC-007**: Troubleshooting guide
- **REQ-WEB-DOC-008**: Release notes

---

## 9️⃣ Success Criteria

### 9.1 Functional Completeness
- ✅ All modules implemented and working
- ✅ All user roles supported
- ✅ All workflows functional
- ✅ All integrations working

### 9.2 Performance
- ✅ Page load < 2 seconds
- ✅ API response < 200ms
- ✅ Lighthouse score > 90
- ✅ Zero critical performance issues

### 9.3 Quality
- ✅ Test coverage > 80%
- ✅ Zero critical bugs
- ✅ < 5 high-priority bugs
- ✅ Accessibility AA compliant

### 9.4 User Satisfaction
- ✅ User acceptance testing passed
- ✅ Positive user feedback (> 4/5)
- ✅ Intuitive and easy to use
- ✅ Training completed successfully

---

**End of Document**