import { type Meta, type StoryObj } from '@storybook/react';

import { Icons } from '~components/shared/icons';

import { Avatar, AvatarFallback, AvatarImage } from './index';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
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
      description: 'The class name for the avatar container.',
      control: { type: 'text' },
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Avatar className='size-9'>
      <AvatarImage alt='Avatar' src='https://github.com/shioncorner.png' />

      <AvatarFallback>
        <Icons.User className='size-5' />
      </AvatarFallback>
    </Avatar>
  ),
};
