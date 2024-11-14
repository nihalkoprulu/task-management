import { screen } from "@testing-library/react";
import { renderComponent } from "helpers/renderComponents";
import { mockFilterData } from "lib/data/test/mockData";
import SearchBarComponent from "./SearchBarComponent";

describe("SearchBarComponent", () => {
  it("check search input there", () => {
    renderComponent(<SearchBarComponent />, mockFilterData);

    const input = screen.getByTestId("search-input") as HTMLInputElement;

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });
});
