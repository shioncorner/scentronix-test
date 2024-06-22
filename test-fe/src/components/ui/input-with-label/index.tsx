import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react';

import { Input } from '~components/ui/input';
import { Label } from '~components/ui/label';
import { cn } from '~lib/utils/cn';
import { convertStringToKebabCase } from '~lib/utils/convert-string-to-kebab-case';

/**
 * The props for the InputWithLabel component.
 */
type InputWithLabelProps = ComponentPropsWithoutRef<'input'>;

const renderChildren = (children: ReactNode, inputProps: InputWithLabelProps) => {
  if (typeof children === 'string') {
    const id = convertStringToKebabCase(children);

    return (
      <>
        <Label htmlFor={id}>{children}</Label>

        <Input id={id} {...inputProps} />
      </>
    );
  }

  return children;
};

/**
 * An input component with a label.
 *
 * @param children - The label text for the input, or a React node to render instead.
 * @param className - The class name for the div container.
 * @param inputWithLabelProps - The props for the input element.
 * @param ref - The ref for the div container.
 * @returns The InputWithLabel component.
 * @example
 * ```
 * <InputWithLabel>Username</InputWithLabel>
 *
 * <InputWithLabel>
 *  <Label htmlFor='username'>Username</Label>
 *  <Input id='username' />
 * </InputWithLabel>
 * ```
 */
export const InputWithLabel = forwardRef<HTMLDivElement, InputWithLabelProps>(
  ({ children, className, ...inputWithLabelProps }, ref) => (
    <div className={cn('flex w-full flex-col justify-center space-y-2', className)} ref={ref}>
      {renderChildren(children, inputWithLabelProps)}
    </div>
  ),
);

InputWithLabel.displayName = InputWithLabel.displayName = 'InputWithLabel';
