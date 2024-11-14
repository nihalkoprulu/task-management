import { screen } from "@testing-library/react";
import { renderComponent } from "helpers/renderComponents";
import DialogView from "./DialogView";

test("renders Dialog View", () => {
  renderComponent(
    <DialogView open={true} clickHandler={jest.fn()} dialogContent={<></>} />
  );

  const Container: HTMLElement = screen.getByTestId("dialog-view-container");
  expect(Container).toBeInTheDocument();
});
