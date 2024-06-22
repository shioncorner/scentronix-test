import { type ReactNode } from 'react';

import { FormItem, FormMessage } from '~components/ui/form';
import { useValidationTranslator } from '~hooks/use-validation-translator';

/**
 * The props for the FormItemWithMessage component.
 */
type FormItemWithMessageProps = {
  children: ReactNode;
};

/**
 * A component that renders a FormItem with a translated message.
 *
 * @param children - The children to render.
 * @returns The FormItem with a translated message.
 */
export const FormItemWithMessage = ({ children }: FormItemWithMessageProps) => {
  const { translateValidationMessage } = useValidationTranslator();

  return (
    <FormItem>
      {children}

      <FormMessage translateMessage={translateValidationMessage} />
    </FormItem>
  );
};
