/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useContext } from "react";
import {
  ChipStyled,
  TaskItem,
  TaskItemGroup,
  TaskItemWrapper,
  TaskList,
  TaskMenuContainer,
} from "./styled";
import { themeColors } from "assets/theme/style";
import TaskMenu from "components/TaskMenu";
import { truncateText } from "helpers/truncateText";
import { Divider } from "@mui/material";
import TaskFilterContext from "contexts/TaskFilterContext/TaskFilterContext";

const TaskListComponent: FC = () => {
  const { filteredTasks } = useContext(TaskFilterContext);

  const getPriorityColor: (priority: string | undefined) => string = (
    priority
  ) => {
    switch (priority) {
      case "High":
        return themeColors.chip.high;
      case "Medium":
        return themeColors.chip.medium;
      case "Low":
        return themeColors.chip.low;
      default:
        return themeColors.chip.low;
    }
  };

  return (
    <TaskList data-testid="task-list-container">
      <TaskItemGroup container spacing={2}>
        {filteredTasks.map((task) => (
          <TaskItemWrapper item xs={12} sm={6} md={4} lg={3} key={task.id}>
            <TaskItem key={task.id}>
              <TaskMenuContainer>
                <TaskMenu taskId={task.id} />
              </TaskMenuContainer>
              <ChipStyled
                bgColor={getPriorityColor(task.priority)}
                label={task.priority}
              />
              <Divider />
              <h4>{task.title}</h4>
              <p>{truncateText(task.description, 200)}</p>
            </TaskItem>
          </TaskItemWrapper>
        ))}
      </TaskItemGroup>
    </TaskList>
  );
};

export default TaskListComponent;
