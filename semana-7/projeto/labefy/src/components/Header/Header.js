import React from "react";
import {
  StyledHeader,
  HeaderLogo,
  HeaderNav,
  NavPlaylists,
  NavSelect,
} from "./Style.js";

import NavItem from "./NavItem/NavItem";

class Header extends React.Component {
  state = {
    activeNav: "home",
  };

  handleNavItem = (newNav) => {
    this.setState({ activeNav: newNav });
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

        <NavPlaylists>
          <h6>PLAYLISTS</h6>
          <p>
            <span>+</span>Criar playlist
          </p>
          <div>Playlist1</div>
          <div>Playlist2</div>
          <div>Playlist3</div>
        </NavPlaylists>

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
