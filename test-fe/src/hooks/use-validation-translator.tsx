'use client';

import { isValidationKey } from '~lib/type-utils/guard/is-validation-key';
import { useTranslation } from '~translation/client';

/**
 * A hook that returns a function that translates a validation message.
 *
 * @returns A function that translates a validation message.
 */
export const useValidationTranslator = () => {
  const { t } = useTranslation('validation');

  /**
   * Translates a validation message.
   *
   * @param key - The validation message to translate.
   * @returns The translated validation message.
   * @throws If the validation message is not a valid validation key.
   */
  const translateValidationMessage = (key: string) => {
    if (!isValidationKey(key)) {
      throw new Error('Invalid validation key to translate');
    }

    return t(key);
  };

  return { translateValidationMessage };
};
