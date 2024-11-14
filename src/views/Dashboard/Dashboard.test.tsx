import { screen } from "@testing-library/react";
import { renderComponent } from "helpers/renderComponents";
import Dashboard from "./Dashboard";
import { mockNoData } from "lib/data/test/mockData";

describe("Dashboard", () => {
  it('renders "NoData" when there are no tasks', () => {
    renderComponent(<Dashboard />, mockNoData);

    expect(screen.getByTestId("no-data-container")).toBeInTheDocument();
  });

  it("renders task components when there are tasks", () => {
    renderComponent(<Dashboard />);

    expect(screen.getByTestId("task-filter")).toBeInTheDocument();
    expect(screen.getByTestId("task-list-container")).toBeInTheDocument();
  });

  it("renders the dashboard container", () => {
    renderComponent(<Dashboard />);

    expect(screen.getByTestId("dashboard-container")).toBeInTheDocument();
  });
});
