import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./../views/homePage/HomePage";
import SpinnerPage from "./../views/spinnerPage/SpinnerPage";
// import ItemPage from "./../views/itemPage/u";
import HomePage from "./../views/homePage/HomePage";

const ROUTES = [
  {
    path: "/",
    key: "54235345",
    exact: "fasdfdsfds",
    component: () => <HomePage />,
  },
  {
    path: "/spinnerPage",
    key: "SPIN",
    exact: "fasdfdsfds",
    component: RenderRoutes,
    routes: [
      {
        path: "/spinnerPage",
        key: "SPIN_ROOT",
        exact: "fasdfdsfds",
        component: () => <SpinnerPage />,
      },
      {
        path: "/spinnerPage/test1",
        key: "SPIN_ROOT",
        exact: "fasdfdsfds",
        component: () => <Route component={() => <h1>TEST1</h1>} />,
      },
      {},
    ],
  },
  {},
];

export default ROUTES;

const RoutesWithSubroutes = (route) => {
  return (
    <>
      <Route
        exact={route.exact}
        path={route.path}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    </>
  );
};

const RenderRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <>
          {" "}
          <RoutesWithSubroutes key={route.key} {...route} />
        </>
      ))}

      <Route component={() => <h1>xbbgfbgfbgf</h1>} />
    </Switch>
  );
};
