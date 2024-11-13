import { fireEvent, screen, waitFor } from "@testing-library/react";
import AddTaskComponent from "./AddTaskComponent";
import { renderComponent } from "helpers/renderComponents";

describe("AddTaskComponent", () => {
  it("renders the Add Task button", () => {
    renderComponent(<AddTaskComponent />);

    const addTaskButton = screen.getByText(/Add Task/i);
    expect(addTaskButton).toBeInTheDocument();
  });

  it("opens the AddTaskDialog when the Add Task button is clicked", async () => {
    renderComponent(<AddTaskComponent />);

    const addTaskButton = screen.getByTestId("add-task-button");
    fireEvent.click(addTaskButton);

    await waitFor(() => {
      expect(
        screen.getByTestId("add-task-dialog-container")
      ).toBeInTheDocument();
    });
  });
});
