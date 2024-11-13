/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState } from "react";
import { PrioritySelect, SearchBar, TaskFilter } from "./styled";
import {
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const TaskFilterComponent: FC = () => {
  const [filter, setFilter] = useState<string>("");

  const updateFilter: (event: SelectChangeEvent) => void = (event) => {
    setFilter(event.target.value);
  };

  const priorityOptions: string[] = ["", "Low", "Medium", "High"];

  return (
    <TaskFilter data-testid="task-filter">
      <SearchBar>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search by title or description"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </SearchBar>
      <PrioritySelect>
        <InputLabel id="select-priority-label">Priority</InputLabel>
        <Select
          labelId="select-priority-helper-label"
          id="select-priority-helper"
          value={filter}
          label="Priority"
          onChange={updateFilter}
        >
          {priorityOptions.map((priority) => (
            <MenuItem key={priority} value={priority}>
              {priority || "None"}
            </MenuItem>
          ))}
        </Select>
      </PrioritySelect>
    </TaskFilter>
  );
};

export default TaskFilterComponent;
