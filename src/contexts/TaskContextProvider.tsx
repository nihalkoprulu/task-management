// src/context/TaskContextProvider.tsx
import React, { ReactNode, useEffect, useState } from "react";
import TaskContext from "./TaskContext";
import { ITaskType } from "utils/interfaces/task/task.interface";

const TaskContextProvider = ({ children }: { children: ReactNode }) => {
  // Load tasks from localStorage on initial loading
  const [tasks, setTasks] = useState<ITaskType[]>(() => {
    const savedTasks: string | null = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage when they change

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Context functions
  const loadInitialTask = (tasks: ITaskType[]) => setTasks(tasks);
  const addTask = (task: ITaskType) => setTasks((prev) => [...prev, task]);
  const editTask = (updatedTask: ITaskType) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, loadInitialTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
