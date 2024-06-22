'use client';

import { createContext } from 'react';
import { type FieldPath, type FieldValues } from 'react-hook-form';

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

type FormItemContextValue = {
  id: string;
};

/**
 * Context object used to store the current form field data state.
 */
export const FormFieldContext = createContext<FormFieldContextValue | undefined>(undefined);

/**
 * Context object used to store the current form item data state.
 */
export const FormItemContext = createContext<FormItemContextValue | undefined>(undefined);
