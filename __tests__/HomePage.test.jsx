import { render, screen } from "@testing-library/react";
// Render Component //
import Home from "@/app/page";
// test library //
import userEvent  from "@testing-library/user-event";

describe("Home Page - Renderings", () => {

  //* Test that checks elements are rendered correctly *//
  describe("Renderings", () => {
    // Text rendering function tests //
    it("should render the home page h1 text", () => {
      render(<Home />);
      // screen.getByText("Hello World");
      expect(screen.getByText("Hello World")).toBeInTheDocument();
    });
    //  Buttons rendering function tests //
    it("should render Button in the home page", () => {
      render(<Home />);
      // screen.getByRole("button");
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

    // state tests //
    it("should renderelement when the state changes", () => {
      render(<Home />);
      expect(screen.queryByText("textbox")).not.toBeInTheDocument();
    });
  });

    //* Test that checks changes in state *//
  describe('Behaviour', () => {
     it('should render button when the state changes', async() => {
      render(<Home />);
      expect(screen.queryByText("Click here!")).not.toBeInTheDocument();
      const displayBtn = screen.getByRole('button', {name:'Privacy*'});
      await userEvent.click(displayBtn);
      expect(screen.getByText("Click here!")).toBeInTheDocument();
     });
  })
});
