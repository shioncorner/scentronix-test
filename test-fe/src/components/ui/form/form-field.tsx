import { useMemo } from 'react';
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

import { FormFieldContext } from './context';

/**
 * Provides a form field context to its children components.
 *
 * @param formFieldProps - The props for the FormField component.
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
export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...formFieldProps
}: ControllerProps<TFieldValues, TName>) => {
  const fieldValue = useMemo(
    () => ({
      name: formFieldProps.name,
    }),
    [formFieldProps.name],
  );

  return (
    <FormFieldContext.Provider value={fieldValue}>
      <Controller {...formFieldProps} />
    </FormFieldContext.Provider>
  );
};
