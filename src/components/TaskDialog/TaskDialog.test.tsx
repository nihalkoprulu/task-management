import { screen } from "@testing-library/react";
import TaskDialog from "./TaskDialog";
import { renderComponent } from "helpers/renderComponents";

const mockAddTask = jest.fn();
const mockClickHandler = jest.fn();

describe("TaskDialog", () => {
  beforeEach(() => {
    mockAddTask.mockClear();
    mockClickHandler.mockClear();
  });

  it("renders the dialog with correct fields", () => {
    renderComponent(<TaskDialog clickHandler={mockClickHandler} />);

    expect(screen.getByText(/Add a new task/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Priority/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancel/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Task/i)).toBeInTheDocument();
  });
});
