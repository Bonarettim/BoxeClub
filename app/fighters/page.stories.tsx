import type { Meta, StoryObj } from '@storybook/react';
import FightersPage from '@/app/fighters/page';

const mockFighters = [
  {
    id: '1',
    firstName: 'Conor',
    lastName: 'McGregor',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    email: 'conor@ufc.com',
    address: { city: 'Dublin' },
  },
  {
    id: '2',
    firstName: 'Charles',
    lastName: 'do Bronx',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    email: 'charles@ufc.com',
    address: { city: 'São Paulo' },
  },
  {
    id: '3',
    firstName: 'Jon',
    lastName: 'Jones',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    email: 'jonny@ufc.com',
    address: { city: 'Albuquerque' },
  },
];

const meta: Meta<typeof FightersPage> = {
  title: 'Pages/FightersPage',
  component: FightersPage,
};

export default meta;

type Story = StoryObj<typeof FightersPage>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [],
    },
  },
  beforeEach: () => {
    const originalFetch = window.fetch;
    window.fetch = async () =>
      new Response(JSON.stringify(mockFighters), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    
    return () => {
      window.fetch = originalFetch;
    };
  },
};
