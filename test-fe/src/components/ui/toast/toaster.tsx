import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  useToast,
} from '~components/ui/toast';

/**
 * A component that can be used to contain toasts.
 *
 * @example
 * ```
 * <html lang="en">
 *  <head />
 *  <body>
 *   <main>{children}</main>
 *
 *   <Toaster />
 *  </body>
 * </html>
 * ```
 */
export const Toaster = () => {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ action, description, id, title, ...toastProps }) => (
        <Toast key={id} {...toastProps}>
          <div className='grid gap-1'>
            {title ? <ToastTitle>{title}</ToastTitle> : null}

            {description ? <ToastDescription>{description}</ToastDescription> : null}
          </div>

          {action}

          <ToastClose />
        </Toast>
      ))}

      <ToastViewport />
    </ToastProvider>
  );
};
