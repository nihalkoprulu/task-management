import { render, RenderResult } from "@testing-library/react";
import TaskContext from "contexts/TaskContext/TaskContext";
import { mockData } from "lib/data/test/mockData";

export const renderComponent = (
  component: JSX.Element,
  values?: any
): RenderResult => {
  const value = values || mockData;
  return render(
    <TaskContext.Provider value={value}>{component}</TaskContext.Provider>
  );
};
