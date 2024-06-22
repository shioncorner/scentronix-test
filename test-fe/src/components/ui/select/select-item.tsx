import { CheckIcon } from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A component that renders an option within a dropdown select menu.
 * It uses the `SelectPrimitive.Item` component from Radix UI to provide the base functionality.
 *
 * @param children - The children to render the actual option text.
 * @param className - The class name for the option.
 * @param selectItemProps - The props to pass to the `SelectPrimitive.Item` component.
 * @param ref - The ref for the option.
 * @returns The option.
 * @example
 * ```
 * <Select>
 *  <SelectTrigger>Open</SelectTrigger>
 *  <SelectContent>
 *   <SelectItem value="top">Top</SelectItem>
 *   <SelectItem value="bottom">Bottom</SelectItem>
 *   <SelectItem value="right">Right</SelectItem>
 *  </SelectContent>
 * </Select>
 * ```
 */
export const SelectItem = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, className, ...selectItemProps }, ref) => (
  <SelectPrimitive.Item
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    ref={ref}
    {...selectItemProps}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

    <span className='absolute right-2 size-3.5 flex-center'>
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className='size-4' />
      </SelectPrimitive.ItemIndicator>
    </span>
  </SelectPrimitive.Item>
));

SelectItem.displayName = SelectPrimitive.Item.displayName;
