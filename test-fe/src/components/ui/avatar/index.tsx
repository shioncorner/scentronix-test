import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

export { AvatarFallback } from './avatar-fallback';
export { AvatarImage } from './avatar-image';

/**
 * A component that is used to display user's avatar.
 *
 * @param className - The class name for the avatar container.
 * @param avatarProps - The props to pass to the `AvatarPrimitive.Root` component.
 * @returns The avatar.
 * @example
 * ```
 * <Avatar>
 *  <AvatarImage alt='Avatar' src='https://github.com/shioncorner.png' />
 *  <AvatarFallback>SH</AvatarFallback>
 * </Avatar>
 * ```
 */
export const Avatar = forwardRef<
  ElementRef<typeof AvatarPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...avatarProps }, ref) => (
  <AvatarPrimitive.Root
    className={cn('relative flex size-10 shrink-0 overflow-hidden rounded-full', className)}
    ref={ref}
    {...avatarProps}
  />
));

Avatar.displayName = AvatarPrimitive.Root.displayName;
