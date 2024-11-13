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
import { Masonry } from "@mui/lab";
import { themeColors } from "assets/theme/style";
import TaskMenu from "components/TaskMenu";
import { truncateText } from "helpers/truncateText";
import { Divider, Grid } from "@mui/material";
import TaskContext from "contexts/TaskContext/TaskContext";
import TaskFilterContext from "contexts/TaskFilterContext/TaskFilterContext";
import { ITaskType } from "utils/interfaces/task/task.interface";

interface TaskListProps {
  searchTerm: string;
}

const TaskListComponent: FC<TaskListProps> = ({ searchTerm }) => {
  const { tasks } = useContext(TaskContext);
  const { priorityFilter } = useContext(TaskFilterContext);

  const filteredTasks: ITaskType[] = tasks.filter((task) => {
    const matchesPriority: boolean = priorityFilter
      ? task.priority === priorityFilter
      : true;
    const matchesSearchTerm: boolean =
      searchTerm.length > 3
        ? task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          task.description.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

    return matchesPriority && matchesSearchTerm;
  });

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
      <TaskItemGroup container spacing={2}>
        {filteredTasks.map((task) => (
          <TaskItemWrapper item xs={12} sm={6} md={4} lg={3} key={task.id}>
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
          </TaskItemWrapper>
        ))}
      </TaskItemGroup>
    </TaskList>
  );
};

export default TaskListComponent;
