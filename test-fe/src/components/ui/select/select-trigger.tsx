import { CaretSortIcon } from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A component that renders a trigger for a dropdown select menu.
 * It uses the `SelectPrimitive.Trigger` component from Radix UI to provide the base functionality.
 *
 * @param children - The children to render in the trigger.
 * @param className - The class name for the trigger.
 * @param selectTriggerProps - The props to pass to the `SelectPrimitive.Trigger` component.
 * @param ref - The ref for the trigger.
 * @returns A trigger for a dropdown select menu.
 * @example
 * ```
 * <Select>
 *  <SelectTrigger>
 *   <SelectValue placeholder='Select a value' />
 *  </SelectTrigger>
 *  <SelectContent>
 *   <SelectItem value="top">Top</SelectItem>
 *   <SelectItem value="bottom">Bottom</SelectItem>
 *   <SelectItem value="right">Right</SelectItem>
 *  </SelectContent>
 * </Select>
 * ```
 */
export const SelectTrigger = forwardRef<
  ElementRef<typeof SelectPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ children, className, ...selectTriggerProps }, ref) => (
  <SelectPrimitive.Trigger
    className={cn(
      'h-9 w-full whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background flex-between placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      className,
    )}
    ref={ref}
    {...selectTriggerProps}
  >
    {children}

    <SelectPrimitive.Icon asChild>
      <CaretSortIcon className='size-4 opacity-50' />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
