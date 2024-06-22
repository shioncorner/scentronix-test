let count = 0;

/**
 * Generates a unique identifier for a toast.
 *
 * The function increments a count, wrapping around to 0 when it reaches `Number.MAX_SAFE_INTEGER`.
 * The count is then converted to a string and returned.
 *
 * @returns A unique identifier for a toast.
 */
export const genId = () => {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;

  return count.toString();
};
