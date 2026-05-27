import React from "react";

import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";

import "@testing-library/jest-dom";

import Header from "./Header";

// MOCK NEXT/LINK
jest.mock("next/link", () => {
  const React = require("react");

  return React.forwardRef(
    ({ children, href }: any, ref: any) => {
      return React.createElement(
        "a",
        {
          href,
          ref,
        },
        children
      );
    }
  );
});

// MOCK NEXT/IMAGE
jest.mock("next/image", () => {
  function MockImage({
    src,
    alt,
  }: {
    src: string;
    alt: string;
  }) {
    return React.createElement("img", {
      src,
      alt,
    });
  }

  return {
    __esModule: true,
    default: MockImage,
  };
});

describe("Header Component", () => {
  it("should render logo and title", () => {
    render(<Header />);

    expect(
      screen.getByAltText("Boxing Hub Logo")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Boxing Hub")
    ).toBeInTheDocument();
  });

  it("should render navigation links", () => {
    render(<Header />);

    const homeLinks =
      screen.getAllByRole("link", {
        name: /inicio/i,
      });

    expect(homeLinks[0]).toHaveAttribute(
      "href",
      "/"
    );
  });

  it("should open mobile menu", async () => {
    const { container } = render(
      <Header />
    );

    const menuIcon =
      container.querySelector(
        'svg[data-testid="MenuIcon"]'
      );

    const menuButton =
      menuIcon?.closest("button");

    expect(menuButton).toBeInTheDocument();

    fireEvent.click(menuButton!);

    const drawerLinks =
      await screen.findAllByRole(
        "link",
        {
          name: /inicio/i,
        }
      );

    expect(
      drawerLinks[0]
    ).toBeInTheDocument();
  });
});