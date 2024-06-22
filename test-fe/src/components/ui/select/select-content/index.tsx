import * as SelectPrimitive from '@radix-ui/react-select';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

import { SelectScrollDownButton } from './select-scroll-down-button';
import { SelectScrollUpButton } from './select-scroll-up-button';

/**
 * A component that renders the content of a dropdown select menu.
 * It uses the `SelectPrimitive.Content` component from Radix UI to provide the base functionality.
 * The component is wrapped in a `SelectPrimitive.Portal` which helps in rendering the dropdown menu in a new React root on top of everything else.
 * It also includes `SelectScrollUpButton` and `SelectScrollDownButton` components for scrolling functionality when the content exceeds the maximum height.
 *
 * @param children - The children to render the actual options within the dropdown menu, usually `Select.Item` components.
 * @param className - The class name for the content container.
 * @param position - The positioning strategy of the dropdown menu. Can be one of: 'popper' or 'item-aligned'. By default, it uses the 'popper' strategy.
 * @param otherSelectContentProps - The props to pass to the `SelectPrimitive.Content` component.
 * @param ref - The ref for the content container.
 * @returns The dropdown select menu.
 * @example
 * ```
 * <Select>
 *  <SelectTrigger>Open</SelectTrigger>
 *  <SelectContent>
 *   <SelectItem value="top">Top</SelectItem>
 *   <SelectItem value="bottom">Bottom</SelectItem>
 *   <SelectItem value="right">Right</SelectItem>
 *  </SelectContent>
 * </Select>
 * ```
 */
export const SelectContent = forwardRef<
  ElementRef<typeof SelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ children, className, position = 'popper', ...otherSelectContentProps }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={cn(
        'relative z-select-content max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className,
      )}
      position={position}
      ref={ref}
      {...otherSelectContentProps}
    >
      <SelectScrollUpButton />

      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>

      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));

SelectContent.displayName = SelectPrimitive.Content.displayName;
