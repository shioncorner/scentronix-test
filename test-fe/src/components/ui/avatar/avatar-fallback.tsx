import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A component that is used when a user's avatar image is not available or fails to load.
 * It provides a fallback UI, which could be a default avatar image, a user's initials, or any other placeholder representation.
 * This ensures that even when the avatar image is missing, there is still some form of user representation in the UI.
 *
 * @param className - The class name for the fallback container.
 * @param avatarFallbackProps - The props to pass to the `AvatarPrimitive.Fallback` component.
 * @returns The avatar fallback.
 * @example
 * ```
 * <Avatar>
 *  <AvatarImage alt='Avatar' src='https://github.com/shioncorner.png' />
 *  <AvatarFallback>SH</AvatarFallback>
 * </Avatar
 * ```
 */
export const AvatarFallback = forwardRef<
  ElementRef<typeof AvatarPrimitive.Fallback>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...avatarFallbackProps }, ref) => (
  <AvatarPrimitive.Fallback
    className={cn('size-full rounded-full bg-muted flex-center', className)}
    ref={ref}
    {...avatarFallbackProps}
  />
));

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
