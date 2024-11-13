import { render } from "@testing-library/react";
import { mockContextValue } from "lib/data/test/mockData";
import TaskContext from "contexts/TaskContext/TaskContext";

export const renderComponent: (component: JSX.Element) => any = (component) =>
  render(
    <TaskContext.Provider value={mockContextValue}>
      {component}
    </TaskContext.Provider>
  );
