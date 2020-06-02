import React from "react";
import styled from "styled-components";

import NavButton from "../Buttons/NavButton";

const RegisterWrapper = styled.section`
  > div {
    flex: 1;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    > div {
      display: flex;
      flex-direction: column;
      padding: 0.3rem 0;
      > label {
        font-size: 0.85rem;
        font-weight: bold;
        margin-bottom: 0.1rem;
      }
      > input {
        color: black;
        padding: 0.4rem 0.6rem;
        border: none;
        border-radius: 5px;
        outline: none;
      }
    }
    button {
      margin-top: 0.7rem;
      font-size: 1.4rem;
      color: black;
      align-self: flex-end;
      padding: 0.2rem 0.65rem;
      border: none;
      border-radius: 5px;
    }
  }
`;

class Register extends React.Component {
  state = {
    name: "",
    email: "",
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    const { registerButtonHandler, navButtonHandler } = this.props;

    return (
      <RegisterWrapper>
        <NavButton handler={navButtonHandler} load="Usuário" />
        <h2>Tela de Cadastro</h2>
        <div>
          <div>
            <label>NOME</label>
            <input
              onChange={this.onChangeName}
              value={this.state.name}
              id="name"
              placeholder="Nome"
              type="text"
            />
          </div>
          <div>
            <label>EMAIL</label>
            <input
              onChange={this.onChangeEmail}
              value={this.state.email}
              id="email"
              placeholder="Email"
              type="text"
            />
          </div>
          <button
            onClick={() => {
              registerButtonHandler({
                name: this.state.name,
                email: this.state.email,
              });
              this.setState({ name: "", email: "" });
            }}
          >
            Cadastrar
          </button>
        </div>
      </RegisterWrapper>
    );
  }
}

export default Register;
