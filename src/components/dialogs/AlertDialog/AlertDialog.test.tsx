import { screen } from "@testing-library/react";
import AlertDialog from "./AlertDialog";
import { renderComponent } from "helpers/renderComponents";

test("renders Alert Dialog", () => {
  renderComponent(
    <AlertDialog
      title="Test Title"
      description="Test Description"
      open={true}
      clickHandler={jest.fn()}
      clickSecondHandler={jest.fn()}
    />
  );

  const Container: HTMLElement = screen.getByTestId(
    "alert-dialog-view-container"
  );
  expect(Container).toBeInTheDocument();
});
