import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Greeting component", () => {
  it("renders a defaut greetings", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  it.each(["Alice", "Mother of Dragons"])(
    "renders greetings with name :%s",
    (name) => {
      render(<Greeting name={name} />);
      expect(screen.getByText(`Hello, ${name}!`)).toBeInTheDocument();
    },
  );
});
