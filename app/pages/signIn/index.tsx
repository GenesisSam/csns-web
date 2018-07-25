import * as React from "react";
import Axios, { CancelTokenSource } from "axios";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import Icon from "app/resources/icons";
import PACKS from "app/resources/icons/packs";
import { signIn } from "app/actions/users";
import { AppDispatch } from "app/rootReducers";

const styles = require("./signIn.scss");

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

interface IProps {
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
    const { emailInvalid, passwordInvalid } = this.state;
    const validToSignIn =
      emailInvalid === undefined || emailInvalid || (passwordInvalid === undefined || passwordInvalid);
    return (
      <div className={styles.wrapper}>
        <div>
          <Icon icon={PACKS.GENERAL.LOGO} className={styles.logoIcon} />
        </div>
        <div>
          <TextField
            autoFocus
            type="email"
            label="User email"
            margin="normal"
            onChange={this.changeEmail}
            error={emailInvalid}
          />
        </div>
        <div>
          <TextField
            type="password"
            label="Password"
            margin="normal"
            onChange={this.changePassword}
            error={passwordInvalid}
          />
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={this.doLogin} disabled={validToSignIn}>
            Login
          </Button>
        </div>
      </div>
    );
  }

  private changeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    this.setState({
      email: target.value,
      emailInvalid: !EMAIL_REGEX.test(target.value),
    });
  };

  private changePassword = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    this.setState({
      password: target.value,
      passwordInvalid: target.value.length < 6,
    });
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

export default connect()(SignIn);
