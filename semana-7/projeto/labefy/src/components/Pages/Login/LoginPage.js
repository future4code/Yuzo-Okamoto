import React from "react";
import {
  StyledLoginPage,
  BackgroundImage,
  LoginForm,
  LoginLogo,
  LoginInput,
  LoginButton,
} from "./Style";

class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleInput = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { handlePageChange } = this.props;
    return (
      <StyledLoginPage>
        <BackgroundImage />
        <LoginForm>
          <LoginLogo>Labefy</LoginLogo>

          <LoginInput
            value={this.state.username}
            id="username"
            onChange={this.handleInput}
            placeholder="usuário"
            type="text"
          />

          <LoginInput
            value={this.state.password}
            id="password"
            onChange={this.handleInput}
            placeholder="senha"
            type="password"
          />

          <LoginButton onClick={() => handlePageChange("landing")}>
            Entrar
          </LoginButton>
        </LoginForm>
      </StyledLoginPage>
    );
  }
}

export default LoginPage;
