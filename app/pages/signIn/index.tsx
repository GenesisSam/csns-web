import * as React from "react";
import Axios, { CancelTokenSource } from "axios";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps, Redirect } from "react-router";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import Icon from "app/resources/icons";
import PACKS from "app/resources/icons/packs";
import { signIn } from "app/actions/users";
import { AppDispatch, IAppState } from "app/rootReducers";

const styles = require("./signIn.scss");

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function mapStateToProps(state: IAppState) {
  return {
    signInPage: state.signInPage,
  };
}

interface IProps extends ReturnType<typeof mapStateToProps>, RouteComponentProps<any> {
  dispatch: AppDispatch;
}

interface IState {
  email: string;
  password: string;
  emailInvalid: boolean | undefined;
  passwordInvalid: boolean | undefined;
}

class SignIn extends React.PureComponent<IProps, IState> {
  private signInCancelTokenSource: CancelTokenSource | null = null;

  public state: IState = {
    email: "",
    password: "",
    emailInvalid: undefined,
    passwordInvalid: undefined,
  };

  public componentDidMount() {
    this.generateCancelToken();
  }

  public render() {
    const { isLoading, isSucceed } = this.props.signInPage;
    const { emailInvalid, passwordInvalid } = this.state;

    if (isSucceed) {
      return <Redirect to="/" />;
    }

    return (
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <Icon icon={PACKS.GENERAL.LOGO} className={styles.logoIcon} />
          {this.renderErrorMessage()}
        </div>
        <div>
          <TextField
            autoFocus
            type="email"
            label="User email"
            margin="normal"
            onChange={this.changeEmail}
            error={emailInvalid}
            tabIndex={1}
          />
        </div>
        <div>
          <TextField
            type="password"
            label="Password"
            margin="normal"
            onChange={this.changePassword}
            onKeyPress={this.handlePasswordKeyPress}
            error={passwordInvalid}
            tabIndex={2}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <Button variant="contained" color="primary" onClick={this.doLogin} disabled={this.isInvalidToSignIn()}>
            {isLoading ? <CircularProgress style={{ color: "white" }} size={20} /> : "Login"}
          </Button>
        </div>
      </div>
    );
  }

  private renderErrorMessage = () => {
    const { errorMessage, isFailed } = this.props.signInPage;
    if (!isFailed) {
      return null;
    }

    return <span className={styles.errorMessage}>{errorMessage}</span>;
  };

  private isInvalidToSignIn = () => {
    const { emailInvalid, passwordInvalid } = this.state;
    return emailInvalid === undefined || emailInvalid || (passwordInvalid === undefined || passwordInvalid);
  };

  private changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    this.setState({
      email: target.value,
      emailInvalid: !EMAIL_REGEX.test(target.value),
    });
  };

  private changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    this.setState({
      password: target.value,
      passwordInvalid: target.value.length < 6,
    });
  };

  private handlePasswordKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key.toLocaleLowerCase() === "enter" && !this.isInvalidToSignIn()) {
      this.doLogin();
    }
  };

  private doLogin = () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;
    dispatch(signIn(email, password, this.signInCancelTokenSource.token));
  };

  private generateCancelToken = () => {
    if (this.signInCancelTokenSource) {
      this.signInCancelTokenSource.cancel();
    }

    this.signInCancelTokenSource = Axios.CancelToken.source();
  };
}

export default withRouter(connect(mapStateToProps)(SignIn));
