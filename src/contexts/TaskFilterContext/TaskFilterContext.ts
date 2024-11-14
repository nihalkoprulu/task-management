import React from 'react';
import { ITaskType } from 'utils/interfaces/task/task.interface';

type TaskFilterContextType = {
  priorityFilter: string;
  searchTerm: string;
  filteredTasks: ITaskType[];
  setPriorityFilter: (filter: string) => void;
  setSearchTerm: (term: string) => void;
};

const defaultContextValue: TaskFilterContextType = { 
  priorityFilter: "", 
  searchTerm:  "",
  filteredTasks: [],
  setPriorityFilter: () => {},
  setSearchTerm: () => {} };

const TaskFilterContext = React.createContext<TaskFilterContextType>(defaultContextValue);

export default TaskFilterContext;
