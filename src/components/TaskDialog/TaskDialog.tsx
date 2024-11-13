/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useContext, useEffect, useState } from "react";
import {
  PrioritySelect,
  TaskDialogContainer,
  TaskDialogContentContainer,
} from "./styled";
import {
  Button,
  DialogActions,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { themeColors } from "assets/theme/style";
import { ITaskType } from "utils/interfaces/task/task.interface";
import TaskContext from "contexts/TaskContext";

interface TaskDialogProps {
  clickHandler: () => void;
  taskId?: number;
}

const TaskDialog: FC<TaskDialogProps> = ({ clickHandler, taskId }) => {
  const { tasks, addTask, editTask } = useContext(TaskContext);

  const [taskData, setTaskData] = useState<ITaskType | null>(null);

  useEffect(() => {
    if (taskId) {
      const taskToEdit = tasks.find((task) => task.id === taskId);
      if (taskToEdit) {
        setTaskData(taskToEdit);
      }
    }
  }, []);

  // Find the max ID from tasks
  const getMaxId = () => {
    if (tasks.length === 0) return 0;
    return Math.max(...tasks.map((task) => task.id));
  };

  const handleChange: (key: string, value: string) => void = (key, value) => {
    taskData &&
      setTaskData({
        ...taskData,
        [key]: value,
      });
  };

  const handleAddTask = () => {
    const newTask: ITaskType = {
      id: taskId ? taskData?.id || 0 : getMaxId() + 1,
      title: taskData?.title || "",
      description: taskData?.description || "",
      priority: taskData?.priority,
    };

    taskId ? editTask(newTask) : addTask(newTask);
    clickHandler(); // Close dialog
  };

  return (
    <TaskDialogContainer data-testid="add-task-dialog-container">
      <DialogTitle>{taskId ? "Edit Task Details" : "Add New Task"}</DialogTitle>
      <TaskDialogContentContainer>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={taskData?.title || ""}
          onChange={(event) => handleChange("title", event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          value={taskData?.description || ""}
          onChange={(event) => handleChange("description", event.target.value)}
        />
        <PrioritySelect>
          <InputLabel id="priority-select-label">Priority</InputLabel>
          <Select
            labelId="priority-select-label"
            id="priority-select"
            name="priority"
            value={taskData?.priority || ""}
            onChange={(event) => handleChange("priority", event.target.value)}
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </PrioritySelect>
      </TaskDialogContentContainer>
      <DialogActions>
        <Button
          onClick={() => clickHandler()}
          variant="outlined"
          sx={{
            backgroundColor: themeColors.white,
            border: `1px solid ${themeColors.button.primary}`,
            color: themeColors.button.primary,
            padding: "10px 32px",
            "&:hover": {
              border: `1px solid ${themeColors.button.primaryHover}`,
            },
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: "10px 32px",
            backgroundColor: themeColors.button.primary,
            "&:hover": {
              backgroundColor: themeColors.button.primaryHover,
            },
          }}
          onClick={handleAddTask}
        >
          {taskId ? "Update Task" : "Add Task"}
        </Button>
      </DialogActions>
    </TaskDialogContainer>
  );
};

export default TaskDialog;
