import type { Meta, StoryObj } from '@storybook/react';
import FightersPage from '@/app/fighters/page';

// 1. Criamos dados falsos idênticos ao que sua API retornaria
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

// Cenário 1: Estado de Sucesso (Com a lista carregada)
export const Default: Story = {
  parameters: {
    // Se você estiver usando MSW para interceptar requisições HTTP:
    msw: {
      handlers: [],
    },
  },
  beforeEach: () => {
    // Técnica simples para interceptar o fetch global se o seu service usar o fetch nativo
    const originalFetch = window.fetch;
    window.fetch = async () =>
      new Response(JSON.stringify(mockFighters), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    
    // Restaura o fetch original quando a story desmontar
    return () => {
      window.fetch = originalFetch;
    };
  },
};
