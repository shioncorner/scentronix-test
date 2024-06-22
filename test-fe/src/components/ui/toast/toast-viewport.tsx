import * as ToastPrimitives from '@radix-ui/react-toast';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A viewport that can be used to contain toasts.
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
export const ToastViewport = forwardRef<
  ElementRef<typeof ToastPrimitives.Viewport>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...toastViewportProps }, ref) => (
  <ToastPrimitives.Viewport
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className,
    )}
    ref={ref}
    {...toastViewportProps}
  />
));

ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
