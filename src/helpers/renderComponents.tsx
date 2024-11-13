import { render, RenderResult } from "@testing-library/react";
import { mockNoData, mockData } from "lib/data/test/mockData";
import TaskContext from "contexts/TaskContext/TaskContext";

type RenderOptions = "noData" | "withData";

export const renderComponent = (
  component: JSX.Element,
  option: RenderOptions = "withData"
): RenderResult => {
  const contextValue = option === "noData" ? mockNoData : mockData;

  return render(
    <TaskContext.Provider value={contextValue}>
      {component}
    </TaskContext.Provider>
  );
};
