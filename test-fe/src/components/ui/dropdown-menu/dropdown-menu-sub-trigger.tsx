import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A component that renders a sub-trigger within a dropdown menu.
 * It uses the `DropdownMenuPrimitive.SubTrigger` component from Radix UI to provide the base functionality.
 *
 * @param children - The children to render the actual sub-trigger text.
 * @param className - The class name for the sub-trigger.
 * @param inset - Whether the sub-trigger should be inset from the left.
 * @param otherDropdownMenuSubTriggerProps - The props to pass to the `DropdownMenuPrimitive.SubTrigger` component.
 * @param ref - The ref for the sub-trigger.
 * @returns A sub-trigger within a dropdown menu.
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
export const DropdownMenuSubTrigger = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ children, className, inset, ...otherDropdownMenuSubTriggerProps }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
      inset && 'pl-8',
      className,
    )}
    ref={ref}
    {...otherDropdownMenuSubTriggerProps}
  >
    {children}

    <ChevronRightIcon className='ml-auto size-4' />
  </DropdownMenuPrimitive.SubTrigger>
));

DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
