import { FC, useContext } from "react";
import { DashboardContainer, DashboardTitle } from "./styled";
import TaskFilterComponent from "components/TaskFilterComponent";
import TaskListComponent from "components/TaskListComponent";
import NoData from "components/NoData";
import AddTaskComponent from "components/AddTaskComponent";
import TaskContext from "contexts/TaskContext/TaskContext";

const Dashboard: FC = () => {
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
    <DashboardContainer data-testid="dashboard-container">
      <DashboardTitle>Task Tracker</DashboardTitle>
      <AddTaskComponent />
      {renderView()}
    </DashboardContainer>
  );
};

export default Dashboard;
