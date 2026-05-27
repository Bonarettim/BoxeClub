import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Traz os matches como 'toBeInTheDocument'
import Footer from './Footer';

describe('Footer Component', () => {
  
  // Teste 1: Garante que o componente renderiza sem estourar nenhum erro
  it('should render the footer correctly', () => {
    render(<Footer />);
    
    // Verifica se os textos das seções principais estão na tela
    expect(screen.getByText('Programas de Treinamento')).toBeInTheDocument();
    expect(screen.getByText('Sobre Nós')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();
  });

  // Teste 2: Verifica se as informações de contato estão aparecendo
  it('should display the correct contact information', () => {
    render(<Footer />);
    
    expect(screen.getByText('Email: contact@boxinghub.com')).toBeInTheDocument();
    expect(screen.getByText('Phone: +55 19 99999-9999')).toBeInTheDocument();
    expect(screen.getByText('Campinas - SP')).toBeInTheDocument();
  });

  // Teste 3: Verifica a acessibilidade dos botões de redes sociais (MUITO IMPORTANTE)
  it('should have accessible social media buttons', () => {
    render(<Footer />);
    
    // Lembra que no seu código você colocou aria-label="Instagram"? O Jest busca por isso!
    const instagramButton = screen.getByRole('button', { name: /instagram/i });
    const youtubeButton = screen.getByRole('button', { name: /youtube/i });
    const facebookButton = screen.getByRole('button', { name: /facebook/i });

    expect(instagramButton).toBeInTheDocument();
    expect(youtubeButton).toBeInTheDocument();
    expect(facebookButton).toBeInTheDocument();
  });

  // Teste 4: Verifica o texto de direitos autorais
  it('should display the copyright text with correct year', () => {
    render(<Footer />);
    
    expect(screen.getByText(/© 2026 Boxing Hub. All rights reserved./i)).toBeInTheDocument();
  });
});