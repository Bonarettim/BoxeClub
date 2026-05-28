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
  const ReactTyped = jest.requireActual<typeof import("react")>("react");

  type MockLinkProps =
    import("react").AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
      children: import("react").ReactNode;
    };

  const MockLink = ReactTyped.forwardRef<HTMLAnchorElement, MockLinkProps>(
    ({ children, href, ...props }, ref) => {
      return ReactTyped.createElement(
        "a",
        {
          href,
          ref,
          ...props,
        },
        children
      );
    }
  );

  MockLink.displayName = "MockLink";

  return MockLink;
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

  it("should render desktop navigation links", () => {
    render(<Header />);

    expect(
      screen.getByRole("link", {
        name: /ir para a página inicial/i,
      })
    ).toHaveAttribute("href", "/");

    expect(
      screen.getByRole("link", {
        name: /lutadores/i,
      })
    ).toHaveAttribute("href", "/fighters");

    expect(
      screen.getByRole("link", {
        name: /contato/i,
      })
    ).toHaveAttribute("href", "/contact");
  });

  it("should open mobile menu", async () => {
    render(<Header />);

    const menuButton = screen.getByRole("button", {
      name: /abrir menu de navegação/i,
    });

    fireEvent.click(menuButton);

    const mobileNavigation = await screen.findByRole("navigation", {
      name: /navegação mobile/i,
    });

    expect(mobileNavigation).toBeInTheDocument();

    expect(
      screen.getAllByRole("link", {
        name: /lutadores/i,
      })[0]
    ).toBeInTheDocument();
  });
});