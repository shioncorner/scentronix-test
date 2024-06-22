'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { type ReactNode } from 'react';

/**
 * The props for the Template component.
 */
type TemplateProps = {
  children: ReactNode;
};

/**
 * Renders the template of the application.
 * Template create a new instance for each of their children on navigation so that the animation always runs.
 */
const Template = ({ children }: TemplateProps) => (
  <AnimatePresence>
    <motion.main
      animate={{ y: 0, opacity: 1 }}
      className='min-h-with-out-header w-full bg-background'
      initial={{ y: 20, opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {children}
    </motion.main>
  </AnimatePresence>
);

export default Template;
