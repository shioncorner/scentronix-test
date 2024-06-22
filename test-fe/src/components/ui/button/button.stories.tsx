import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    className: {
      description: 'The class name for the button.',
      control: { type: 'text' },
    },
    children: {
      description: 'The text of button',
      control: { type: 'text' },
    },
    disabled: {
      description: 'Whether the button is disabled',
      control: { type: 'boolean' },
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' },
    },
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' },
    },
  },
  args: {
    children: 'Button',
    size: 'default',
    variant: 'default',
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Disable: Story = {
  args: {
    variant: 'default',
    disabled: true,
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export default meta;
