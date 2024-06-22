import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

import { useFormField } from './use-form-field';

/**
 * Provides a form description component.
 *
 * @param className - The class name for the FormDescription component.
 * @param formDescriptionProps - The props for the FormDescription component.
 * @returns A `FormDescription` component.
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
export const FormDescription = forwardRef<HTMLParagraphElement, ComponentPropsWithoutRef<'p'>>(
  ({ className, ...formDescriptionProps }, ref) => {
    const { formDescriptionId } = useFormField();

    return (
      <p
        className={cn('text-[0.8rem] text-muted-foreground', className)}
        id={formDescriptionId}
        ref={ref}
        {...formDescriptionProps}
      />
    );
  },
);

FormDescription.displayName = 'FormDescription';
