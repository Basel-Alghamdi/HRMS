'use client';

import * as React from 'react';
import { Clock } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './button';
import { Input } from './input';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

export interface TimePickerProps {
  value?: string; // Format: "HH:MM" (24-hour)
  onChange?: (value: string) => void;
  format?: '12' | '24';
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function TimePicker({
  value = '',
  onChange,
  format = '24',
  placeholder = 'اختر الوقت',
  disabled = false,
  className,
}: TimePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [hours, setHours] = React.useState<string>('');
  const [minutes, setMinutes] = React.useState<string>('');
  const [period, setPeriod] = React.useState<'am' | 'pm'>('am');

  React.useEffect(() => {
    if (value) {
      const [h, m] = value.split(':');
      const hour = parseInt(h);

      if (format === '12') {
        if (hour === 0) {
          setHours('12');
          setPeriod('am');
        } else if (hour < 12) {
          setHours(hour.toString());
          setPeriod('am');
        } else if (hour === 12) {
          setHours('12');
          setPeriod('pm');
        } else {
          setHours((hour - 12).toString());
          setPeriod('pm');
        }
      } else {
        setHours(h);
      }
      setMinutes(m);
    }
  }, [value, format]);

  const handleApply = () => {
    if (!hours || !minutes) return;

    let finalHours = parseInt(hours);

    if (format === '12') {
      if (period === 'am' && finalHours === 12) {
        finalHours = 0;
      } else if (period === 'pm' && finalHours !== 12) {
        finalHours += 12;
      }
    }

    const timeString = `${finalHours.toString().padStart(2, '0')}:${minutes.padStart(2, '0')}`;
    onChange?.(timeString);
    setOpen(false);
  };

  const formatDisplayValue = () => {
    if (!value) return '';

    const [h, m] = value.split(':');
    const hour = parseInt(h);

    if (format === '12') {
      const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      const arabicPeriod = hour < 12 ? 'ص' : 'م';
      return `${displayHour}:${m} ${arabicPeriod}`;
    }

    return `${h}:${m}`;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full justify-start text-start font-normal',
            !value && 'text-muted-foreground',
            className,
          )}
          disabled={disabled}
        >
          <Clock className="me-2 h-4 w-4" />
          {value ? formatDisplayValue() : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4" align="start">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Input
              type="number"
              min={format === '12' ? 1 : 0}
              max={format === '12' ? 12 : 23}
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder={format === '12' ? '12' : '00'}
              className="w-20"
            />
            <span className="text-lg font-medium">:</span>
            <Input
              type="number"
              min={0}
              max={59}
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              placeholder="00"
              className="w-20"
            />
            {format === '12' && (
              <div className="flex gap-1">
                <Button
                  type="button"
                  variant={period === 'am' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setPeriod('am')}
                  className="w-12"
                >
                  ص
                </Button>
                <Button
                  type="button"
                  variant={period === 'pm' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setPeriod('pm')}
                  className="w-12"
                >
                  م
                </Button>
              </div>
            )}
          </div>
          <Button
            onClick={handleApply}
            disabled={!hours || !minutes}
            className="w-full"
          >
            تطبيق
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
