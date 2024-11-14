import React, { useState, useEffect, useCallback, useContext } from "react";
import TaskFilterContext from "./TaskFilterContext";
import { ITaskType } from "utils/interfaces/task/task.interface";
import TaskContext from "contexts/TaskContext/TaskContext";

const TaskFilterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [priorityFilter, setPriorityFilter] = useState<string>(() => {
    const savedPriority = localStorage.getItem("priorityFilter");
    return savedPriority || "";
  });

  const [searchTerm, setSearchTerm] = useState<string>("");

  const { tasks } = useContext(TaskContext);

  useEffect(() => {
    localStorage.setItem("priorityFilter", priorityFilter);
  }, [priorityFilter]);

  const filterTasks = useCallback((): ITaskType[] => {
    return tasks.filter((task) => {
      const matchesPriority: boolean = priorityFilter
        ? task.priority === priorityFilter
        : true;
      const matchesSearchTerm: boolean =
        searchTerm.length > 3
          ? task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.description.toLowerCase().includes(searchTerm.toLowerCase())
          : true;

      return matchesPriority && matchesSearchTerm;
    });
  }, [tasks, searchTerm, priorityFilter]);

  const filteredTasks: ITaskType[] = filterTasks();

  return (
    <TaskFilterContext.Provider
      value={{
        priorityFilter,
        searchTerm,
        setPriorityFilter,
        setSearchTerm,
        filteredTasks,
      }}
    >
      {children}
    </TaskFilterContext.Provider>
  );
};

export default TaskFilterContextProvider;
