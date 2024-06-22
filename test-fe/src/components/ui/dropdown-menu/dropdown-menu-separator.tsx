import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A component that renders a menu separator within a dropdown menu.
 * It uses the `DropdownMenuPrimitive.Separator` component from Radix UI to provide the base functionality.
 *
 * @param className - The class name for the menu separator.
 * @param dropdownMenuSeparatorProps - The props to pass to the `DropdownMenuPrimitive.Separator` component.
 * @param ref - The ref for the menu separator.
 * @returns A menu separator within a dropdown menu.
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
export const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...dropdownMenuSeparatorProps }, ref) => (
  <DropdownMenuPrimitive.Separator
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    ref={ref}
    {...dropdownMenuSeparatorProps}
  />
));

DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
