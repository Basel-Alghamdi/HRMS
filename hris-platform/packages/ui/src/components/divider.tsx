import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '../lib/utils';

export interface DividerProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  text?: string;
}

const Divider = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  DividerProps
>(
  (
    { className, orientation = 'horizontal', decorative = true, text, ...props },
    ref,
  ) => {
    if (text) {
      return (
        <div
          className={cn(
            'relative flex items-center',
            orientation === 'horizontal' ? 'w-full' : 'h-full flex-col',
            className,
          )}
        >
          <SeparatorPrimitive.Root
            ref={ref}
            decorative={decorative}
            orientation={orientation}
            className={cn(
              'shrink-0 bg-border',
              orientation === 'horizontal' ? 'h-[1px] flex-1' : 'w-[1px] flex-1',
            )}
            {...props}
          />
          <span
            className={cn(
              'bg-background px-2 text-xs text-muted-foreground',
              orientation === 'horizontal' ? 'mx-2' : 'my-2',
            )}
          >
            {text}
          </span>
          <SeparatorPrimitive.Root
            decorative={decorative}
            orientation={orientation}
            className={cn(
              'shrink-0 bg-border',
              orientation === 'horizontal' ? 'h-[1px] flex-1' : 'w-[1px] flex-1',
            )}
          />
        </div>
      );
    }

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          'shrink-0 bg-border',
          orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
          className,
        )}
        {...props}
      />
    );
  },
);
Divider.displayName = SeparatorPrimitive.Root.displayName;

export { Divider };
