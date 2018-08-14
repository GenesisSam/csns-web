import * as React from "react";

import SignIn from "app/pages/signIn";
import Main from "app/pages/main";
import { RouteProps } from "react-router";

interface IRouteObject extends RouteProps {
  loadData?: () => void;
}

export const routes: Array<IRouteObject> = [
  {
    path: "/signin",
    component: SignIn,
    exact: true,
  },
  {
    path: "/",
    component: Main,
    exact: true,
  },
];
