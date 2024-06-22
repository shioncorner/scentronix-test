import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

import { useFormField } from './use-form-field';

type FormMessageProps = ComponentPropsWithoutRef<'p'> & {
  translateMessage?: (key: string) => string;
};

/**
 * Provides a form message component.
 *
 * @param className - The class name for the FormMessage component.
 * @param children - The children for the FormMessage component.
 * @param formMessageProps - The props for the FormMessage component.
 * @returns A `FormMessage` component.
 * @example
 * ```
 * <Form {...form}>
 *  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
 *   <FormField
 *    control={form.control}
 *    name="username"
 *    render={({field}) => (
 *      <FormItem>
 *        <FormLabel>Username</FormLabel>
 *        <FormControl>
 *         <Input placeholder="shadcn" {...field} />
 *        </FormControl>
 *        <FormDescription />
 *        <FormMessage />
 *      </FormItem>
 *    )}
 *   />
 *   <Button type="submit">Submit</Button>
 *  </form>
 * </Form>
 * ```
 */
export const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, children, translateMessage, ...formMessageProps }, ref) => {
    const { error, formMessageId } = useFormField();

    const errorMessage = error?.message;
    /**
     * If the error message exist and the translateMessage prop exists, then translate the error message.
     * Otherwise, use the error message or the children.
     */
    const body =
      errorMessage && translateMessage ? translateMessage(errorMessage) : errorMessage || children;

    if (!body) {
      return null;
    }

    return (
      <p
        className={cn('text-[0.8rem] font-medium text-destructive', className)}
        id={formMessageId}
        ref={ref}
        {...formMessageProps}
      >
        {body}
      </p>
    );
  },
);

FormMessage.displayName = 'FormMessage';
