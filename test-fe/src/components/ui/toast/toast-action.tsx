import * as ToastPrimitives from '@radix-ui/react-toast';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A button that can be used to perform an action in a toast.
 *
 * @example
 * ```
 * toast({
 *  title: "Scheduled: Catch up ",
 *  description: "Friday, February 10, 2023 at 5:57 PM",
 *  action: (
 *   <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
 *  ),
 * })
 * ```
 */
export const ToastAction = forwardRef<
  ElementRef<typeof ToastPrimitives.Action>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...toastActionProps }, ref) => (
  <ToastPrimitives.Action
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
      className,
    )}
    ref={ref}
    {...toastActionProps}
  />
));

ToastAction.displayName = ToastPrimitives.Action.displayName;
