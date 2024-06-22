'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

export { DropdownMenuCheckboxItem } from './dropdown-menu-checkbox-item';
export { DropdownMenuContent } from './dropdown-menu-content';
export { DropdownMenuItem } from './dropdown-menu-item';
export { DropdownMenuLabel } from './dropdown-menu-label';
export { DropdownMenuRadioItem } from './dropdown-menu-radio-item';
export { DropdownMenuSeparator } from './dropdown-menu-separator';
export { DropdownMenuShortcut } from './dropdown-menu-shortcut';
export { DropdownMenuSubContent } from './dropdown-menu-sub-content';
export { DropdownMenuSubTrigger } from './dropdown-menu-sub-trigger';

/**
 * This component is used as the trigger that opens or closes the dropdown menu when interacted with (typically clicked).
 * It should be used within a DropdownMenu component, and it can contain any content that should act as the trigger for the dropdown menu.
 *
 * @returns A trigger that opens or closes the dropdown menu when interacted with.
 * @example
 * ```
 * <DropdownMenu>
 *   <DropdownMenuTrigger>
 *     Click me to open the menu
 *   </DropdownMenuTrigger>
 *   <DropdownMenuContent>
 *     <DropdownMenuItem>
 *       Menu item 1
 *     </DropdownMenuItem>
 *     <DropdownMenuItem>
 *       Menu item 2
 *     </DropdownMenuItem>
 *   </DropdownMenuContent>
 * </DropdownMenu>
 * ```
 */
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

/**
 * This component is used to group related items within a dropdown menu. It can be useful for separating different types of options within the same dropdown menu.
 * It should be used within a DropdownMenuContent component, and it can contain any number of DropdownMenuItem or DropdownMenuCheckboxItem components.
 *
 * @returns A group of related items within a dropdown menu.
 * @example
 * ```
 * <DropdownMenu>
 *   <DropdownMenuTrigger>
 *     Open the menu
 *   </DropdownMenuTrigger>
 *   <DropdownMenuContent>
 *     <DropdownMenuGroup>
 *       <DropdownMenuItem>
 *         Group 1 item 1
 *       </DropdownMenuItem>
 *       <DropdownMenuItem>
 *         Group 1 item 2
 *       </DropdownMenuItem>
 *     </DropdownMenuGroup>
 *     <DropdownMenuGroup>
 *       <DropdownMenuItem>
 *         Group 2 item 1
 *       </DropdownMenuItem>
 *       <DropdownMenuItem>
 *         Group 2 item 2
 *       </DropdownMenuItem>
 *     </DropdownMenuGroup>
 *   </DropdownMenuContent>
 * </DropdownMenu>
 * ```
 */
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

/**
 * This component is used to create a group of radio items within a dropdown menu. It ensures that only one item within the group can be selected at a time, similar to how a group of radio buttons works.
 * It should be used within a DropdownMenuContent component, and it can contain any number of DropdownMenuRadioItem components.
 *
 * @returns A group of radio items within a dropdown menu.
 * @example
 * ```
 * <DropdownMenu>
 *   <DropdownMenuTrigger>
 *     Open the menu
 *   </DropdownMenuTrigger>
 *   <DropdownMenuContent>
 *     <DropdownMenuRadioGroup value="item1">
 *       <DropdownMenuRadioItem value="item1">
 *         Radio item 1
 *       </DropdownMenuRadioItem>
 *       <DropdownMenuRadioItem value="item2">
 *         Radio item 2
 *       </DropdownMenuRadioItem>
 *     </DropdownMenuRadioGroup>
 *   </DropdownMenuContent>
 * </DropdownMenu>
 * ```
 */
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

/**
 * This component is used to render the dropdown menu into a React Portal. This can be useful when you want the dropdown menu to break out of its container, for example, if overflow is hidden on the container.
 * It should be used within a DropdownMenu component, and it should wrap the DropdownMenuContent component.
 *
 * @returns A portal for the dropdown menu.
 * @example
 * ```
 * <DropdownMenu>
 *   <DropdownMenuTrigger>
 *     Open the menu
 *   </DropdownMenuTrigger>
 *   <DropdownMenuPortal>
 *     <DropdownMenuContent>
 *       <DropdownMenuItem>
 *         Menu item 1
 *       </DropdownMenuItem>
 *       <DropdownMenuItem>
 *         Menu item 2
 *       </DropdownMenuItem>
 *     </DropdownMenuContent>
 *   </DropdownMenuPortal>
 * </DropdownMenu>
 * ```
 */
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

/**
 * This component is typically used when you want to have a nested menu within a dropdown menu. When a user hovers over or clicks on an item in the main menu, the sub-menu appears, providing additional options.
 * It should be used within a DropdownMenuContent component, and it can contain a DropdownMenuTrigger and a DropdownMenuContent, which in turn can contain any number of DropdownMenuItem components.
 *
 * @returns A nested menu within a dropdown menu.
 * @example
 * ```
 * <DropdownMenu>
 *   <DropdownMenuTrigger>
 *     Open the menu
 *   </DropdownMenuTrigger>
 *   <DropdownMenuContent>
 *     <DropdownMenuItem>
 *       Regular item
 *     </DropdownMenuItem>
 *     <DropdownMenuSub>
 *       <DropdownMenuTrigger>
 *         Open the sub-menu
 *       </DropdownMenuTrigger>
 *       <DropdownMenuContent>
 *         <DropdownMenuItem>
 *           Sub-menu item 1
 *         </DropdownMenuItem>
 *         <DropdownMenuItem>
 *           Sub-menu item 2
 *         </DropdownMenuItem>
 *       </DropdownMenuContent>
 *     </DropdownMenuSub>
 *   </DropdownMenuContent>
 * </DropdownMenu>
 * ```
 */
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;

/**
 * A component that renders a dropdown menu.
 *
 * @returns A dropdown menu.
 * @example
 * ```
 * <DropdownMenu>
 *   <DropdownMenuTrigger>
 *     Click me to open the menu
 *   </DropdownMenuTrigger>
 *   <DropdownMenuContent>
 *     <DropdownMenuItem>
 *       Menu item 1
 *     </DropdownMenuItem>
 *     <DropdownMenuItem>
 *       Menu item 2
 *     </DropdownMenuItem>
 *   </DropdownMenuContent>
 * </DropdownMenu>
 * ```
 */
export const DropdownMenu = DropdownMenuPrimitive.Root;
