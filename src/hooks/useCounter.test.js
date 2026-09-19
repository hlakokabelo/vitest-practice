import { act, renderHook } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { useCounter } from "./useCounter";

describe("useCounter Hook", () => {
  it("initial value is 5", async () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });

  it("increments", async () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => result.current.increment());
    expect(result.current.count).toBe(6);
  });

  it("decrements", async () => {
    const { result } = renderHook(() => useCounter(5));

    act(() => result.current.decrement());
    expect(result.current.count).toBe(4);

    act(() => result.current.decrement());
    expect(result.current.count).toBe(3);
  });
});
