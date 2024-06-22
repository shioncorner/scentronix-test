import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon } from '@radix-ui/react-icons';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A component that renders a checkbox option within a dropdown menu.
 * It uses the `DropdownMenuPrimitive.CheckboxItem` component from Radix UI to provide the base functionality.
 *
 * @param children - The children to render the actual checkbox option text.
 * @param checked - Whether the checkbox option is checked.
 * @param className - The class name for the checkbox option.
 * @param otherDropdownMenuCheckboxItemProps - The props to pass to the `DropdownMenuPrimitive.CheckboxItem` component.
 * @param ref - The ref for the checkbox option.
 * @returns A checkbox option within a dropdown menu.
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
export const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ children, checked, className, ...otherDropdownMenuCheckboxItemProps }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    checked={checked}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    ref={ref}
    {...otherDropdownMenuCheckboxItemProps}
  >
    <span className='absolute left-2 size-3.5 flex-center'>
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className='size-4' />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>

    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));

DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
