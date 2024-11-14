import { FC, useContext } from "react";
import { HomepageContainer, HomepageTitle } from "./styled";
import TaskFilterComponent from "components/TaskFilterComponent";
import TaskListComponent from "components/TaskListComponent";
import NoData from "components/NoData";
import AddTaskComponent from "components/AddTaskComponent";
import TaskContext from "contexts/TaskContext/TaskContext";

const Homepage: FC = () => {
  const { tasks } = useContext(TaskContext);

  const renderView: () => JSX.Element = () => {
    return tasks.length > 0 ? (
      <>
        <TaskFilterComponent />
        <TaskListComponent />
      </>
    ) : (
      <NoData />
    );
  };

  return (
    <HomepageContainer data-testid="homepage-container">
      <HomepageTitle>Task Tracker</HomepageTitle>
      <AddTaskComponent />
      {renderView()}
    </HomepageContainer>
  );
};

export default Homepage;
