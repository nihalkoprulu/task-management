import { screen } from "@testing-library/react";
import { renderComponent } from "helpers/renderComponents";
import TaskListComponent from "./TaskListComponent";

describe("TaskListComponent", () => {
  it("renders the task list container", () => {
    renderComponent(<TaskListComponent />);

    expect(screen.getByTestId("task-list-container")).toBeInTheDocument();
  });
});
