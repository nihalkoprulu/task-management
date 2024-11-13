import { Navigate } from "react-router-dom";
import { IRoute } from "utils/interfaces/route/route.interface";
import Homepage from "views/Homepage";

const routes: IRoute[] = [
  { path: "/", name: "Homepage", component: <Homepage /> },
  {
    path: "*",
    name: "Redirect",
    component: <Navigate to="/" />,
  },
];

export default routes;
