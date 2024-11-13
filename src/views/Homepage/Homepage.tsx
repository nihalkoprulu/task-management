import { FC } from "react";
import {
  HomepageButtonWrapper,
  HomepageContainer,
  HomepageTitle,
} from "./styled";
import { themeColors } from "assets/theme/style";
import { Button } from "@mui/material";
import TaskFilterComponent from "components/TaskFilter";

const Homepage: FC = () => {
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
      <TaskFilterComponent />
    </HomepageContainer>
  );
};

export default Homepage;
