import { initialData } from "../initialData";

const mockTask = jest.fn();

export const mockNoData = {
  tasks: [],
  loadInitialTask: mockTask,
  addTask: mockTask,
  editTask: mockTask,
  deleteTask: mockTask,
};

export const mockData = {
  tasks: initialData,
  loadInitialTask: mockTask,
  addTask: mockTask,
  editTask: mockTask,
  deleteTask: mockTask,
};

export const mockFilterData = {
  priorityFilter: "",
  searchTerm: "",
  filteredTasks: initialData,
  setPriorityFilter: mockTask,
  setSearchTerm: mockTask
};