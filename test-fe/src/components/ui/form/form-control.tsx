import { Slot } from '@radix-ui/react-slot';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { useFormField } from './use-form-field';

/**
 * Provides a form control component.
 *
 * @param formControlProps - The props for the FormControl component.
 * @returns A `FormControl` component.
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
export const FormControl = forwardRef<
  ElementRef<typeof Slot>,
  ComponentPropsWithoutRef<typeof Slot>
>(({ ...formControlProps }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      aria-describedby={!error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      id={formItemId}
      ref={ref}
      {...formControlProps}
    />
  );
});

FormControl.displayName = 'FormControl';
