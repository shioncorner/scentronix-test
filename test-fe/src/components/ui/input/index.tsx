'use client';

import { Slot } from '@radix-ui/react-slot';
import { type ComponentPropsWithoutRef, forwardRef, useState } from 'react';

import { Icons } from '~components/shared/icons';
import { cn } from '~lib/utils/cn';

/**
 * The props for the input component.
 */
type InputProps = ComponentPropsWithoutRef<'input'>;

/**
 * Renders a customizable Input component with additional features such as password toggle.
 *
 * @param className - The class name for the input element.
 * @param type - The type of the input element.
 * @param otherInputProps - The props for the input element.
 * @param ref - The ref for the input.
 * @returns The Input component.
 * @example
 * ```
 * <Input type="text" placeholder="Enter your name" />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...otherInputProps }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    /**
     * Toggles the visibility of the password input field.
     */
    const togglePassword = () => setShowPassword((prev) => !prev);

    /**
     * Determines whether to render a Slot component or a div element based on the value of `type`
     * If the `type` is not 'password', it renders a Slot component. Otherwise, it renders a div element.
     *
     * The Slot component merges its props onto its immediate child.
     */
    const Comp = type !== 'password' ? Slot : 'div';

    return (
      <Comp className='relative w-full'>
        <>
          <input
            className={cn(
              'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pr-9 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
              className,
            )}
            ref={ref}
            type={showPassword ? 'text' : type}
            {...otherInputProps}
          />

          {type === 'password' && (
            <button
              className='absolute inset-y-0 right-3 my-auto ml-3 flex-center [&>svg]:stroke-ring/50'
              onClick={togglePassword}
              type='button'
            >
              {showPassword ? (
                <Icons.EyeOff className='size-4' />
              ) : (
                <Icons.Eye className='size-4' />
              )}
            </button>
          )}
        </>
      </Comp>
    );
  },
);

Input.displayName = 'Input';
