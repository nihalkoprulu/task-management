/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useContext, useState } from "react";
import { ChipStyled, TaskItem, TaskList, TaskMenuContainer } from "./styled";
import { Masonry } from "@mui/lab";
import { themeColors } from "assets/theme/style";
import TaskMenu from "components/TaskMenu";
import { truncateText } from "helpers/truncateText";
import { Divider } from "@mui/material";
import TaskContext from "contexts/TaskContext";

const TaskListComponent: FC = () => {
  const { tasks } = useContext(TaskContext);

  const getPriorityColor = (priority: string | undefined) => {
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
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <TaskMenuContainer>
              <TaskMenu
                taskId={task.id}
                clickHandler={() => console.log(task.id)}
              />
            </TaskMenuContainer>
            <ChipStyled
              bgColor={getPriorityColor(task.priority)}
              label={task.priority}
            />
            <Divider />
            <h4>{task.title}</h4>
            <p>{truncateText(task.description, 200)}</p>
          </TaskItem>
        ))}
      </Masonry>
    </TaskList>
  );
};

export default TaskListComponent;
