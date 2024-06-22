import { type ReactNode } from 'react';

/**
 * The props for the AuthContainer component.
 */
type ContainerProps = {
  children: ReactNode;
};

/**
 * A component that renders a Container for authentication pages.
 */
export const AuthContainer = ({ children }: ContainerProps) => (
  <div className='container py-5 flex-center'>
    <div className='flex w-sign-in flex-col space-y-6'>{children}</div>
  </div>
);
