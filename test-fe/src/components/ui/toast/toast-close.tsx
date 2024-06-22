import * as ToastPrimitives from '@radix-ui/react-toast';
import { X } from 'lucide-react';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A button that can be used to close a toast.
 *
 * @example
 * ```
 * <ToastProvider>
 *  {toasts.map(({ action, description, id, title, ...toastProps }) => (
 *   <Toast key={id} {...toastProps}>
 *    <div className='grid gap-1'>
 *     {title ? <ToastTitle>{title}</ToastTitle> : null}
 *
 *     {description ? <ToastDescription>{description}</ToastDescription> : null}
 *    </div>
 *
 *    {action}
 *
 *    <ToastClose />
 *   </Toast>
 *  ))}
 *
 *  <ToastViewport />
 * </ToastProvider>
 * ```
 */
export const ToastClose = forwardRef<
  ElementRef<typeof ToastPrimitives.Close>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...toastCloseProps }, ref) => (
  <ToastPrimitives.Close
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      className,
    )}
    ref={ref}
    toast-close=''
    {...toastCloseProps}
  >
    <X className='size-4' />
  </ToastPrimitives.Close>
));

ToastClose.displayName = ToastPrimitives.Close.displayName;
