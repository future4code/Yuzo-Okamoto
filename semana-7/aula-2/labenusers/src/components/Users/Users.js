import React from "react";
import styled from "styled-components";

import NavButton from "../Buttons/NavButton";

const UsersWrapper = styled.section`
  > div {
    flex: 1;
    padding: 0 2rem;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1rem 0;
      border-bottom: 1px dotted white;
      transition: all 0.3s ease;
      > p {
        cursor: pointer;
      }
      > p:hover {
        background: rgba(0, 0, 0, 0.5);
      }
      > span {
        margin-left: 1rem;
        cursor: pointer;
        color: #ff0048;
      }
    }
  }
`;

const SelectedUserInfo = styled.div`
  position: absolute;
  width: 50vw;
  height: 50vh;
  border: 1px solid black;
  background: black;
  > div {
    border: none !important;
  }
`;

class Users extends React.Component {
  state = {
    selectedUser: false,
    userData: undefined,
  };

  onClickOpenUser = (userData) => {
    this.setState({ selectedUser: true, userData: userData });
  };

  onClickCloseUser = () => {
    this.setState({ selectedUser: false, userData: undefined });
  };

  render() {
    const { users, navButtonHandler, deleteUserHandler } = this.props;

    return (
      <UsersWrapper>
        <NavButton handler={navButtonHandler} load="Cadastro" />
        <h2>Tela de Usuários</h2>
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <p onClick={() => this.onClickOpenUser(user)}>{user.name}</p>
              <span onClick={() => deleteUserHandler(user)}>x</span>
            </div>
          ))}
        </div>

        {this.state.userData ? (
          <SelectedUserInfo>
            <div>
              <p>Nome: {this.state.userData.name}</p>
              <span onClick={this.onClickCloseUser}>X</span>
            </div>
            <div>
              <p>ID: {this.state.userData.id}</p>
            </div>
          </SelectedUserInfo>
        ) : (
          <></>
        )}
      </UsersWrapper>
    );
  }
}

export default Users;
