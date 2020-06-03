import React from "react";
import styled from "styled-components";
import axios from "axios";

const UserListWrapper = styled.article`
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
    margin-top: 2rem;
  }
`;

const UserList = styled.ul`
  margin-top: 2rem;
  > li {
    width: 400px;
    padding: 1rem 0;
    margin-bottom: 1.2rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dotted white;
  }
`;

const UserName = styled.p`
  font-weight: bold;
  font-size: 2rem;
`;

const ButtonWrapper = styled.div`
  font-size: 1.4rem;
  height: 100%;
`;

const EditButton = styled.span`
  height: 100%;
  background: blue;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 3px;
  padding: 0.4rem 0.5rem;
`;

const DeleteButton = styled.span`
  height: 100%;
  background: red;
  cursor: pointer;
  border-radius: 3px;
  padding: 0.4rem 0.5rem;
`;

const axiosConfig = {
  headers: {
    Authorization: "yuzo",
  },
};

class UserListPage extends React.Component {
  state = {
    userList: [],
  };

  componentDidMount() {
    this.fetchUserList();
  }

  fetchUserList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
      )
      .then((res) => {
        this.setState({ userList: res.data });
      })
      .catch((err) => console.log(`GET falhou: ${err}`));
  };

  handleUserDeletion = (user) => {
    if (window.confirm(`Confirme para remover o usuário ${user.name}`)) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`,
          axiosConfig
        )
        .then(() => {
          alert(`O usuário ${user.name} foi removido com sucesso.`);
          this.fetchUserList();
        })
        .catch((err) => {
          alert(`Erro ao tentar remover o usuário ${user.name}`);
          console.log(`DELETE falhou: ${err}`);
        });
    }
  };

  render() {
    const renderUserList = this.state.userList.map((user) => {
      return (
        <li key={user.id}>
          <UserName>{user.name}</UserName>
          <ButtonWrapper>
            <EditButton>Editar</EditButton>
            <DeleteButton
              onClick={() => {
                this.handleUserDeletion(user);
              }}
            >
              Remover
            </DeleteButton>
          </ButtonWrapper>
        </li>
      );
    });

    return (
      <UserListWrapper>
        <h1>Lista de Usuários</h1>
        <UserList>
          {this.state.userList.length > 0 ? (
            renderUserList
          ) : (
            <li>Carregando...</li>
          )}
        </UserList>
      </UserListWrapper>
    );
  }
}

export default UserListPage;
