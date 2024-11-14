/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useContext } from "react";
import { SearchBar } from "./styled";
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TaskFilterContext from "contexts/TaskFilterContext/TaskFilterContext";

const SearchBarComponent: FC = () => {
  const { searchTerm, setSearchTerm } = useContext(TaskFilterContext);

  const handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e
  ) => {
    setSearchTerm(e.target.value);
  };

  return (
    <SearchBar data-testid="task-filter">
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
      <IconButton sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </SearchBar>
  );
};

export default SearchBarComponent;
