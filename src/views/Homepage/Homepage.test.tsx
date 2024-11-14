import { screen } from "@testing-library/react";
import { renderComponent } from "helpers/renderComponents";
import Homepage from "./Homepage";
import { mockNoData } from "lib/data/test/mockData";

describe("Homepage", () => {
  it('renders "NoData" when there are no tasks', () => {
    renderComponent(<Homepage />, mockNoData);

    expect(screen.getByTestId("no-data-container")).toBeInTheDocument();
  });

  it("renders task components when there are tasks", () => {
    renderComponent(<Homepage />);

    expect(screen.getByTestId("task-filter")).toBeInTheDocument();
    expect(screen.getByTestId("task-list-container")).toBeInTheDocument();
  });

  it("renders the homepage container", () => {
    renderComponent(<Homepage />);

    expect(screen.getByTestId("homepage-container")).toBeInTheDocument();
  });
});
