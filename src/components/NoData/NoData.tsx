import { FC, useContext } from "react";
import { NoDataContainer } from "./styled";
import { Button } from "@mui/material";
import { themeColors } from "assets/theme/style";
import TaskContext from "contexts/TaskContext";
import { initialData } from "lib/data/initialData";

const NoData: FC = () => {
  const { loadInitialTask } = useContext(TaskContext);

  const handleAddTask: () => void = () => {
    loadInitialTask(initialData);
  };

  return (
    <NoDataContainer>
      <p>
        Oops, no tasks here yet! <strong>"Add Task"</strong> to create a new
        one,
      </p>
      <p>or</p>
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
        Load Sample Data
      </Button>
    </NoDataContainer>
  );
};

export default NoData;
