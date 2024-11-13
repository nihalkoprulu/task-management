import React from "react";
import TaskContext from "./TaskContext";
import { ITaskType } from "utils/interfaces/task/task.interface";

const TaskContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = React.useState<ITaskType[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const loadInitialTask = (tasks: ITaskType[]) => setTasks(tasks);
  const addTask = (task: ITaskType) => setTasks((prev) => [...prev, task]);
  const editTask = (updatedTask: ITaskType) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };
  const deleteTask = (id: number) =>
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
