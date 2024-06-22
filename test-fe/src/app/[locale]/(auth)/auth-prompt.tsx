import { Icons } from '~components/shared/icons';

/**
 * The props for the AuthPrompt component.
 */
type PromptProps = {
  title: string;
  prompt: string;
};

/**
 * A component that renders a Prompt for authentication pages.
 */
export const AuthPrompt = ({ title, prompt }: PromptProps) => (
  <div className='flex flex-col space-y-2 text-center'>
    <Icons.Logo className='mx-auto size-8' />

    <h1 className='text-2xl font-semibold'>{title}</h1>

    <p className='text-sm text-muted-foreground'>{prompt}</p>
  </div>
);
