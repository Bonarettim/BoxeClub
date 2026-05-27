import React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import FighterCard from './FighterCard';

describe('FighterCard Component', () => {
  const mockFighter = {
    firstName: 'Mike',
    id: '1',
    lastName: 'Tyson',
    image: 'https://image.com/mike.jpg',
    email: 'mike@boxing.com',
    address: {
      city: 'New York',
    },
  };

  // TESTE 1
  it('should render fighter full name', () => {
    render(<FighterCard fighter={mockFighter} />);

    expect(
      screen.getByText('Mike Tyson')
    ).toBeInTheDocument();
  });

  // TESTE 2
  it('should render fighter email', () => {
    render(<FighterCard fighter={mockFighter} />);

    expect(
      screen.getByText('mike@boxing.com')
    ).toBeInTheDocument();
  });

  // TESTE 3
  it('should render fighter cidade', () => {
    render(<FighterCard fighter={mockFighter} />);

    expect(
      screen.getByText('Cidade: New York')
    ).toBeInTheDocument();
  });

  // TESTE 4
  it('should render fighter image with correct alt', () => {
    render(<FighterCard fighter={mockFighter} />);

    const image = screen.getByAltText('Mike');

    expect(image).toBeInTheDocument();

    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('mike.jpg')
    );
  });
});