import { render, screen } from "@testing-library/react";
import AlertDialog from "./AlertDialog";
import TaskContext from "contexts/TaskContext";

const mockAddTask = jest.fn();

const mockContextValue = {
  tasks: [],
  loadInitialTask: mockAddTask,
  addTask: mockAddTask,
};

test("renders Alert Dialog", () => {
  render(
    <TaskContext.Provider value={mockContextValue}>
      <AlertDialog
        title="Test Title"
        description="Test Description"
        open={true}
        clickHandler={jest.fn()}
        clickSecondHandler={jest.fn()}
      />
    </TaskContext.Provider>
  );

  const Container: HTMLElement = screen.getByTestId(
    "alert-dialog-view-container"
  );
  expect(Container).toBeInTheDocument();
});
