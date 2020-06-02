import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import axios from "axios";

import Users from "./components/Users/Users";
import Register from "./components/Register/Register";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  > h1 {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Breadcrumbs = styled.div`
  align-self: flex-start;
  margin-left: 1rem;
  padding: 0.25rem;
  font-size: 75%;
  > span {
    padding: 0 0.25rem;
  }
  > span:nth-child(2) {
    text-decoration: underline;
  }
`;

class App extends React.Component {
  state = {
    usersPage: true,
    users: [],
  };

  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "yuzo",
          },
        }
      )
      .then((response) => {
        console.log("GET USERS SUCCESSFUL: ", response);
        this.setState({ users: response.data });
      })
      .catch((error) => console.log("GET USERS FAILED: ", error.message));
  };

  postUsers = (newUserData) => {
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        newUserData,
        {
          headers: {
            Authorization: "yuzo",
          },
        }
      )
      .then((response) => {
        console.log("POST NEW USER SUCCESSFUL: ", response);
        this.getUsers();
      })
      .catch((error) => console.log("POST NEW USER FAILED: ", error.message));
  };

  deleteUser = (userData) => {
    if (window.confirm(`Confirme para deletar o usuário ${userData.name}.`)) {
      axios
        .delete(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/" +
            userData.id,
          {
            headers: {
              Authorization: "yuzo",
            },
          }
        )
        .then((response) => {
          console.log("DELETE USER SUCCESSFUL: ", response);
          this.getUsers();
        })
        .catch((error) => console.log("DELETE USER FAILED: ", error.message));
    }
  };

  onClickNavButton = () => {
    this.setState({
      usersPage: !this.state.usersPage,
    });
  };

  onClickRegisterButton = (data) => {
    if (
      data.name !== "" &&
      data.name !== undefined &&
      data.email !== "" &&
      data.email !== undefined
    ) {
      this.postUsers(data);
    } else {
      console.log("ERROR: INPUT VALUE(S) UNDEFINED. POST NEW USER CANCELED");
    }
  };

  render() {
    const pageLoader = this.state.usersPage ? (
      <Users
        users={this.state.users}
        navButtonHandler={this.onClickNavButton}
        deleteUserHandler={this.deleteUser}
      />
    ) : (
      <Register
        registerButtonHandler={this.onClickRegisterButton}
        navButtonHandler={this.onClickNavButton}
      />
    );

    return (
      <>
        <GlobalStyle />

        <AppWrapper>
          <Header>
            <h1>Labenusers</h1>
            <Breadcrumbs>
              <span>Labenusers</span> >
              <span>{this.state.usersPage ? "Usuários" : "Cadastro"}</span>
            </Breadcrumbs>
          </Header>
          {pageLoader}
        </AppWrapper>
      </>
    );
  }
}

export default App;
