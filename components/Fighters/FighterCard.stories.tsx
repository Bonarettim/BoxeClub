import type {
    Meta,
    StoryObj,
  } from '@storybook/react';
  
  import FighterCard from './FighterCard';
  
  const meta: Meta<typeof FighterCard> = {
    title: 'Fighters/FighterCard',
    component: FighterCard,
  };
  
  export default meta;
  
  type Story = StoryObj<typeof FighterCard>;
  
  export const Default: Story = {
    args: {
      fighter: {
        firstName: 'Conor',
        lastName: 'McGregor',
        image:
          'https://randomuser.me/api/portraits/men/32.jpg',
        email: 'conor@ufc.com',
        address: {
          cidade: 'Dublin',
        },
      },
    },
  };