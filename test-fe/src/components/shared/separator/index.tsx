/**
 * The props for the Separator component.
 */
type SeparatorProps = {
  message?: string;
};

/**
 * A component that renders a Separator.
 *
 * @param message - The message to display
 * @example
 * <Separator message='or' />
 */
export const Separator = ({ message }: SeparatorProps) => (
  <div className='relative'>
    <div className='absolute inset-0 flex items-center'>
      <span className='w-full border-t' />
    </div>

    {message ? (
      <div className='relative text-xs uppercase flex-center'>
        <span className='bg-background px-2 text-muted-foreground'>{message}</span>
      </div>
    ) : null}
  </div>
);
