import * as ToastPrimitives from '@radix-ui/react-toast';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A description that can be used to provide more context in a toast.
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
export const ToastDescription = forwardRef<
  ElementRef<typeof ToastPrimitives.Description>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...toastDescriptionProps }, ref) => (
  <ToastPrimitives.Description
    className={cn('text-sm opacity-90', className)}
    ref={ref}
    {...toastDescriptionProps}
  />
));

ToastDescription.displayName = ToastPrimitives.Description.displayName;
