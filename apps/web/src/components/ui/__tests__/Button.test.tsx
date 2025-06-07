import { describe, it, expect, vi } from "vitest";
import { render, screen } from "../../../test/test-utils";
import { Button } from "../Button";

describe("Button Component", () => {
  describe("Basic Rendering", () => {
    it("should render button with text", () => {
      render(<Button>Click here</Button>);

      expect(
        screen.getByRole("button", { name: /click here/i })
      ).toBeInTheDocument();
    });

    it("should apply correct Mantine classes by default", () => {
      render(<Button>Button</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("mantine-Button-root");
    });
  });

  describe("Style Variants", () => {
    it("should apply primary style by default", () => {
      render(<Button>Primary</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-variant", "filled");
    });

    it("should apply secondary style when specified", () => {
      render(<Button variant="secondary">Secondary</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-variant", "filled");
    });

    it("should apply outline style when specified", () => {
      render(<Button variant="outline">Outline</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-variant", "outline");
    });
  });

  describe("Sizes", () => {
    it("should apply medium size by default", () => {
      render(<Button>Medium</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-size", "md");
    });

    it("should apply small size when specified", () => {
      render(<Button size="sm">Small</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-size", "sm");
    });

    it("should apply large size when specified", () => {
      render(<Button size="lg">Large</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-size", "lg");
    });
  });

  describe("States", () => {
    it("should be enabled by default", () => {
      render(<Button>Enabled</Button>);

      const button = screen.getByRole("button");
      expect(button).not.toBeDisabled();
      expect(button).not.toHaveClass("opacity-50", "cursor-not-allowed");
    });

    it("should be disabled when specified", () => {
      render(<Button disabled>Disabled</Button>);

      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute("data-disabled", "true");
    });
  });

  describe("Interactions", () => {
    it("should call onClick when clicked", async () => {
      const handleClick = vi.fn();
      const { user } = render(<Button onClick={handleClick}>Clickable</Button>);

      const button = screen.getByRole("button");
      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("should not call onClick when disabled", async () => {
      const handleClick = vi.fn();
      const { user } = render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>
      );

      const button = screen.getByRole("button");
      await user.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("Accessibility", () => {
    it("should have correct button role", () => {
      render(<Button>Accessible</Button>);

      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should support custom aria-label", () => {
      render(<Button aria-label="Custom button">Icon</Button>);

      const button = screen.getByRole("button", { name: /custom button/i });
      expect(button).toBeInTheDocument();
    });

    it("should have visible focus", () => {
      render(<Button>Focusable</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("mantine-Button-root");
    });
  });

  describe("Customization", () => {
    it("should accept custom className", () => {
      render(<Button className="custom-class">Custom</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("custom-class");
    });

    it("should pass additional props to button element", () => {
      render(<Button data-testid="custom-button">With data-testid</Button>);

      expect(screen.getByTestId("custom-button")).toBeInTheDocument();
    });
  });
});
