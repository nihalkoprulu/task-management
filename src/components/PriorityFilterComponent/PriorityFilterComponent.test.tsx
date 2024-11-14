import { screen } from "@testing-library/react";
import { renderComponent } from "helpers/renderComponents";
import PriorityFilterComponent from "./PriorityFilterComponent";
import { mockFilterData } from "lib/data/test/mockData";

describe("PriorityFilterComponent", () => {
  it("renders the priority select dropdown", () => {
    renderComponent(<PriorityFilterComponent />, mockFilterData);

    const selectElement = screen.getByTestId("select-priority");
    expect(selectElement).toBeInTheDocument();
  });
});
