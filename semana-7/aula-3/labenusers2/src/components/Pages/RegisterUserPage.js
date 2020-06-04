import React from "react";
import styled from "styled-components";
import axios from "axios";

const RegisterUserPageWrapper = styled.article`
  background: #1f2c3b;
  grid-row: 2 / 4;
  grid-column: 2 / 3;
  height: 100%;
  display: flex;
  padding-top: 5rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  > h1 {
    margin: 2rem 0;
  }
  > form {
    display: flex;
    flex-direction: column;
    > label {
      font-size: 1rem;
    }
    > input {
      padding: 0.3rem 0.5rem;
      margin-bottom: 1rem;
      border: none;
      outline: none;
      border-radius: 3px;
    }
  }
`;

const axiosConfig = {
  headers: {
    Authorization: "yuzo",
  },
};

class RegisterUserPage extends React.Component {
  state = {
    name: "",
    email: "",
  };

  handleUserInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleUserRegistry = (e) => {
    e.preventDefault();
    if (this.state.name !== "" && this.state.email !== "") {
      const body = {
        name: this.state.name,
        email: this.state.email,
      };
      axios
        .post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          body,
          axiosConfig
        )
        .then(() => {
          alert(`Usuário ${body.name} adicionado com sucesso.`);
          this.setState({ name: "", email: "" });
        })
        .catch((err) => {
          alert(`Erro ao adicionar usuário ${body.name}`);
          console.log(err);
        });
    } else {
      alert(`Informe o nome e e-mail do usuário antes de adicioná-lo.`);
    }
  };

  render() {
    return (
      <RegisterUserPageWrapper>
        <h1>Registrar Novo Usuário</h1>
        <form>
          <label>NOME</label>
          <input
            id="name"
            value={this.state.name}
            type="text"
            placeholder="Nome"
            onChange={this.handleUserInput}
          />

          <label>E-MAIL</label>
          <input
            id="email"
            value={this.state.email}
            type="email"
            placeholder="E-mail"
            onChange={this.handleUserInput}
          />

          <button onClick={this.handleUserRegistry}>Registrar</button>
        </form>
      </RegisterUserPageWrapper>
    );
  }
}

export default RegisterUserPage;
