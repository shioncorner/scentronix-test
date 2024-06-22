import { FormProvider } from 'react-hook-form';

export { FormControl } from './form-control';
export { FormDescription } from './form-description';
export { FormField } from './form-field';
export { FormItem } from './form-item';
export { FormLabel } from './form-label';
export { FormMessage } from './form-message';
export { useFormField } from './use-form-field';

/**
 * Provides a form context to its children components.
 *
 * @returns A `Form` component.
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
export const Form = FormProvider;
