### Task Management 

This task management app built with React, TypeScript, and Material UI to help users manage their tasks. It allows users to manage their tasks with features like adding, editing, deleting, filtering, searching.

#### Features

Add, edit, and delete tasks.

Filter tasks by priority.

Search tasks by title and description.

Built with a responsive design using Material UI.

#### Run Locally
##### 1-Clone the repository
`git clone https://github.com/nihalkoprulu/task-management.git`

##### 2-Navigate to the project folder
`cd task-management`

##### 3-Install the dependencies:
`npm install`

##### 4-Run the development server:
`npm start`

#### Testing
Testing is implemented using Jest and React Testing Library. To run the tests, use the following command:

`npm test`

#### Overview of The Task Management, Code Structure & State Management

#### Overview of The Task Management

When you run the app, you will see the Dashboard. If there are no tasks yet, you can:

`Load Sample Data:` Click the "Load Sample Data" button to load example tasks.

`Add New Task:` Click the "Add Task" button to create a new task.

Once tasks are loaded (either from sample data or newly added tasks), they will appear in the list. If you load sample data, it will be saved to localStorage and stay there even if you refresh the page.

When there is task data, you will also see:

`Priority Dropdown:` You can filter tasks by their priority using the priority dropdown. When the priority option is changed, the priorityFilter in localStorage will be updated, and even after a page refresh, the selected option will be loaded from there, ensuring tasks are listed accordingly.

`Search Bar:` You can search tasks by entering a keyword into the search bar. The search will look through both the title and description of each task. Filtered results will be displayed instantly.

Both the priorityFilter and searchTerm are managed through FilterContext, and the filtered task list will always be shown based on your active filters. This ensures that tasks are consistently displayed according to your selected filters.

**Edit or Delete Task**

To edit or delete a task, click the three dots at the top right of the task card. When you select Edit from the menu, a dialog window will open, allowing you to update the task details.

If you choose Delete, an alert dialog will appear to confirm the action. If confirmed, the task will be deleted.

#### Code Structure

`App.tsx`

It renders core components and wraps the app in various context providers for state management.

`components/`

Contains all reusable UI components, such as common, any task-related components.

`contexts/`

Holds context files that manage and provide state to the components.

`views/`

Contains the main views that structure the app.

`utils/`

Contains utility functions and TypeScript interfaces.

`assets/`

Stores static assets, such as global styles, theme definitions, and images. This can include CSS or styled-components files, icons, and other design assets.

`routers/`

Manages routing for the app, defining the navigation structure and paths for each view.

`helpers/`

Holds helper functions that are used throughout the app. 

`lib/`

Contains mock data for testing and initial task data.


#### State Management

State is managed using Context API. There are two main contexts: TaskContext and FilterContext.

**TaskContext**

The TaskContext is responsible for managing all task-related data, including adding, updating, deleting tasks. It provides the task state.

**State:**

`tasks:` An array of task objects. Each task object includes properties such as id, title, description, priority.

**Actions:**

`loadInitialTask:` Loads sample task data if no data is available.

`addTask:` Adds a new task to the tasks array.

`editTask:` Updates an existing task by its ID.

`deleteTask:` Removes a task by its ID.

**TaskFilterContext**

The FilterContext manages task filtering based on priority and search term, making it easy to apply and persist filters across components. It also stores the priority filter value in localStorage to ensure filters remain active even after a page reload.

**State:**

`priorityFilter:` The selected priority filter for tasks. It’s stored in the browser's localStorage. The value can be an empty string (no filter) or a string representing the selected priority ("high", "medium", "low").

`searchTerm:` The term entered in the search bar to filter tasks by their title and description.

`filteredTasks:` The list of tasks filtered based on the current priorityFilter and searchTerm. This list is automatically updated whenever these filters change, so any component using filteredTasks will always show the latest results.

**Actions:**

`setPriorityFilter:` Updates the current priority filter based on user selection. The new value is also saved to localStorage.

`setSearchTerm:` Updates the search term entered by the user, allowing them to filter tasks based on keywords in the title or description.



