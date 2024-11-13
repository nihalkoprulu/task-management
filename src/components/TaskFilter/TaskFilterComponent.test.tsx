import { render, screen } from "@testing-library/react";
import TaskFilterComponent from "./TaskFilterComponent";

test("renders the task filter container", () => {
  render(<TaskFilterComponent />);

  const Container: HTMLElement = screen.getByTestId("task-filter-container");
  expect(Container).toBeInTheDocument();
});
