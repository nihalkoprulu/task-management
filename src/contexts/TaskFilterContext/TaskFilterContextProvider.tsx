import React, { useState, useEffect } from "react";
import TaskFilterContext from "./TaskFilterContext";

const TaskFilterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [priorityFilter, setPriorityFilter] = useState<string>(() => {
    const savedPriority = localStorage.getItem("priorityFilter");
    return savedPriority || "";
  });

  useEffect(() => {
    localStorage.setItem("priorityFilter", priorityFilter);
  }, [priorityFilter]);

  return (
    <TaskFilterContext.Provider value={{ priorityFilter, setPriorityFilter }}>
      {children}
    </TaskFilterContext.Provider>
  );
};

export default TaskFilterContextProvider;
