import * as SelectPrimitive from '@radix-ui/react-select';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A component that renders a label for a dropdown select menu.
 * It uses the `SelectPrimitive.Label` component from Radix UI to provide the base functionality.
 *
 * @param className - The class name for the label.
 * @param selectLabelProps - The props to pass to the `SelectPrimitive.Label` component.
 * @param ref - The ref for the label.
 * @returns The label.
 * @example
 * ```
 * <Select>
 *  <SelectTrigger>Open</SelectTrigger>
 *  <SelectContent>
 *   <SelectGroup>
 *    <SelectLabel>North America</SelectLabel>
 *    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
 *    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
 *   <SelectGroup>
 *   <SelectGroup>
 *    <SelectLabel>Europe</SelectLabel>
 *     <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
 *     <SelectItem value="cet">Central European Time (CET)</SelectItem>
 *   <SelectGroup>
 *  </SelectContent>
 * </Select>
 * ```
 */
export const SelectLabel = forwardRef<
  ElementRef<typeof SelectPrimitive.Label>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...selectLabelProps }, ref) => (
  <SelectPrimitive.Label
    className={cn('px-2 py-1.5 text-sm font-semibold', className)}
    ref={ref}
    {...selectLabelProps}
  />
));

SelectLabel.displayName = SelectPrimitive.Label.displayName;
