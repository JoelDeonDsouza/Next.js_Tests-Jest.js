import { render, screen } from "@testing-library/react";
// Render Component //
import Home from "@/app/page";

describe("Home Page - Renderings", () => {
  // Text rendering function tests //
  it("should render the home page h1 text", () => {
    render(<Home />);
    // screen.getByText("Hello World");
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
  //  Buttons rendering function tests //
  it("should render Button in the home page", () => {
    render(<Home />);
    screen.getByRole("button");
    expect(
      screen.getByRole("button", { name: "Click here" })
    ).toBeInTheDocument();
  });
  //  input function tests //
  it("should render input in the home page", () => {
    render(<Home />);
    // expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
  });
});
