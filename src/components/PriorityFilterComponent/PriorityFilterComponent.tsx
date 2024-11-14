/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useContext } from "react";
import { PrioritySelect } from "./styled";
import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import TaskFilterContext from "contexts/TaskFilterContext/TaskFilterContext";

const PriorityFilterComponent: FC = () => {
  const { priorityFilter, setPriorityFilter } = useContext(TaskFilterContext);
  const priorityOptions: string[] = ["", "Low", "Medium", "High"];

  return (
    <PrioritySelect data-testid="priority-select">
      <InputLabel id="select-priority-label">Priority</InputLabel>
      <Select
        labelId="select-priority-helper-label"
        id="select-priority-helper"
        value={priorityFilter}
        label="Priority"
        onChange={(event: SelectChangeEvent<string>) =>
          setPriorityFilter(event.target.value)
        }
      >
        {priorityOptions.map((priority) => (
          <MenuItem key={priority} value={priority}>
            {priority || "None"}
          </MenuItem>
        ))}
      </Select>
    </PrioritySelect>
  );
};

export default PriorityFilterComponent;
