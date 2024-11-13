/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useContext, useState } from "react";
import TaskContext from "contexts/TaskContext";
import { Button } from "@mui/material";
import { themeColors } from "assets/theme/style";
import { AddTask } from "./styled";
import DialogView from "components/dialogs/DialogView";
import AddTaskDialog from "components/AddTaskDialog";

const AddTaskComponent: FC = () => {
  const { tasks } = useContext(TaskContext);
  const [showAddTaskDialog, setShowAddTaskDialog] = useState<boolean>(false);

  return (
    <>
      <AddTask data-testid="add-task-container">
        <Button
          data-testid="add-task-button"
          variant="contained"
          color="primary"
          sx={{
            padding: "10px 32px",
            backgroundColor: themeColors.button.primary,
            "&:hover": {
              backgroundColor: themeColors.button.primaryHover,
            },
          }}
          onClick={() => setShowAddTaskDialog(true)}
        >
          Add Task
        </Button>
      </AddTask>
      <DialogView
        open={showAddTaskDialog}
        clickHandler={() => setShowAddTaskDialog(!showAddTaskDialog)}
        dialogContent={
          <AddTaskDialog
            clickHandler={() => setShowAddTaskDialog(!showAddTaskDialog)}
          />
        }
      />
    </>
  );
};

export default AddTaskComponent;
