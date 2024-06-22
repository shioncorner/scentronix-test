import { ENVIRONMENT } from '~constants/environment';

/**
 * A component that displays the current Tailwind breakpoint in development mode.
 * In production mode, it returns null and does not render anything.
 *
 * @returns The current Tailwind breakpoint.
 * @example
 * <TailwindIndicator />
 */
export const TailwindIndicator = () => {
  if (process.env.NODE_ENV === ENVIRONMENT.PRODUCTION) {
    return null;
  }

  return (
    <div className='fixed bottom-1 left-1 z-tailwind-indicator size-10 rounded-full bg-foreground p-3 font-mono text-xs text-background flex-center'>
      <div className='block sm:hidden'>xs</div>

      <div className='hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden'>sm</div>

      <div className='hidden md:block lg:hidden xl:hidden 2xl:hidden'>md</div>

      <div className='hidden lg:block xl:hidden 2xl:hidden'>lg</div>

      <div className='hidden xl:block 2xl:hidden'>xl</div>

      <div className='hidden 2xl:block'>2xl</div>
    </div>
  );
};
