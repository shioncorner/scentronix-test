import { type Meta, type StoryObj } from '@storybook/react';

import { Label } from './index';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
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
      description: 'The class name for the label.',
      control: { type: 'text' },
    },
    children: {
      description: 'The text of label',
      control: { type: 'text' },
    },
  },
  args: {
    children: 'Label',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
