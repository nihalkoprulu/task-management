import { FC, useContext } from "react";
import {
  HomepageButtonWrapper,
  HomepageContainer,
  HomepageTitle,
} from "./styled";
import { themeColors } from "assets/theme/style";
import { Button } from "@mui/material";
import TaskFilterComponent from "components/TaskFilterComponent";
import TaskListComponent from "components/TaskListComponent";
import TaskContext from "contexts/TaskContext";
import NoData from "components/NoData";

const Homepage: FC = () => {
  const { tasks } = useContext(TaskContext);

  const renderView: () => JSX.Element = () => {
    return tasks.length > 0 ? (
      <>
        <TaskFilterComponent />
        <TaskListComponent />
      </>
    ) : (
      <NoData />
    );
  };

  return (
    <HomepageContainer data-testid="homepage-container">
      <HomepageTitle>Task Tracker</HomepageTitle>
      <HomepageButtonWrapper>
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
          onClick={() => console.log("click")}
        >
          Add Task
        </Button>
      </HomepageButtonWrapper>
      {renderView()}
    </HomepageContainer>
  );
};

export default Homepage;
