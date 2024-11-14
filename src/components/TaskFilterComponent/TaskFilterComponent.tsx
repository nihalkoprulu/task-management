/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from "react";
import { TaskFilter } from "./styled";
import SearchBarComponent from "components/SearchBarComponent";
import PriorityFilterComponent from "components/PriorityFilterComponent";

const TaskFilterComponent: FC = () => {
  return (
    <TaskFilter data-testid="task-filter">
      <SearchBarComponent />
      <PriorityFilterComponent />
    </TaskFilter>
  );
};

export default TaskFilterComponent;
