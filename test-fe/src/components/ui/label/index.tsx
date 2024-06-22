import { Root as LabelRoot } from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
);

/**
 * The props for the Label component.
 */
type LabelProps = ComponentPropsWithoutRef<typeof LabelRoot> & VariantProps<typeof labelVariants>;

/**
 * Renders a customizable label component.
 * This component is a wrapper around the HTML `label` element and can be used to associate a label with a form control.
 *
 * @param className - The class name for the component.
 * @param labelProps - The props for the component.
 * @param ref - The ref for the component.
 * @returns The rendered `label` element.
 * @example
 * ```
 * <Label htmlFor="username">Username</Label>
 * <Input id="username" name="username" />
 * ```
 */
export const Label = forwardRef<ElementRef<typeof LabelRoot>, LabelProps>(
  ({ className, ...labelProps }, ref) => (
    <LabelRoot className={cn(labelVariants(), className)} ref={ref} {...labelProps} />
  ),
);

Label.displayName = LabelRoot.displayName;
