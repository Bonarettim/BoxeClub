import React from 'react';

import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';

import '@testing-library/jest-dom';

import ContactPage from './page';

describe('ContactPage Component', () => {
  // TESTE 1
  it('should render page titles correctly', () => {
    render(<ContactPage />);

    expect(
      screen.getByText('Contate-nos')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Mande uma Mensagem')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Encontre-nos')
    ).toBeInTheDocument();
  });

  // TESTE 2
  it('should render form fields', () => {
    render(<ContactPage />);

    expect(
      screen.getByLabelText('Name')
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText('Email')
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText('Descrição')
    ).toBeInTheDocument();
  });

  // TESTE 3
  it('should show validation errors when fields are empty', async () => {
    render(<ContactPage />);

    const submitButton = screen.getByRole('button', {
      name: /envie/i,
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getAllByText('Campo obrigatório')
      ).toHaveLength(3);
    });
  });

  // TESTE 4
  it('should show invalid email message', async () => {
    render(<ContactPage />);

    const emailInput = screen.getByLabelText('Email');

    fireEvent.change(emailInput, {
      target: {
        value: 'emailinvalido',
      },
    });

    const submitButton = screen.getByRole('button', {
      name: /envie/i,
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText('Email Invalido')
      ).toBeInTheDocument();
    });
  });

  // TESTE 5
  it('should render google maps iframe', () => {
    render(<ContactPage />);

    const iframe = screen.getByTitle(
      'Boxing Academy Location'
    );

    expect(iframe).toBeInTheDocument();
  });

  // TESTE 6
  it('should render contact information', () => {
    render(<ContactPage />);

    expect(
      screen.getByText('📍 Campinas - São Paulo')
    ).toBeInTheDocument();

    expect(
      screen.getByText('🥊 Boxing Hub Academy')
    ).toBeInTheDocument();

    expect(
      screen.getByText('📞 +55 19 99999-9999')
    ).toBeInTheDocument();
  });
});