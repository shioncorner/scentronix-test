import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A component that renders a scroll down button for a dropdown select menu.
 * It uses the `SelectPrimitive.ScrollDownButton` component from Radix UI to provide the base functionality.
 *
 * @param className - The class name for the scroll down button.
 * @param selectScrollDownButtonProps - The props to pass to the `SelectPrimitive.ScrollDownButton` component.
 * @param ref - The ref for the scroll down button.
 * @returns The scroll down button.
 */
export const SelectScrollDownButton = forwardRef<
  ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...selectScrollDownButtonProps }, ref) => (
  <SelectPrimitive.ScrollDownButton
    className={cn('cursor-default py-1 flex-center', className)}
    ref={ref}
    {...selectScrollDownButtonProps}
  >
    <ChevronDownIcon />
  </SelectPrimitive.ScrollDownButton>
));

SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
