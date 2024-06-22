import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '~lib/utils/cn';

/**
 * The props for the Splash component.
 */
type SplashProps = ComponentPropsWithoutRef<'div'>;

/**
 * A component that displays a loading screen
 */
export const Splash = ({ className }: SplashProps) => (
  <div className={cn('min-h-screen bg-background p-5 flex-center', className)}>
    <div className='flex space-x-2'>
      <div className='size-3 animate-bounce rounded-full bg-foreground [animation-delay:-0.3s]' />

      <div className='size-3 animate-bounce rounded-full bg-foreground [animation-delay:-0.15s]' />

      <div className='size-3 animate-bounce rounded-full bg-foreground' />
    </div>
  </div>
);
