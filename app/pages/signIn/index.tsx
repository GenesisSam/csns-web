import * as React from "react";

const styles = "./signIn.scss";

interface IProps {}

interface IState {
  email: string;
  password: string;
}

class SignIn extends React.PureComponent<IProps, IState> {
  public state = {
    email: "",
    password: "",
  };

  public render() {
    return <div>HELLO</div>;
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
