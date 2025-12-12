# @hris/ui

Comprehensive UI component library for the HRIS Platform with **Arabic RTL support** by default.

## Overview

Built with modern technologies for a production-ready Arabic-first design system:

- **Radix UI** - Accessible primitives
- **Tailwind CSS** - Utility-first styling with RTL support
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **TanStack Table** - Powerful data tables
- **Lucide React** - Beautiful icons
- **Cairo Font** - Professional Arabic typography
- **Sonner** - Modern toast notifications (Phase 2.1)
- **react-dropzone** - File upload with drag-and-drop (Phase 2.1)
- **cmdk** - Command palette (Phase 2.1)

### Phase 2.1 Enhancements

This package has been enhanced with additional components and features:

**Form Components:**
- ✅ Checkbox, RadioGroup, Switch
- ✅ FileUpload with drag-and-drop
- ✅ Textarea with auto-resize and character count
- ✅ TimePicker with Arabic AM/PM (ص/م)

**Data Display:**
- ✅ Stat Card for dashboard statistics
- ✅ Enhanced Button with icon support (iconStart/iconEnd)

**Feedback Components:**
- ✅ AlertDialog for confirmations
- ✅ Sheet (side panel)
- ✅ Tooltip with RTL positioning
- ✅ Popover component

**Navigation:**
- ✅ Tabs (horizontal/vertical)

**Utility Components:**
- ✅ Skeleton with variants (text, card, avatar, circle)
- ✅ ScrollArea with RTL support
- ✅ ErrorBoundary with Arabic fallback
- ✅ Container with responsive max-widths
- ✅ Divider (horizontal/vertical with optional text)

**Translations:**
- ✅ Comprehensive Arabic translations object
- ✅ Helper function for dynamic text with parameters

## Installation

```bash
# Already available as workspace dependency
import { Button, Card, DataTable } from '@hris/ui';
```

## RTL Support

All components use **logical properties** for proper RTL layout:

- `ps` / `pe` (padding-start/end) instead of `pl` / `pr`
- `ms` / `me` (margin-start/end) instead of `ml` / `mr`
- `start` / `end` instead of `left` / `right`

## Components

### Basic Components

#### Button

Multi-variant button with loading state support:

```tsx
import { Button } from '@hris/ui';

<Button variant="default">حفظ</Button>
<Button variant="destructive">حذف</Button>
<Button variant="outline">إلغاء</Button>
<Button variant="ghost">عرض المزيد</Button>
<Button variant="link">رابط</Button>
<Button size="sm">صغير</Button>
<Button size="lg">كبير</Button>
<Button loading>جار التحميل...</Button>
```

#### Input

Accessible input field:

```tsx
import { Input, Label } from '@hris/ui';

<div>
  <Label htmlFor="email">البريد الإلكتروني</Label>
  <Input id="email" type="email" placeholder="example@hris.sa" />
</div>
```

#### Select

Dropdown select with RTL support:

```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@hris/ui';

<Select>
  <SelectTrigger>
    <SelectValue placeholder="اختر القسم" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="hr">الموارد البشرية</SelectItem>
    <SelectItem value="it">تقنية المعلومات</SelectItem>
    <SelectItem value="finance">المالية</SelectItem>
  </SelectContent>
</Select>
```

#### Badge

Status indicators:

```tsx
import { Badge } from '@hris/ui';

<Badge variant="default">نشط</Badge>
<Badge variant="secondary">معلق</Badge>
<Badge variant="destructive">ملغي</Badge>
<Badge variant="outline">مسودة</Badge>
```

#### Avatar

User profile images:

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@hris/ui';

<Avatar>
  <AvatarImage src="/avatar.jpg" alt="أحمد محمد" />
  <AvatarFallback>أم</AvatarFallback>
</Avatar>
```

### Dialog & Toast

#### Dialog

Modal dialogs:

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@hris/ui';

<Dialog>
  <DialogTrigger asChild>
    <Button>فتح</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>تأكيد الحذف</DialogTitle>
      <DialogDescription>
        هل أنت متأكد من حذف هذا العنصر؟ لا يمكن التراجع عن هذا الإجراء.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

#### Toast

Notification messages:

```tsx
import { ToastProvider, ToastViewport } from '@hris/ui';

