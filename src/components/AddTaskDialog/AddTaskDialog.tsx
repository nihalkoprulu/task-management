/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useContext, useState } from "react";
import {
  AddTaskDialogContainer,
  AddTaskDialogContentContainer,
  PrioritySelect,
} from "./styled";
import {
  Button,
  DialogActions,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { themeColors } from "assets/theme/style";
import { ITaskType } from "utils/interfaces/task/task.interface";
import TaskContext from "contexts/TaskContext";

interface AddTaskDialogProps {
  clickHandler: () => void;
}

const AddTaskDialog: FC<AddTaskDialogProps> = ({ clickHandler }) => {
  const { tasks, addTask } = useContext(TaskContext);

  const [taskData, setTaskData] = useState<ITaskType>({
    id: 0,
    title: "",
    description: "",
    priority: undefined,
  });

  // Find the max ID from tasks
  const getMaxId = () => {
    if (tasks.length === 0) return 0;
    return Math.max(...tasks.map((task) => task.id));
  };

  const handleChange: (key: string, value: string) => void = (key, value) => {
    setTaskData({
      ...taskData,
      [key]: value,
    });
  };

  const handleAddTask = () => {
    const newTask: ITaskType = {
      id: getMaxId() + 1,
      title: taskData.title,
      description: taskData.description,
      priority: taskData.priority,
    };

    addTask(newTask);
    setTaskData({ id: 0, title: "", description: "", priority: undefined }); // Reset form
    clickHandler(); // Close dialog
  };

  return (
    <AddTaskDialogContainer data-testid="add-task-dialog-container">
      <DialogTitle>Add a new task</DialogTitle>
      <AddTaskDialogContentContainer>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={taskData.title}
          onChange={(event) => handleChange("title", event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          value={taskData.description}
          onChange={(event) => handleChange("description", event.target.value)}
        />
        <PrioritySelect>
          <InputLabel id="priority-select-label">Priority</InputLabel>
          <Select
            labelId="priority-select-label"
            id="priority-select"
            name="priority"
            value={taskData.priority || ""}
            onChange={(event) => handleChange("priority", event.target.value)}
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </PrioritySelect>
      </AddTaskDialogContentContainer>
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
          Add Task
        </Button>
      </DialogActions>
    </AddTaskDialogContainer>
  );
};

export default AddTaskDialog;
