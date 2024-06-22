import { auth } from '~auth';

/**
 * Retrieves the current user from the authentication session.
 */
export const getCurrentUser = async () => {
  const session = await auth();

  return session?.user;
};
