import * as React from "react";
import { Link } from "react-router-dom";
import currentUserDenomalizer from "common/denormalizer/currentUser";
import { IAppState } from "app/rootReducers";
import { connect } from "react-redux";

function mapStateToProps(state: IAppState) {
  return {
    currentUser: currentUserDenomalizer(state.currentUser, state.entities),
  };
}

interface IProps extends ReturnType<typeof mapStateToProps> {}

class Main extends React.PureComponent<IProps> {
  public render() {
    console.log(this.props.currentUser);
    return (
      <div>
        <Link to="signin">Go to SignIn</Link>
        {this.props.currentUser && this.props.currentUser.username}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
