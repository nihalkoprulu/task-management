const mockAddTask = jest.fn();

export const mockContextValue = {
  tasks: [],
  loadInitialTask: mockAddTask,
  addTask: mockAddTask,
  editTask: mockAddTask,
};