// In your app root
<ToastProvider>
  {children}
  <ToastViewport />
</ToastProvider>
```

### Form Components

Integrated with React Hook Form and Zod:

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, Input, Button } from '@hris/ui';

const formSchema = z.object({
  name: z.string().min(2, 'الاسم يجب أن يكون حرفين على الأقل'),
  email: z.string().email('بريد إلكتروني غير صالح'),
});

function MyForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الاسم</FormLabel>
              <FormControl>
                <Input placeholder="أدخل الاسم" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">حفظ</Button>
      </form>
    </Form>
  );
}
```

### Table & Card

#### Table

Basic HTML table with styling:

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@hris/ui';

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>الاسم</TableHead>
      <TableHead>البريد الإلكتروني</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>أحمد محمد</TableCell>
      <TableCell>ahmed@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

#### Card

Content containers:

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@hris/ui';

<Card>
  <CardHeader>
    <CardTitle>إحصائيات الموظفين</CardTitle>
    <CardDescription>عرض شامل للموظفين النشطين</CardDescription>
  </CardHeader>
  <CardContent>
    <p>إجمالي الموظفين: 150</p>
  </CardContent>
  <CardFooter>
    <Button>عرض التفاصيل</Button>
  </CardFooter>
</Card>
```

### Data Table

Powerful data table with TanStack Table:

```tsx
import { DataTable, DataTableColumnHeader } from '@hris/ui';
import { ColumnDef } from '@tanstack/react-table';

const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="الاسم" />
    ),
  },
  {
    accessorKey: 'email',
    header: 'البريد الإلكتروني',
  },
];

<DataTable
  columns={columns}
  data={employees}
  searchKey="name"
  searchPlaceholder="ابحث عن موظف..."
  onRowClick={(row) => console.log(row)}
/>
```

Features:
- Server-side pagination
- Sorting
- Filtering
- Row selection
- Column visibility toggle
- Export functionality (placeholder)

### Date Picker

Calendar with Arabic locale:

```tsx
import { DatePicker } from '@hris/ui';

<DatePicker
  value={date}
  onChange={setDate}
  placeholder="اختر التاريخ"
/>
```

### Form Components (Phase 2.1)

#### Checkbox

```tsx
import { Checkbox, Label } from '@hris/ui';

<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">أوافق على الشروط والأحكام</Label>
</div>
```

#### RadioGroup

```tsx
import { RadioGroup, RadioGroupItem, Label } from '@hris/ui';

<RadioGroup defaultValue="option1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option1" id="r1" />
    <Label htmlFor="r1">الخيار الأول</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option2" id="r2" />
    <Label htmlFor="r2">الخيار الثاني</Label>
  </div>
</RadioGroup>
```

#### Switch

```tsx
import { Switch, Label } from '@hris/ui';

<div className="flex items-center gap-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">تفعيل الإشعارات</Label>
</div>
```

#### Textarea

```tsx
import { Textarea } from '@hris/ui';

<Textarea
  placeholder="اكتب ملاحظاتك هنا..."
  maxLength={500}
  showCharacterCount
  autoResize
  helperText="الحد الأقصى 500 حرف"
/>
```

#### FileUpload

Drag-and-drop file upload with validation:

```tsx
import { FileUpload } from '@hris/ui';

<FileUpload
  onChange={(files) => console.log(files)}
  maxSize={5 * 1024 * 1024} // 5MB
  maxFiles={3}
  multiple
  accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
  helperText="يمكنك رفع حتى 3 صور"
/>
```

#### TimePicker

```tsx
import { TimePicker } from '@hris/ui';

// 24-hour format
<TimePicker
  value="14:30"
  onChange={(time) => console.log(time)}
  format="24"
/>

// 12-hour format with Arabic AM/PM (ص/م)
<TimePicker
  value="02:30"
  onChange={(time) => console.log(time)}
  format="12"
  placeholder="اختر الوقت"
