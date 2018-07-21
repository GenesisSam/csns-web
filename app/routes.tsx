import * as React from "react";

import SignIn from "app/pages/signIn";
import { RouteProps } from "react-router";

interface IRouteObject extends RouteProps {
  loadData?: () => void;
}

export const routes: Array<IRouteObject> = [
  {
    path: "/signIn",
    component: SignIn,
    exact: true,
  },
];
