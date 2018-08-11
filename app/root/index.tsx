import * as React from "react";
import { Switch, Route, withRouter, RouteComponentProps } from "react-router";
import { routes } from "app/routes";

const styles = require("./root.scss");

interface IProps extends RouteComponentProps<any> {}

class RootWrapper extends React.PureComponent<IProps> {
  public render() {
    return (
      <div className={styles.rootWrapper}>
        {/* Add header here */}
        <Switch>
          {routes.map(route => (
            <Route key={`${route.path}`} {...route} />
          ))}
        </Switch>
      </div>
    );
  }
}

export default withRouter(RootWrapper);
