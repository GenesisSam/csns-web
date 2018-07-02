import * as React from "react";
import Hello from "common/test";
import SignIn from "app/signIn";
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
  {
    path: "/",
    component: Hello,
  },
];
