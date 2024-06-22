import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A component that renders a menu item within a dropdown menu.
 * It uses the `DropdownMenuPrimitive.Item` component from Radix UI to provide the base functionality.
 *
 * @param className - The class name for the menu item.
 * @param inset - Whether the menu item should be inset from the left.
 * @param otherDropdownMenuItemProps - The props to pass to the `DropdownMenuPrimitive.Item` component.
 * @param ref - The ref for the menu item.
 * @returns A menu item within a dropdown menu.
 * @example
 * ```
 * <DropdownMenu>
 *  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
 *
 *  <DropdownMenuContent>
 *   <DropdownMenuLabel>My Account</DropdownMenuLabel>
 *   <DropdownMenuSeparator />
 *   <DropdownMenuItem>Profile</DropdownMenuItem>
 *   <DropdownMenuItem>Billing</DropdownMenuItem>
 *   <DropdownMenuItem>Team</DropdownMenuItem>
 *  </DropdownMenuContent>
 * </DropdownMenu>
 * ```
 */
export const DropdownMenuItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...otherDropdownMenuItemProps }, ref) => (
  <DropdownMenuPrimitive.Item
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className,
    )}
    ref={ref}
    {...otherDropdownMenuItemProps}
  />
));

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
