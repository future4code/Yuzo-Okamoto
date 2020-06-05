import React from "react";
import { StyledHeader, HeaderLogo, HeaderNav, NavSelect } from "./Style.js";

import NavItem from "./NavItem/NavItem";

class Header extends React.Component {
  state = {
    activeNav: "home",
  };

  handleNavItem = (id) => {
    console.log(id);
    this.setState({ activeNav: id });
  };

  handleNavSelect = (event) => {
    console.log(event.target.value);
    if (event.target.value === "logout") {
      this.props.handlePageChange("login");
    }
  };

  render() {
    return (
      <StyledHeader>
        <HeaderLogo>
          <h4>Labefy</h4>
        </HeaderLogo>
        <HeaderNav>
          <NavItem
            activeNav={this.state.activeNav}
            handleNavItem={this.handleNavItem}
            id="home"
            name="Início"
          />
          <NavItem
            activeNav={this.state.activeNav}
            handleNavItem={this.handleNavItem}
            id="search"
            name="Buscar"
          />
          <NavItem
            activeNav={this.state.activeNav}
            handleNavItem={this.handleNavItem}
            id="library"
            name="Sua Biblioteca"
          />
        </HeaderNav>

        <NavSelect onChange={this.handleNavSelect}>
          <option value="">usuário</option>
          <option value="profile">Perfil</option>
          <option value="logout">Sair</option>
        </NavSelect>
      </StyledHeader>
    );
  }
}

export default Header;
