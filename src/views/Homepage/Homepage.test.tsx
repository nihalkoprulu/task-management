import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";

test("renders the homepage container", () => {
  render(<Homepage />);
  const Container: HTMLElement = screen.getByTestId("homepage-container");
  expect(Container).toBeInTheDocument();
});
