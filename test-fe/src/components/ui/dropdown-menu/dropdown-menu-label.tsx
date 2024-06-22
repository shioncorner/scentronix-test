import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A component that renders a menu label within a dropdown menu.
 * It uses the `DropdownMenuPrimitive.Label` component from Radix UI to provide the base functionality.
 *
 * @param className - The class name for the menu label.
 * @param inset - Whether the menu label should be inset from the left.
 * @param otherDropdownMenuLabelProps - The props to pass to the `DropdownMenuPrimitive.Label` component.
 * @param ref - The ref for the menu label.
 * @returns A menu label within a dropdown menu.
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
export const DropdownMenuLabel = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Label>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...otherDropdownMenuLabelProps }, ref) => (
  <DropdownMenuPrimitive.Label
    className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
    ref={ref}
    {...otherDropdownMenuLabelProps}
  />
));

DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
