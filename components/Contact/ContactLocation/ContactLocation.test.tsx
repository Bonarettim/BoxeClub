import React from "react";

import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import ContactLocation from "./ContactLocation";

describe("ContactLocation Component", () => {
  // TESTE 1
  it("should render section title correctly", () => {
    render(<ContactLocation />);

    expect(
      screen.getByText("Encontre-nos")
    ).toBeInTheDocument();
  });

  // TESTE 2
  it("should render google maps iframe", () => {
    render(<ContactLocation />);

    const iframe = screen.getByTitle(
      "Boxing Academy Location"
    );

    expect(iframe).toBeInTheDocument();
  });

  // TESTE 3
  it("should render contact information", () => {
    render(<ContactLocation />);

    expect(
      screen.getByText("📍 Campinas - São Paulo")
    ).toBeInTheDocument();

    expect(
      screen.getByText("🥊 Boxing Hub Academy")
    ).toBeInTheDocument();

    expect(
      screen.getByText("📞 +55 19 99999-9999")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "🕒 Segunda - Sábado | 06:00 AM - 10:00 PM"
      )
    ).toBeInTheDocument();
  });

  // TESTE 4
  it("should render iframe with correct src", () => {
    render(<ContactLocation />);

    const iframe = screen.getByTitle(
      "Boxing Academy Location"
    );

    expect(iframe).toHaveAttribute(
      "src",
      expect.stringContaining("maps.google.com")
    );
  });
});