import * as React from "react";
import TextField from "@material-ui/core/textField";
import Icon from "app/resources/icons";
import PACKS from "app/resources/icons/packs";

const styles = require("./signIn.scss");

interface IProps {}

interface IState {
  email: string;
  password: string;
}

export default class SignIn extends React.PureComponent<IProps, IState> {
  public state = {
    email: "",
    password: "",
  };

  public render() {
    return (
      <div>
        <div>
          <Icon icon={PACKS.GENERAL.LOGO} className={styles.logoIcon} />
        </div>
        <div>
          <TextField type="email" label="User email" margin="normal" />
        </div>
        <div>
          <TextField type="password" label="Password" margin="normal" />
        </div>
      </div>
    );
  }

  private changeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    this.setState({
      email: target.value,
    });
  };

  private changePassword = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    this.setState({
      password: target.value,
    });
  };
}
