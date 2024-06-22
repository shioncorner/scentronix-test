import * as SelectPrimitive from '@radix-ui/react-select';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A component that renders a separator for a dropdown select menu.
 * It uses the `SelectPrimitive.Separator` component from Radix UI to provide the base functionality.
 *
 * @param className - The class name for the separator.
 * @param selectSeparatorProps - The props to pass to the `SelectPrimitive.Separator` component.
 * @param ref - The ref for the separator.
 * @returns The separator.
 * @example
 * ```
 * <Select>
 *  <SelectTrigger>Open</SelectTrigger>
 *  <SelectContent>
 *   <SelectItem value="top">Top</SelectItem>
 *   <SelectSeparator />
 *   <SelectItem value="bottom">Bottom</SelectItem>
 *   <SelectItem value="right">Right</SelectItem>
 *  </SelectContent>
 * </Select>
 * ```
 */
export const SelectSeparator = forwardRef<
  ElementRef<typeof SelectPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...selectSeparatorProps }, ref) => (
  <SelectPrimitive.Separator
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    ref={ref}
    {...selectSeparatorProps}
  />
));

SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
