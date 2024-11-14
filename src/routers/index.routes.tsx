import { Navigate } from "react-router-dom";
import { IRoute } from "utils/interfaces/route/route.interface";
import Dashboard from "views/Dashboard";

const routes: IRoute[] = [
  { path: "/", name: "Dashboard", component: <Dashboard /> },
  {
    path: "*",
    name: "Redirect",
    component: <Navigate to="/" />,
  },
];

export default routes;
