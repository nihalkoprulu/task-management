import React, { useEffect, useState } from "react";
import TaskContext from "./TaskContext";
import { ITaskType } from "utils/interfaces/task/task.interface";

const TaskContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<ITaskType[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const loadInitialTask: (tasks: ITaskType[]) => void = (tasks) =>
    setTasks(tasks);

  const addTask: (task: ITaskType) => void = (task) =>
    setTasks((prev) => [...prev, task]);

  const editTask: (updatedTask: ITaskType) => void = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };
  const deleteTask: (id: number) => void = (id) =>
    setTasks((prev) => prev.filter((task) => task.id !== id));

  return (
    <TaskContext.Provider
      value={{ tasks, loadInitialTask, addTask, editTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
