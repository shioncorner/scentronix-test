import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A component that renders the content of a dropdown menu.
 * It uses the `DropdownMenuPrimitive.Content` component from Radix UI to provide the base functionality.
 *
 * @param align - The alignment of the dropdown menu. Can be one of: 'start', 'center', or 'end'. Defaults to 'center'.
 * @param className - The class name for the content container.
 * @param sideOffset - The offset of the dropdown menu from the trigger. Defaults to `4`.
 * @param otherDropdownMenuContentProps - The props to pass to the `DropdownMenuPrimitive.Content` component.
 * @param ref - The ref for the content container.
 * @returns The content of a dropdown menu.
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
 *   <DropdownMenuCheckboxItem
 *    checked={showStatusBar}
 *    onCheckedChange={setShowStatusBar}
 *   >
 *    Status Bar
 *   </DropdownMenuCheckboxItem>
 *   <DropdownMenuCheckboxItem
 *    checked={showPanel}
 *    onCheckedChange={setShowPanel}
 *   >
 *    Panel
 *   </DropdownMenuCheckboxItem>
 *  </DropdownMenuContent>
 * </DropdownMenu>
 * ```
 */
export const DropdownMenuContent = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ align = 'center', className, sideOffset = 4, ...otherDropdownMenuContentProps }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      align={align}
      className={cn(
        'z-dropdown-menu-content min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      ref={ref}
      sideOffset={sideOffset}
      {...otherDropdownMenuContentProps}
    />
  </DropdownMenuPrimitive.Portal>
));

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
