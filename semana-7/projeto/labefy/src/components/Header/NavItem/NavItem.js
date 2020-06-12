import React from "react";
import { StyledNavItem } from "./Style";

class NavItem extends React.Component {
  render() {
    const { id, name, activeNav, handleNavItem } = this.props;
    return (
      <StyledNavItem
        id={id}
        activeNav={activeNav}
        onClick={() => handleNavItem(id)}
      >
        <p>{name}</p>
      </StyledNavItem>
    );
  }
}

export default NavItem;
