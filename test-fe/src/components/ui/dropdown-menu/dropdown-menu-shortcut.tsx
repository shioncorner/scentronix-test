import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * The props for the DropdownMenuShortcut component.
 */
type DropdownMenuShortcutProps = ComponentPropsWithoutRef<'span'>;
/**
 * A component that renders a shortcut within a dropdown menu.
 * It uses the `DropdownMenuPrimitive.Shortcut` component from Radix UI to provide the base functionality.
 *
 * @param className - The class name for the shortcut.
 * @param dropdownMenuShortcutProps - The props to pass to the `DropdownMenuPrimitive.Shortcut` component.
 * @returns A shortcut within a dropdown menu.
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
 *  </DropdownMenuContent>
 * </DropdownMenu>
 * ```
 */
export const DropdownMenuShortcut = ({
  className,
  ...dropdownMenuShortcutProps
}: DropdownMenuShortcutProps) => {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
      {...dropdownMenuShortcutProps}
    />
  );
};

DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';
