import React, { ReactNode } from "react";
import TaskContextProvider from "./TaskContext/TaskContextProvider";
import TaskFilterContextProvider from "./TaskFilterContext/TaskFilterContextProvider";

const TaskContextCombinedProvider = ({ children }: { children: ReactNode }) => (
  <TaskContextProvider>
    <TaskFilterContextProvider>{children}</TaskFilterContextProvider>
  </TaskContextProvider>
);

export default TaskContextCombinedProvider;
