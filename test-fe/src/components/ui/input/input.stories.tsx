import { type Meta, type StoryObj } from '@storybook/react';

import { Input } from './index';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'The class name for the input.',
      control: { type: 'text' },
    },
    type: {
      description: 'The type of input.',
      options: ['text', 'password'],
      control: { type: 'select' },
    },
  },
  args: {
    type: 'text',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
  },
};

export const Placeholder: Story = {
  args: {
    type: 'text',
    placeholder: 'Email',
  },
};

export const Disable: Story = {
  args: {
    type: 'text',
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
  },
};
