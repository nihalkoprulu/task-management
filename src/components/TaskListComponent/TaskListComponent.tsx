/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState } from "react";
import { ChipStyled, TaskItem, TaskList, TaskMenuContainer } from "./styled";
import { Masonry } from "@mui/lab";
import { ITaskType } from "utils/interfaces/task/task.interface";
import { themeColors } from "assets/theme/style";
import TaskMenu from "components/TaskMenu";
import { truncateText } from "helpers/truncateText";
import { Divider } from "@mui/material";

const TaskListComponent: FC = () => {
  const [tasks, setTasks] = useState<ITaskType[]>([
    {
      id: 1,
      title: "Neque porro quisquam est qui dolorem ipsum quia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id metus lacinia, hendrerit nibh et, tincidunt ex. Sed mollis mi a mi euismod, nec ullamcorper dolor dictum. In a nisl faucibus, scelerisque tortor semper, ullamcorper enim. Nulla sed purus eget elit imperdiet ultricies id vitae ex.",
      priority: "Medium",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      priority: "High",
    },
    {
      id: 3,
      title: "Lorem Ipsum 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      priority: "Low",
    },
    {
      id: 4,
      title: "Lorem Ipsum 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      priority: "Low",
    },
    {
      id: 5,
      title: "Lorem Ipsum 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      priority: "High",
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "",
      priority: "High",
    },
    {
      id: 7,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "",
      priority: "High",
    },
    {
      id: 8,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "",
      priority: "High",
    },
  ]);

  const getPriorityColor = (priority: string) => {
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
