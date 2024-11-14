import { fireEvent, screen } from "@testing-library/react";
import { renderComponent } from "helpers/renderComponents";
import TaskMenu from "./TaskMenu";

describe("TaskMenuComponent", () => {
  it("renders the task menu and opens when the button is clicked", () => {
    renderComponent(<TaskMenu taskId={3} />);

    expect(screen.getByTestId("task-menu-container")).toBeInTheDocument();

    const moreMenu = screen.getByTestId("task-menu-button");
    fireEvent.click(moreMenu);

    const deleteMenuItem = screen.getByText("Delete");
    fireEvent.click(deleteMenuItem);

    const editMenuItem = screen.getByText("Edit");
    fireEvent.click(editMenuItem);
  });

  it("opens the Delete confirmation dialog when the Delete menu item is clicked", async () => {
    renderComponent(<TaskMenu taskId={3} />);

    const moreMenu = screen.getByTestId("task-menu-button");
    fireEvent.click(moreMenu);

    const deleteMenuItem = screen.getByText("Delete");
    fireEvent.click(deleteMenuItem);

    const alertDialog: HTMLElement = screen.getByTestId(
      "alert-dialog-view-container"
    );
    expect(alertDialog).toBeInTheDocument();
  });

  it("opens the Edit dialog when the Edit menu item is clicked", async () => {
    renderComponent(<TaskMenu taskId={3} />);

    const moreMenu = screen.getByTestId("task-menu-button");
    fireEvent.click(moreMenu);

    const editMenuItem = screen.getByText("Edit");
    fireEvent.click(editMenuItem);

    const dialog: HTMLElement = screen.getByTestId("dialog-view-container");
    expect(dialog).toBeInTheDocument();
  });
});
