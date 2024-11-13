import { screen, fireEvent } from "@testing-library/react";
import { renderComponent } from "helpers/renderComponents";
import Homepage from "./Homepage";
import userEvent from "@testing-library/user-event";

describe("Homepage", () => {
  const mockSetSearchTerm = jest.fn();

  it('renders "NoData" when there are no tasks', () => {
    renderComponent(<Homepage />, "noData");

    expect(screen.getByTestId("no-data-container")).toBeInTheDocument();
  });

  it("renders task components when there are tasks", () => {
    renderComponent(<Homepage />);

    expect(screen.getByTestId("task-filter")).toBeInTheDocument();
    expect(screen.getByTestId("task-list-container")).toBeInTheDocument();
  });

  it("check setSearchTerm when search term is updated", () => {
    renderComponent(<Homepage />);

    const input = screen.getByTestId("search-input");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");

    fireEvent.change(input, { target: { value: "Test" } });

    expect(input).toHaveValue("Test");
  });

  it("renders the homepage container", () => {
    renderComponent(<Homepage />);

    expect(screen.getByTestId("homepage-container")).toBeInTheDocument();
  });
});
