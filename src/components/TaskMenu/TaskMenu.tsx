import { FC, MouseEvent, useState } from "react";
import { TaskMenuContainer, TaskMenuWrapper } from "./styled";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export interface TaskMenuProps {
  taskId: number;
  clickHandler: (id?: number) => void;
}

const TaskMenu: FC<TaskMenuProps> = ({ taskId, clickHandler }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick: (event: MouseEvent<HTMLElement>) => void = (event) =>
    setAnchorEl(event.currentTarget);

  const handleClose: () => void = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={() => clickHandler()}>Edit</MenuItem>
        <MenuItem onClick={() => clickHandler()}>Delete</MenuItem>
      </Menu>
    </TaskMenuWrapper>
  );
};

export default TaskMenu;