/>
```

### Data Display Components

#### Stat Card

Dashboard statistics card:

```tsx
import { StatCard } from '@hris/ui';
import { Users } from 'lucide-react';

<StatCard
  title="إجمالي الموظفين"
  value="1,234"
  description="في جميع الأقسام"
  icon={Users}
  trend="up"
  trendValue="+12% عن الشهر الماضي"
/>
```

### Feedback Components (Phase 2.1)

#### AlertDialog

Confirmation dialogs:

```tsx
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from '@hris/ui';

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">حذف</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>تأكيد الحذف</AlertDialogTitle>
      <AlertDialogDescription>
        هل أنت متأكد من حذف هذا العنصر؟ لا يمكن التراجع عن هذا الإجراء.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>إلغاء</AlertDialogCancel>
      <AlertDialogAction>تأكيد</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

#### Sheet

Side panel drawer:

```tsx
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@hris/ui';

<Sheet>
  <SheetTrigger asChild>
    <Button>فتح</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>الإعدادات</SheetTitle>
      <SheetDescription>قم بتعديل إعداداتك هنا</SheetDescription>
    </SheetHeader>
    {/* Content */}
  </SheetContent>
</Sheet>
```

#### Tooltip

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@hris/ui';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>مرر الماوس هنا</TooltipTrigger>
    <TooltipContent>
      <p>معلومات إضافية</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### Navigation Components (Phase 2.1)

#### Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@hris/ui';

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">الحساب</TabsTrigger>
    <TabsTrigger value="password">كلمة المرور</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    محتوى الحساب
  </TabsContent>
  <TabsContent value="password">
    محتوى كلمة المرور
  </TabsContent>
</Tabs>
```

### Loading Components

#### Loading Spinner

```tsx
import { LoadingSpinner, LoadingOverlay } from '@hris/ui';

<LoadingSpinner size="sm" />
<LoadingSpinner size="md" />
<LoadingSpinner size="lg" />

// Overlay
<div className="relative">
  <LoadingOverlay />
  <YourContent />
</div>
```

#### Empty State

```tsx
import { EmptyState } from '@hris/ui';

<EmptyState
  title="لا توجد بيانات"
  description="لم يتم العثور على أي سجلات. ابدأ بإضافة موظف جديد."
  action={{
    label: "إضافة موظف",
    onClick: () => navigate('/employees/new')
  }}
/>
```

#### Skeleton

Loading placeholders:

```tsx
import { Skeleton, SkeletonText, SkeletonCard, SkeletonAvatar } from '@hris/ui';

// Basic skeleton
<Skeleton className="h-12 w-12" />

// Text skeleton
<SkeletonText lines={3} />

// Card skeleton
<SkeletonCard />

// Avatar skeleton
<SkeletonAvatar />

// Custom variants
<Skeleton variant="circle" className="h-12 w-12" />
<Skeleton variant="text" />
<Skeleton variant="button" />
```

### Layout Components

#### Sidebar

Collapsible navigation:

```tsx
import { Sidebar, SidebarGroup, SidebarItem } from '@hris/ui';
import { Home, Users, Settings } from 'lucide-react';

<Sidebar defaultCollapsed={false}>
  <SidebarGroup label="القائمة الرئيسية">
    <SidebarItem icon={<Home />} label="الرئيسية" active />
    <SidebarItem icon={<Users />} label="الموظفون" />
    <SidebarItem icon={<Settings />} label="الإعدادات" />
  </SidebarGroup>
</Sidebar>
```

#### Header

Application header with user menu:

```tsx
import { Header } from '@hris/ui';

<Header
  user={{
    name: "أحمد محمد",
    email: "ahmed@hris.sa",
    image: "/avatar.jpg"
  }}
  onMenuClick={() => toggleMobileSidebar()}
  showSearch
/>
```

#### Breadcrumb

Navigation breadcrumbs:

```tsx
import { Breadcrumb } from '@hris/ui';

