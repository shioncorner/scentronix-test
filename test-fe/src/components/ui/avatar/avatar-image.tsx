import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * A component that is used to display user's avatar.
 *
 * @param className - The class name for the avatar container.
 * @param avatarImageProps - The props to pass to the `AvatarPrimitive.Image` component.
 * @returns The avatar image.
 * @example
 * ```
 * <Avatar>
 *  <AvatarImage alt='Avatar' src='https://github.com/shioncorner.png' />
 *  <AvatarFallback>SH</AvatarFallback>
 * </Avatar
 * ```
 */
export const AvatarImage = forwardRef<
  ElementRef<typeof AvatarPrimitive.Image>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...avatarImageProps }, ref) => (
  <AvatarPrimitive.Image
    className={cn('aspect-square size-full', className)}
    ref={ref}
    {...avatarImageProps}
  />
));

AvatarImage.displayName = AvatarPrimitive.Image.displayName;
