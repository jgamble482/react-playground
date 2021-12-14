import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component Tests", () => {
  test("Greeting component is rendered properly", () => {
    render(<Greeting />);
    const titleElement = screen.getByText("Hello this is a Greeting");
    expect(titleElement).toBeInTheDocument();
  });

  test("Greeting componenet should remain unchanged on load to DOM", () => {
    render(<Greeting />);
    const contentElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(contentElement).toBeInTheDocument();
  });

  test("Paragraph element should change if button is clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const contentElement = screen.getByText("You did something!", {
      exact: false,
    });
    expect(contentElement).toBeInTheDocument();
  });

  test("Original paragraph is no longer visible on button click", () => {
    render(<Greeting />);
    let paragraphElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    paragraphElement = screen.queryByText("good to see you", {
        exact: false,
      });
    expect(paragraphElement).toBeNull()
  });
});
