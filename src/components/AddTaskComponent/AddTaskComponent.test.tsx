import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AddTaskComponent from "./AddTaskComponent";
import TaskContext from "contexts/TaskContext";
import { mockContextValue } from "lib/data/test/mockData";

describe("AddTaskComponent", () => {
  it("renders the Add Task button", () => {
    render(
      <TaskContext.Provider value={mockContextValue}>
        <AddTaskComponent />
      </TaskContext.Provider>
    );

    const addTaskButton = screen.getByText(/Add Task/i);
    expect(addTaskButton).toBeInTheDocument();
  });

  it("opens the AddTaskDialog when the Add Task button is clicked", async () => {
    render(
      <TaskContext.Provider value={mockContextValue}>
        <AddTaskComponent />
      </TaskContext.Provider>
    );

    const addTaskButton = screen.getByTestId("add-task-button");
    fireEvent.click(addTaskButton);

    await waitFor(() => {
      expect(
        screen.getByTestId("add-task-dialog-container")
      ).toBeInTheDocument();
    });
  });
});
