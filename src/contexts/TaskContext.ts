// src/context/TaskContext.ts
import React from 'react';
import { ITaskType } from 'utils/interfaces/task/task.interface';

type TaskContextType = {
  tasks: ITaskType[];
  loadInitialTask: (tasks: ITaskType[]) => void;
  addTask: (task: ITaskType) => void;
  editTask: (task: ITaskType) => void;
};

const defaultContextValue: TaskContextType = { tasks: [], loadInitialTask: () => {}, addTask: () => {}, editTask: () => {} };

const TaskContext = React.createContext<TaskContextType>(defaultContextValue);

export default TaskContext;
