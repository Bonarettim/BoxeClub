import React from "react";

import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";

import "@testing-library/jest-dom";

import ContactForm from "./ContactForm";

describe("ContactForm Component", () => {
  // TESTE 1
  it("should render form title correctly", () => {
    render(<ContactForm />);

    expect(
      screen.getByText("Mande uma Mensagem")
    ).toBeInTheDocument();
  });

  // TESTE 2
  it("should render all form fields", () => {
    render(<ContactForm />);

    expect(
      screen.getByLabelText("Name")
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Email")
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Descrição")
    ).toBeInTheDocument();
  });

  // TESTE 3
  it("should show validation errors when fields are empty", async () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole("button", {
      name: /enviar/i,
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getAllByText("Campo obrigatório")
      ).toHaveLength(3);
    });
  });

  // TESTE 4
  it("should show invalid email message", async () => {
    render(<ContactForm />);

    const emailInput = screen.getByLabelText("Email");

    fireEvent.change(emailInput, {
      target: {
        value: "emailinvalido",
      },
    });

    const submitButton = screen.getByRole("button", {
      name: /enviar/i,
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText("Email Invalido")
      ).toBeInTheDocument();
    });
  });

  // TESTE 5
  it("should submit form successfully", async () => {
    window.alert = jest.fn();

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: {
        value: "Matheus",
      },
    });

    fireEvent.change(screen.getByLabelText("Email"), {
      target: {
        value: "matheus@email.com",
      },
    });

    fireEvent.change(screen.getByLabelText("Descrição"), {
      target: {
        value: "Mensagem de teste válida",
      },
    });

    const submitButton = screen.getByRole("button", {
      name: /enviar/i,
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        "Mensagem Enviada com sucesso!"
      );
    });
  });
});