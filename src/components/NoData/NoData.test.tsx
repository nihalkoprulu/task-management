import { screen } from "@testing-library/react";
import { renderComponent } from "helpers/renderComponents";
import NoData from "./NoData";
import { mockNoData } from "lib/data/test/mockData";

describe("NoData", () => {
  it("renders the no data container", () => {
    renderComponent(<NoData />, mockNoData);

    expect(screen.getByTestId("no-data-container")).toBeInTheDocument();
  });
});
