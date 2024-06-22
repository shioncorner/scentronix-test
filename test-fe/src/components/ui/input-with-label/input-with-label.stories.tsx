import { type Meta, type StoryObj } from '@storybook/react';

import { InputWithLabel } from './index';

const meta: Meta<typeof InputWithLabel> = {
  title: 'UI/Input + Label',
  component: InputWithLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The text of label',
      control: { type: 'text' },
    },
  },
  args: {
    children: 'Username',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
