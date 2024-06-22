import { prisma } from '~prisma/client';

/**
 * Get a user by their id from the database.
 *
 * @param id - The id of the user to get.
 * @returns The user with the given id, or null if no user was found
 */
export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};

/**
 * Get a user by their email from the database.
 *
 * @param email - The email of the user to get.
 * @returns The user with the given email, or null if no user was found
 */
export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};
