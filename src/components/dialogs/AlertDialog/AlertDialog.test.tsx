import { render, screen } from "@testing-library/react";
import AlertDialog from "./AlertDialog";
import TaskContext from "contexts/TaskContext";
import { mockContextValue } from "lib/data/test/mockData";

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
