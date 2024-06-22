import { type ComponentPropsWithoutRef, forwardRef, useId } from 'react';

import { cn } from '~lib/utils/cn';

import { FormItemContext } from './context';

/**
 * Provides a form item context to its children components.
 *
 * @param className - The class name for the FormItem component.
 * @param formItemProps - The props for the FormItem component.
 * @returns A `FormField` component.
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
export const FormItem = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'p'>>(
  ({ className, ...formItemProps }, ref) => {
    const id = useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div className={cn('space-y-2', className)} ref={ref} {...formItemProps} />
      </FormItemContext.Provider>
    );
  },
);

FormItem.displayName = 'FormItem';
