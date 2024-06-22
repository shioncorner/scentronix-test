import { ChevronUpIcon } from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A component that renders a scroll up button for a dropdown select menu.
 * It uses the `SelectPrimitive.ScrollUpButton` component from Radix UI to provide the base functionality.
 *
 * @param className - The class name for the scroll up button.
 * @param selectScrollUpButtonProps - The props to pass to the `SelectPrimitive.ScrollUpButton` component.
 * @param ref - The ref for the scroll up button.
 * @returns The scroll up button.
 */
export const SelectScrollUpButton = forwardRef<
  ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...selectScrollUpButtonProps }, ref) => (
  <SelectPrimitive.ScrollUpButton
    className={cn('cursor-default py-1 flex-center', className)}
    ref={ref}
    {...selectScrollUpButtonProps}
  >
    <ChevronUpIcon />
  </SelectPrimitive.ScrollUpButton>
));

SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
