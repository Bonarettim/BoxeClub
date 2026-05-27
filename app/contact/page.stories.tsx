import type { Meta, StoryObj } from '@storybook/react';
import ContactPage from './page';

const meta: Meta<typeof ContactPage> = {
  title: 'Pages/ContactPage',
  component: ContactPage,
};

export default meta;

type Story = StoryObj<typeof ContactPage>;

export const Default: Story = {};