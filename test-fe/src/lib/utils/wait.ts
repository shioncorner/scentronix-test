/**
 * Wait for a specified amount of time.
 *
 * @param time - The amount of time to wait in milliseconds.
 * @returns A promise that resolves after the specified amount of time.
 * @example
 * await wait(1000);
 */
export const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
