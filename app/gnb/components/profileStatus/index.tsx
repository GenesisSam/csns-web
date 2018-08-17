/**
 * Smart switchable component
 * 1. sign in button
 * 2. user profile image
 */

import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import { IAppState } from "app/rootReducers";
import currentUserDenomalizer from "common/denormalizer/currentUser";

const styles = require("./profileStatus.scss");

function mapStateToProps(state: IAppState) {
  return {
    currentUser: currentUserDenomalizer(state.currentUser, state.entities),
  };
}

interface IProps extends ReturnType<typeof mapStateToProps> {}

class ProfileStatus extends React.PureComponent<IProps> {
  public render() {
    const { currentUser } = this.props;
    return currentUser ? this.renderProfile() : this.renderSingIn();
  }

  private renderSingIn = () => {
    return (
      <div className={styles.wrapper}>
        <Link className={styles.signin} to="/signin">
          Log In
        </Link>
      </div>
    );
  };

  private renderProfile = () => {
    const { currentUser } = this.props;
    return (
      <Link to={`/${currentUser.username}`} className={styles.wrapper}>
        <span className={styles.username}>{currentUser.username}</span>
        <Avatar
          src={currentUser.profile_image}
          alt={currentUser.profile_image}
          className={styles.avatarImage}
        />
      </Link>
    );
  };
}

export default connect(mapStateToProps)(ProfileStatus);
