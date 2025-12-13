'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { forgotPasswordSchema, type ForgotPasswordFormData } from '@/lib/validations';
import {
  Button,
  Input,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@hris/ui';
import { Link } from '@/i18n/routing';

export function ForgotPasswordForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (_data: ForgotPasswordFormData) => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="p-8">
        <div className="flex flex-col items-center text-center">
          <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">تم إرسال الرابط!</h2>
          <p className="text-muted-foreground mb-6">
            تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.
            يرجى التحقق من صندوق الوارد الخاص بك.
          </p>
          <Link href="/login">
            <Button variant="outline" className="w-full">
              <ArrowRight className="me-2 h-4 w-4" />
              العودة لتسجيل الدخول
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">استعادة كلمة المرور</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          أدخل بريدك الإلكتروني لاستلام رابط إعادة تعيين كلمة المرور
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>البريد الإلكتروني</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@hris.sa"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full" loading={isLoading}>
            {isLoading ? 'جار الإرسال...' : 'إرسال الرابط'}
          </Button>

          {/* Back to Login */}
          <Link href="/login" className="block text-center">
            <Button variant="ghost" className="w-full">
              <ArrowRight className="me-2 h-4 w-4" />
              العودة لتسجيل الدخول
            </Button>
          </Link>
        </form>
      </Form>
    </div>
  );
}
