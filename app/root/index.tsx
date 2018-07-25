import * as React from "react";
import { Switch, Route } from "react-router";
import { routes } from "app/routes";

const styles = require("./root.scss");
class RootWrapper extends React.PureComponent {
  public render() {
    return (
      <div className={styles.rootWrapper}>
        {/* Add header here */}
        <Switch>{routes.map(route => <Route key={`${route.path}`} {...route} />)}</Switch>
      </div>
    );
  }
}

export default RootWrapper;
