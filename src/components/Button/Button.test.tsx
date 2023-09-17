import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renders button", () => {
    render(<Button data-testid="button">Hello</Button>);
    const button = screen.getByRole("button", { name: /hello/i });
    expect(button).toHaveTextContent("Hello");
  });

  it("passes on click", async () => {
    const mockOnClickHandler = vi.fn();
    render(<Button onClick={mockOnClickHandler}>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    await userEvent.click(button);
    expect(mockOnClickHandler).toHaveBeenCalledOnce();
  });
});
