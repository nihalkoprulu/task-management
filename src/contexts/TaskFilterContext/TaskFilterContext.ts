import React from 'react';

type TaskFilterContextType = {
  priorityFilter: string;
  setPriorityFilter: (filter: string) => void;
};

const defaultContextValue: TaskFilterContextType = { 
  priorityFilter: "", 
  setPriorityFilter: () => {} };

const TaskFilterContext = React.createContext<TaskFilterContextType>(defaultContextValue);

export default TaskFilterContext;
