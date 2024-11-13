import { Route, Routes } from "react-router";
import routes from "routers/index.routes";
import { AppBackground, AppContainer, AppWrapper } from "styled";
require("assets/css/styles.css");

const App = () => {
  const renderRoutes: () => JSX.Element[] = () =>
    routes.map((parentRoutes: any, i: number) => (
      <Route
        key={i}
        path={parentRoutes.path}
        element={parentRoutes.component}
      />
    ));
  return (
    <AppWrapper data-testid="app-container">
      <AppBackground></AppBackground>
      <AppContainer>
        <Routes>{renderRoutes()}</Routes>
      </AppContainer>
    </AppWrapper>
  );
};
export default App;
