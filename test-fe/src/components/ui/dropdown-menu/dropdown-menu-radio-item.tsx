import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { DotFilledIcon } from '@radix-ui/react-icons';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A component that renders a radio option within a dropdown menu.
 * It uses the `DropdownMenuPrimitive.RadioItem` component from Radix UI to provide the base functionality.
 *
 * @param children - The children to render the actual radio option text.
 * @param className - The class name for the radio option.
 * @param dropdownMenuRadioItemProps - The props to pass to the `DropdownMenuPrimitive.RadioItem` component.
 * @param ref - The ref for the radio option.
 * @returns A radio option within a dropdown menu.
 * @example
 * ```
 * <DropdownMenu>
 *  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
 *
 *  <DropdownMenuContent>
 *   <DropdownMenuLabel>My Account</DropdownMenuLabel>
 *   <DropdownMenuSeparator />
 *   <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
 *    <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
 *    <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
 *    <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
 *   </DropdownMenuRadioGroup>
 *  </DropdownMenuContent>
 * </DropdownMenu>
 * ```
 */
export const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ children, className, ...dropdownMenuRadioItemProps }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    ref={ref}
    {...dropdownMenuRadioItemProps}
  >
    <span className='absolute left-2 size-3.5 flex-center'>
      <DropdownMenuPrimitive.ItemIndicator>
        <DotFilledIcon className='size-4 fill-current' />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>

    {children}
  </DropdownMenuPrimitive.RadioItem>
));

DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
