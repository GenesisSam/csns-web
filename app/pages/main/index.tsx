import * as React from "react";
import { Link } from "react-router-dom";

export default class Main extends React.PureComponent {
  public render() {
    return (
      <div>
        <Link to="signin">Go to SignIn</Link>
      </div>
    );
  }
}
