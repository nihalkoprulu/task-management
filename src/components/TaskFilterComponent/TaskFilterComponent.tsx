/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useContext, useState } from "react";
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
import TaskFilterContext from "contexts/TaskFilterContext/TaskFilterContext";
interface TaskFilterProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const TaskFilterComponent: FC<TaskFilterProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  const { priorityFilter, setPriorityFilter } = useContext(TaskFilterContext);

  const priorityOptions: string[] = ["", "Low", "Medium", "High"];

  const handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e
  ) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick: () => void = () => {
    console.log("Search term: ", searchTerm); // Or trigger search logic here if needed
  };

  return (
    <TaskFilter data-testid="task-filter">
      <SearchBar>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search by title or description"
          inputProps={{
            "aria-label": "search google maps",
            "data-testid": "search-input",
          }}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon onClick={handleSearchClick} />
        </IconButton>
      </SearchBar>
      <PrioritySelect>
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
    </TaskFilter>
  );
};

export default TaskFilterComponent;
