import React from "react";

import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import ContactPage from "./page";

describe("ContactPage Component", () => {
  it("should render all page sections", () => {
    render(<ContactPage />);

    expect(
      screen.getByText("Contate-nos")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Mande uma Mensagem")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Encontre-nos")
    ).toBeInTheDocument();
  });
});