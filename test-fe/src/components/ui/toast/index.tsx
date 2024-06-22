'use client';

import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  type ReactElement,
} from 'react';

import { cn } from '~lib/utils/cn';

export { ToastAction } from './toast-action';

export { ToastClose } from './toast-close';

export { ToastDescription } from './toast-description';

export { ToastTitle } from './toast-title';

export { ToastViewport } from './toast-viewport';

export { Toaster } from './toaster';

export { useToast } from './use-toast';

export const ToastProvider = ToastPrimitives.Provider;

export type ToastProps = ComponentPropsWithoutRef<typeof Toast>;

export type ToastActionElement = ReactElement<typeof ToastPrimitives.ToastAction>;

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground',
        destructive:
          'destructive group border-destructive bg-destructive text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

/**
 * A toast that can be used to display a message to the user.
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
export const Toast = forwardRef<
  ElementRef<typeof ToastPrimitives.Root>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitives.Root
    className={cn(toastVariants({ variant }), className)}
    ref={ref}
    {...props}
  />
));

Toast.displayName = ToastPrimitives.Root.displayName;
