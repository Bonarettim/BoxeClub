import React from "react";

import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import HomePage from "./page";

describe("HomePage Component", () => {
  // TESTE 1
  it("should render hero section correctly", () => {
    render(<HomePage />);

    expect(
      screen.getByText(
        "Vire um campeão com a Boxing Hub"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Treine com os melhores boxeadores e melhore seu desempenho todos os dias."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /inicie o treino/i,
      })
    ).toBeInTheDocument();
  });

  // TESTE 2
  it("should render academy section title", () => {
    render(<HomePage />);

    expect(
      screen.getByText("Nossa Academia")
    ).toBeInTheDocument();
  });

  // TESTE 3
  it("should render all academy images", () => {
    render(<HomePage />);

    const images = screen.getAllByAltText(
      "Boxing academy"
    );

    expect(images).toHaveLength(3);
  });
});