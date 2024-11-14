import { screen } from "@testing-library/react";
import TaskDialog from "./TaskDialog";
import { renderComponent } from "helpers/renderComponents";
import { mockNoData } from "lib/data/test/mockData";

const mockAddTask = jest.fn();
const mockClickHandler = jest.fn();

describe("TaskDialog", () => {
  beforeEach(() => {
    mockAddTask.mockClear();
    mockClickHandler.mockClear();
  });

  it("renders the dialog with correct fields", () => {
    renderComponent(<TaskDialog clickHandler={mockClickHandler} />);

    expect(screen.getByText(/Add New Task/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Priority/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancel/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Task/i)).toBeInTheDocument();
  });

  it("renders the dialog with the correct fields when editing a task", () => {
    renderComponent(<TaskDialog clickHandler={mockClickHandler} taskId={3} />);

    expect(screen.getByText(/Edit Task Details/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Priority/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancel/i)).toBeInTheDocument();
    expect(screen.getByText(/Update Task/i)).toBeInTheDocument();
  });
});
