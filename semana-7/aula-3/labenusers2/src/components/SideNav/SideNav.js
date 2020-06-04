import React from "react";
import styled from "styled-components";

import NavItem from "./NavItem";

const SideNavWrapper = styled.nav`
  background: #18222e;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul``;

class SideNav extends React.Component {
  render() {
    return (
      <SideNavWrapper>
        <NavList>
          <NavItem
            name="Página Inicial"
            id="LandingPage"
            activePage={this.props.activePage}
            activePageHandler={this.props.activePageHandler}
          />

          <hr />

          <NavItem
            name="Registrar Usuário"
            id="RegisterUserPage"
            activePage={this.props.activePage}
            activePageHandler={this.props.activePageHandler}
          />

          <hr />

          <NavItem
            name="Lista de Usuários"
            id="UserListPage"
            activePage={this.props.activePage}
            activePageHandler={this.props.activePageHandler}
          />

          <hr />
        </NavList>
      </SideNavWrapper>
    );
  }
}

export default SideNav;
