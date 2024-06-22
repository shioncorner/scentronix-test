import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

/**
 * The props for the Button component.
 */
type ButtonProps = ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
  };

/**
 * Renders a customizable button component that supports different variants and sizes.
 *
 * @param asChild - Whether to render the button as a child of a Slot component.
 * @param children - The child components to render.
 * @param className - The class name for the button element.
 * @param disabled - Whether the button is disabled.
 * @param isLoading - Whether to render a loading indicator.
 * @param size - The size of the button. Can be one of: 'default', 'sm', 'lg', or 'icon'.
 * @param variant - The variant of the button. Can be one of: 'default', 'destructive', 'outline', 'secondary', 'ghost', or 'link'.
 * @param otherButtonProps - The props for the button element.
 * @param ref - The ref for the button.
 * @returns The Button component.
 * @example
 * ```
 * <Button variant='destructive' size='sm'>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      children,
      className,
      disabled,
      isLoading,
      size,
      variant,
      ...otherButtonProps
    },
    ref,
  ) => {
    /**
     * Determines whether to render a Slot component or a button element based on the value of `asChild`.
     * If `asChild` is true, it renders a Slot component. Otherwise, it renders a button element.
     *
     * The Slot component merges its props onto its immediate child.
     */
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ className, size, variant }))}
        disabled={disabled || isLoading}
        ref={ref}
        {...otherButtonProps}
      >
        {isLoading ? <Loader2 className='mr-2 size-4 animate-spin' /> : null}

        {children}
      </Comp>
    );
  },
);

Button.displayName = 'Button';
