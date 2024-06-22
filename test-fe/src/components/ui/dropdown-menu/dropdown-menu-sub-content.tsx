import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A component that renders a menu sub content within a dropdown menu.
 * It uses the `DropdownMenuPrimitive.SubContent` component from Radix UI to provide the base functionality.
 *
 * @param className - The class name for the menu sub content.
 * @param dropdownMenuSubContentProps - The props to pass to the `DropdownMenuPrimitive.SubContent` component.
 * @param ref - The ref for the menu sub content.
 * @returns A menu sub content within a dropdown menu.
 * @example
 * ```
 * <DropdownMenu>
 *  <DropdownMenuTrigger asChild>
 *   <Button variant="outline">Open</Button>
 *  </DropdownMenuTrigger>
 *
 *  <DropdownMenuContent className="w-56">
 *   <DropdownMenuLabel>Appearance</DropdownMenuLabel>
 *   <DropdownMenuSeparator />
 *
 *   <DropdownMenuGroup>
 *    <DropdownMenuItem>
 *     Profile
 *     <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
 *    </DropdownMenuItem>
 *    <DropdownMenuItem>
 *     Billing
 *     <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
 *    </DropdownMenuItem>
 *   </DropdownMenuGroup>
 *
 *   <DropdownMenuGroup>
 *    <DropdownMenuItem>Team</DropdownMenuItem>
 *    <DropdownMenuSub>
 *     <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
 *     <DropdownMenuPortal>
 *      <DropdownMenuSubContent>
 *       <DropdownMenuItem>Email</DropdownMenuItem>
 *       <DropdownMenuItem>Message</DropdownMenuItem>
 *      </DropdownMenuSubContent>
 *     </DropdownMenuPortal>
 *    </DropdownMenuSub>
 *   </DropdownMenuGroup>
 *  </DropdownMenuContent>
 * </DropdownMenu>
 * ```
 */
export const DropdownMenuSubContent = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...dropdownMenuSubContentProps }, ref) => (
  <DropdownMenuPrimitive.SubContent
    className={cn(
      'z-dropdown-menu-sub-content min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className,
    )}
    ref={ref}
    {...dropdownMenuSubContentProps}
  />
));

DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
