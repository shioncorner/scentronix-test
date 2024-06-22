'use client';

import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';

import { FormFieldContext, FormItemContext } from './context';

export { FormField } from './form-field';

/**
 * A hook that returns the current form field data state.
 *
 * @returns The current form field data state.
 * @returns The current form field data state.
 * @throws An error if used outside of a `FormField` and `FormItem`.
 * @example
 * const `{` error, formItemId, formDescriptionId, formMessageId `}` = useFormField();
 */
export const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);

  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error('useFormField must be used within a <FormField>');
  }

  if (!itemContext) {
    throw new Error('useFormField must be used within a <FormItem>');
  }

  const fieldState = getFieldState(fieldContext.name, formState);

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};
