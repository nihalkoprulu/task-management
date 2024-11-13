import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app container", () => {
  render(<App />);
  const AppContainer: HTMLElement = screen.getByTestId("app-container");
  expect(AppContainer).toBeInTheDocument();
});
