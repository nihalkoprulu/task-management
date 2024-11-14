import { screen } from "@testing-library/react";
import { renderComponent } from "helpers/renderComponents";
import TaskFilterComponent from "./TaskFilterComponent";

describe("TaskFilterComponent", () => {
  it("renders the no data container", () => {
    renderComponent(<TaskFilterComponent />);

    expect(screen.getByTestId("task-filter")).toBeInTheDocument();
  });
});
