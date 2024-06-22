import * as LabelPrimitive from '@radix-ui/react-label';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { Label } from '~components/ui/label';
import { cn } from '~lib/utils/cn';

import { useFormField } from './use-form-field';

/**
 * Provides a form label component.
 *
 * @param className - The class name for the FormLabel component.
 * @param formLabelProps - The props for the FormLabel component.
 * @returns A `FormLabel` component.
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
export const FormLabel = forwardRef<
  ElementRef<typeof LabelPrimitive.Root>,
  ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...formLabelProps }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      className={cn(error && 'text-destructive', className)}
      htmlFor={formItemId}
      ref={ref}
      {...formLabelProps}
    />
  );
});

FormLabel.displayName = 'FormLabel';
