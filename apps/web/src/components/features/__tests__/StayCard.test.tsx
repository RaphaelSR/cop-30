import { describe, it, expect, vi } from "vitest";
import { render, screen } from "../../../test/test-utils";
import { StayCard } from "../StayCard";
import { mockListings } from "../../../data/listings";

describe("StayCard", () => {
  const mockListing = mockListings[0];
  const mockOnClick = () => {};

  it("renders stay card with basic information", () => {
    render(<StayCard listing={mockListing} onClick={mockOnClick} />);

    expect(screen.getByText(mockListing.title)).toBeInTheDocument();
    expect(screen.getByText(mockListing.subtitle)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockListing.currency}${mockListing.price}`)
    ).toBeInTheDocument();
  });

  it("displays host information", () => {
    render(<StayCard listing={mockListing} onClick={mockOnClick} />);

    expect(screen.getByText(mockListing.host.name)).toBeInTheDocument();
  });

  it("shows verified badge for verified hosts", () => {
    const verifiedListing = {
      ...mockListing,
      host: { ...mockListing.host, verified: true }
    };
    render(<StayCard listing={verifiedListing} onClick={mockOnClick} />);

    expect(screen.getByText("Verificado")).toBeInTheDocument();
  });

  it("displays amenities", () => {
    render(<StayCard listing={mockListing} onClick={mockOnClick} />);

    // Should show first 3 amenities
    mockListing.amenities.slice(0, 3).forEach((amenity) => {
      expect(screen.getByText(amenity)).toBeInTheDocument();
    });
  });

  it("calls onClick when card is clicked", () => {
    const mockOnClickFn = vi.fn();
    render(<StayCard listing={mockListing} onClick={mockOnClickFn} />);

    const card = screen.getByRole("button");
    card.click();

    expect(mockOnClickFn).toHaveBeenCalledTimes(1);
  });
});
