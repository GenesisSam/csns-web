import * as React from "react";
import { Switch, Route, withRouter, RouteComponentProps } from "react-router";
import { routes } from "app/routes";
import GNB from "app/gnb";

const styles = require("./root.scss");

interface IProps extends RouteComponentProps<any> {}

class RootWrapper extends React.PureComponent<IProps> {
  public render() {
    return (
      <div className={styles.rootWrapper}>
        <GNB />
        <div className={styles.contentWrapper}>
          <Switch>
            {routes.map(route => (
              <Route key={`${route.path}`} {...route} />
            ))}
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(RootWrapper);
