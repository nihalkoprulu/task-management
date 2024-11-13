import { render, screen } from "@testing-library/react";
import TaskListComponent from "./TaskListComponent";

test("renders the task filter container", () => {
  render(<TaskListComponent />);

  const Container: HTMLElement = screen.getByTestId("task-list-container");
  expect(Container).toBeInTheDocument();
});
