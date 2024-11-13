import { initialData } from "../initialData";

const mockAddTask = jest.fn();

export const mockNoData = {
  tasks: [],
  loadInitialTask: mockAddTask,
  addTask: mockAddTask,
  editTask: mockAddTask,
  deleteTask: mockAddTask,
};

export const mockData = {
  tasks: initialData,
  loadInitialTask: mockAddTask,
  addTask: mockAddTask,
  editTask: mockAddTask,
  deleteTask: mockAddTask,
};