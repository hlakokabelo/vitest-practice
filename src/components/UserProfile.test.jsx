import { render, screen, waitFor } from "@testing-library/react";
import UserProfile from "./UserProfile";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("UserProfile", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.resetAllMocks();
  });

  it("fetches and displays the user data", async () => {
    fetch.mockResolvedValueOnce({
      json: async () => ({
        id: 4,
        name: "John",
        email: "john@gmail.com",
      }),
    });

    render(<UserProfile userId={4} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /john/i }),
      ).toBeInTheDocument();

      expect(screen.getByText(/john@gmail.com/i)).toBeInTheDocument();
    });
  });
});
