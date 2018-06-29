import * as React from "react";
import Hello from "common/test";
import { RouteProps } from "react-router";

interface IRouteObject extends RouteProps {
  loadData?: () => void;
}

export const routes: Array<IRouteObject> = [
  {
    path: "/hello",
    component: () => <div>Hello world</div>,
    exact: true,
  },
  {
    path: "/",
    component: Hello,
  },
];
