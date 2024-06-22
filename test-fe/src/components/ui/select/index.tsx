'use client';

import * as SelectPrimitive from '@radix-ui/react-select';

export { SelectContent } from './select-content';
export { SelectItem } from './select-item';
export { SelectLabel } from './select-label';
export { SelectSeparator } from './select-separator';
export { SelectTrigger } from './select-trigger';

/**
 * A component that groups related options in a dropdown select menu.
 * It uses the `SelectPrimitive.Group` component from Radix UI to provide the base functionality.
 * This component can be used to semantically group options, which can be particularly useful
 * when the list of options is long or needs to be divided into categories for easier reading and selection.
 *
 * @returns A group of related options in a dropdown select menu.
 * @example
 * ```
 * <Select>
 *  <SelectTrigger>
 *   <SelectValue placeholder='Select a value' />
 *  </SelectTrigger>
 *  <SelectContent>
 *   <SelectGroup>
 *    <SelectLabel>North America</SelectLabel>
 *    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
 *    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
 *   <SelectGroup>
 *   <SelectGroup>
 *    <SelectLabel>Europe</SelectLabel>
 *     <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
 *     <SelectItem value="cet">Central European Time (CET)</SelectItem>
 *   <SelectGroup>
 *  </SelectContent>
 * </Select>
 * ```
 */
export const SelectGroup = SelectPrimitive.Group;

/**
 * A component that displays the selected value in the dropdown select menu.
 * It uses the `SelectPrimitive.Value` component from Radix UI to provide the base functionality.
 * This component is typically used within the `SelectTrigger` component to display the current selected value.
 * When an option is selected from the dropdown menu, the value of that option is displayed by this component.
 *
 * @returns The selected value in the dropdown select menu.
 * @example
 * ```
 * <Select>
 *  <SelectTrigger>
 *   <SelectValue placeholder='Select a value' />
 *  </SelectTrigger>
 *  <SelectContent>
 *   <SelectItem value="top">Top</SelectItem>
 *   <SelectItem value="bottom">Bottom</SelectItem>
 *   <SelectItem value="right">Right</SelectItem>
 *  </SelectContent>
 * </Select>
 * ```
 */
export const SelectValue = SelectPrimitive.Value;

/**
 * A component that renders a dropdown select menu.
 * It uses the `SelectPrimitive.Root` component from Radix UI to provide the base functionality.
 *
 * @returns A dropdown select menu.
 * @example
 * ```
 * <Select>
 *  <SelectTrigger>
 *   <SelectValue placeholder='Select a value' />
 *  </SelectTrigger>
 *  <SelectContent>
 *   <SelectItem value="top">Top</SelectItem>
 *   <SelectItem value="bottom">Bottom</SelectItem>
 *   <SelectItem value="right">Right</SelectItem>
 *  </SelectContent>
 * </Select>
 * ```
 */
export const Select = SelectPrimitive.Root;
