import * as ToastPrimitives from '@radix-ui/react-toast';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A title that can be used to provide more context in a toast.
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
export const ToastTitle = forwardRef<
  ElementRef<typeof ToastPrimitives.Title>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...toastTitleProps }, ref) => (
  <ToastPrimitives.Title
    className={cn('text-sm font-semibold', className)}
    ref={ref}
    {...toastTitleProps}
  />
));

ToastTitle.displayName = ToastPrimitives.Title.displayName;