<Breadcrumb
  items={[
    { label: 'الرئيسية', href: '/' },
    { label: 'الموظفون', href: '/employees' },
    { label: 'تفاصيل الموظف' },
  ]}
/>
```

#### Page Layout

Complete page structure:

```tsx
import { PageLayout, PageHeader, PageContent, Button } from '@hris/ui';

<PageLayout
  title="إدارة الموظفين"
  description="عرض وإدارة جميع الموظفين في النظام"
  breadcrumbs={[
    { label: 'الرئيسية', href: '/' },
    { label: 'الموظفون' },
  ]}
  actions={
    <Button>إضافة موظف</Button>
  }
>
  <PageContent>
    {/* Your content */}
  </PageContent>
</PageLayout>
```

## Styling

### Tailwind Configuration

The package includes a pre-configured `tailwind.config.js` with:

- RTL-aware logical properties
- Arabic font (Cairo)
- Design tokens (colors, spacing, etc.)
- Dark mode support
- Custom animations

### Global Styles

Import the global CSS in your app:

```tsx
import '@hris/ui/src/styles/globals.css';
```

### Utility Components (Phase 2.1)

#### Container

Responsive container with max-width variants:

```tsx
import { Container } from '@hris/ui';

<Container maxWidth="xl">
  {/* Your content */}
</Container>

// Available sizes: sm, md, lg, xl, 2xl, full
```

#### Divider

Horizontal or vertical separator:

```tsx
import { Divider } from '@hris/ui';

// Simple divider
<Divider />

// Vertical divider
<Divider orientation="vertical" />

// Divider with text
<Divider text="أو" />
```

#### ScrollArea

Scrollable container with RTL support:

```tsx
import { ScrollArea } from '@hris/ui';

<ScrollArea className="h-[400px]">
  {/* Your scrollable content */}
</ScrollArea>
```

#### ErrorBoundary

Catch and handle React errors with Arabic fallback:

```tsx
import { ErrorBoundary } from '@hris/ui';

<ErrorBoundary
  title="حدث خطأ"
  description="عذراً، حدث خطأ أثناء معالجة طلبك"
  resetText="إعادة المحاولة"
  onError={(error, errorInfo) => console.error(error)}
>
  <YourComponent />
</ErrorBoundary>
```

## Utilities

```tsx
import { cn, formatBytes, debounce, getInitials } from '@hris/ui';

// Merge classes
cn('px-4 py-2', 'bg-primary', className);

// Format file size
formatBytes(1024); // "1 KB"

// Debounce function
const debouncedSearch = debounce(search, 300);

// Get initials
getInitials('أحمد محمد'); // "أم"
```

## Arabic Translations (Phase 2.1)

Use the built-in Arabic translations for consistent UI text:

```tsx
import { translations, t } from '@hris/ui';

// Access translations directly
translations.common.save; // "حفظ"
translations.table.noData; // "لا توجد بيانات"
translations.validation.required; // "هذا الحقل مطلوب"

// Use the helper function with parameter substitution
t('validation', 'min', { min: 10 }); // "القيمة يجب أن تكون على الأقل 10"

// Available categories:
// - common: Common UI text (save, cancel, delete, etc.)
// - table: Table-related text
// - validation: Form validation messages
// - date: Date and time related text
// - file: File upload messages
// - errors: Error messages
// - dialogs: Dialog messages
```

## TypeScript

All components are fully typed with TypeScript for excellent IDE support.

## Accessibility

All components follow WAI-ARIA guidelines:
- Proper ARIA labels (in Arabic)
- Keyboard navigation
- Screen reader support
- Focus management

## Development

```bash
# Type check
pnpm --filter @hris/ui typecheck

# Lint
pnpm --filter @hris/ui lint
```

## Best Practices

1. **Always use logical properties** - Use `ps`/`pe` instead of `pl`/`pr`
2. **Arabic-first content** - Provide Arabic labels and placeholders
3. **Responsive design** - Test on mobile devices
4. **Accessibility** - Include ARIA labels
5. **Type safety** - Leverage TypeScript

## License

Private - All rights reserved
