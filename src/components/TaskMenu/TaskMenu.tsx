import { FC, MouseEvent, useContext, useState } from "react";
import { TaskMenuContainer, TaskMenuWrapper } from "./styled";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DialogView from "components/dialogs/DialogView";
import TaskDialog from "components/TaskDialog";
import AlertDialog from "components/dialogs/AlertDialog";
import TaskContext from "contexts/TaskContext/TaskContext";

export interface TaskMenuProps {
  taskId: number;
}

const TaskMenu: FC<TaskMenuProps> = ({ taskId }) => {
  const { deleteTask } = useContext(TaskContext);
  const [showEditTaskDialog, setShowEditTaskDialog] = useState<boolean>(false);
  const [showAlertDialog, setShowAlertDialog] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick: (event: MouseEvent<HTMLElement>) => void = (event) =>
    setAnchorEl(event.currentTarget);

  const handleClose: () => void = () => {
    setAnchorEl(null);
  };

  const handleAlert: () => void = () => {
    deleteTask(taskId);
    setShowAlertDialog(false);
  };

  return (
    <TaskMenuWrapper>
      <TaskMenuContainer>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <MoreVertIcon />
        </IconButton>
      </TaskMenuContainer>
      <Menu
        anchorEl={anchorEl}
        id="customer-item-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => setShowEditTaskDialog(true)}>Edit</MenuItem>
        <MenuItem onClick={() => setShowAlertDialog(true)}>Delete</MenuItem>
      </Menu>
      <DialogView
        open={showEditTaskDialog}
        clickHandler={() => setShowEditTaskDialog(!showEditTaskDialog)}
        dialogContent={
          <TaskDialog
            clickHandler={() => setShowEditTaskDialog(!showEditTaskDialog)}
            taskId={taskId}
          />
        }
      />
      <AlertDialog
        title={"Are you sure?"}
        description={"If you confirm, this task will be permanently deleted."}
        open={showAlertDialog}
        clickHandler={handleAlert}
        clickSecondHandler={() => setShowAlertDialog(!showAlertDialog)}
      />
    </TaskMenuWrapper>
  );
};

export default TaskMenu;
