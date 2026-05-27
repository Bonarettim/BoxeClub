import React from 'react';

import {
  render,
  screen,
  waitFor,
} from '@testing-library/react';

import '@testing-library/jest-dom';

import FightersPage from './page';

import { getFighters } from '@/services/fighters.service';

// MOCK DO SERVICE
jest.mock('@/services/fighters.service', () => ({
  getFighters: jest.fn(),
}));

describe('FightersPage Component', () => {
  const mockFighters = [
    {
      id: '1',
      firstName: 'Mike',
      lastName: 'Tyson',
      image: 'https://image.com/mike.jpg',
      email: 'mike@boxing.com',
      address: {
        city: 'New York',
      },
    },

    {
      id: '2',
      firstName: 'Anderson',
      lastName: 'Silva',
      image: 'https://image.com/anderson.jpg',
      email: 'anderson@boxing.com',
      address: {
        city: 'São Paulo',
      },
    },
  ];

  beforeEach(() => {
    (getFighters as jest.Mock).mockResolvedValue(
      mockFighters
    );
  });

  // TESTE 1
  it('should render page title', async () => {
    render(<FightersPage />);

    await waitFor(() => {
      expect(
        screen.getByText(
          'Melhores Momentos da Liga dos Campeões'
        )
      ).toBeInTheDocument();
    });
    })
    

  // TESTE 2
  it('should render statistics cards', async () => {
    render(<FightersPage />);

    expect(
      screen.getByText('Lutadores Profissionais')
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByText('Vitorias')
      ).toBeInTheDocument();
     })
    

    await waitFor(() => { 
      expect(
        screen.getByText('Campeões Nacionais')
      ).toBeInTheDocument();
    })
    
   

    await waitFor(() => { 
      expect(
        screen.getByText('Títulos Internacionais')
      ).toBeInTheDocument();
    });
    })

   

  // TESTE 3
  it('should show loading initially',  async () => {
    render(<FightersPage />);

    await waitFor(() => {
      expect(
        screen.getByRole('progressbar')
      ).toBeInTheDocument();
    });
    })
    

  // TESTE 4
  it('should render fighters after api call', async () => {
    render(<FightersPage />);
  
    await waitFor(() => {
      expect(
        screen.getByText('Mike Tyson')
      ).toBeInTheDocument();
    });
  }); 

  // TESTE 5
  it('should call getFighters service', async () => {
    render(<FightersPage />);

    await waitFor(() => {
      expect(getFighters).toHaveBeenCalled();
    });
  });
});