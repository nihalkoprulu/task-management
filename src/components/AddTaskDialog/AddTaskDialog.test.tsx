import { render, screen } from "@testing-library/react";
import AddTaskDialog from "./AddTaskDialog";
import TaskContext from "contexts/TaskContext";

const mockAddTask = jest.fn();
const mockClickHandler = jest.fn();

const mockContextValue = {
  tasks: [],
  loadInitialTask: mockAddTask,
  addTask: mockAddTask,
};

describe("AddTaskDialog", () => {
  beforeEach(() => {
    mockAddTask.mockClear();
    mockClickHandler.mockClear();
  });

  it("renders the dialog with correct fields", () => {
    render(
      <TaskContext.Provider value={mockContextValue}>
        <AddTaskDialog clickHandler={mockClickHandler} />
      </TaskContext.Provider>
    );

    expect(screen.getByText(/Add a new task/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Priority/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancel/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Task/i)).toBeInTheDocument();
  });
});
