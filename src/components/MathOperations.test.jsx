import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import MathOperations from "./MathOperations";
import userEvent from "@testing-library/user-event";

import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});
describe("MathOperations component", () => {
  it.each([
    ["25", "98", "123"],
    ["53", "35", "88"],
    ["75", "39", "114"],
  ])("adds %s + %s = %s", async (value1, value2, expected) => {
    const user = userEvent.setup();
    render(<MathOperations />);
    const num1 = screen.getByTestId("num1");
    const num2 = screen.getByTestId("num2");
    const getResult = () => {
      return screen
        .getByTestId("result")
        .textContent.replace("Result:", "")
        .trim();
    };

    const button = screen.getByRole("button", { name: /=/i });

    await user.type(num1, value1);
    await user.type(num2, value2);
    await user.click(button);
    expect(getResult()).toBe(expected);
  });

  it.each([
    ["5", "3", "15"],
    ["12", "4", "48"],
    ["7", "9", "63"],
  ])("multiplies %s × %s = %s", async (value1, value2, expected) => {
    const user = userEvent.setup();

    render(<MathOperations />);
    const num1 = screen.getByTestId("num1");
    const num2 = screen.getByTestId("num2");
    const getResult = () => {
      return screen
        .getByTestId("result")
        .textContent.replace("Result:", "")
        .trim();
    };
    const operation = screen.getByRole("option", { name: "×" });
    const button = screen.getByRole("button", { name: /=/i });

    await user.type(num1, value1);
    await user.type(num2, value2);
    await user.selectOptions(screen.getByRole("combobox"), operation);
    await user.click(button);

    expect(getResult()).toBe(expected);
  });

  it.each([
    ["57", "93", "-36"],
    ["112", "14", "98"],
    ["17", "25", "-8"],
  ])("subtracts %s - %s = %s", async (value1, value2, expected) => {
    const user = userEvent.setup();

    render(<MathOperations />);
    const num1 = screen.getByTestId("num1");
    const num2 = screen.getByTestId("num2");
    const getResult = () => {
      return screen
        .getByTestId("result")
        .textContent.replace("Result:", "")
        .trim();
    };
    const button = screen.getByRole("button", { name: /=/i });

    await user.type(num1, value1);
    await user.type(num2, value2);
    await user.selectOptions(screen.getByRole("combobox"), "-");
    await user.click(button);

    expect(getResult()).toBe(expected);
  });

  it.each([
    ["3825", "45", "85"],
    ["2457", "27", "91"],
    ["63", "7", "9"],
  ])("divides %s ÷ %s = %s", async (value1, value2, expected) => {
    const user = userEvent.setup();

    render(<MathOperations />);
    const num1 = screen.getByTestId("num1");
    const num2 = screen.getByTestId("num2");
    const getResult = () => {
      return screen
        .getByTestId("result")
        .textContent.replace("Result:", "")
        .trim();
    };
    const button = screen.getByRole("button", { name: /=/i });

    await user.type(num1, value1);
    await user.type(num2, value2);
    await user.selectOptions(screen.getByRole("combobox"), "÷");
    await user.click(button);

    expect(getResult()).toBe(expected);
  });
});
