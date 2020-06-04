import React from "react";
import styled from "styled-components";

const NavItemWrapper = styled.li`
  background: ${(props) => (props.active ? "#111921" : "none")};
  margin: 1rem 0;
  padding: 0.75rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  :hover {
    background: #111921;
  }
`;

class NavItem extends React.Component {
  render() {
    const navItemRender = () => {
      if (this.props.activePage === this.props.id) {
        return (
          <NavItemWrapper
            id={this.props.id}
            onClick={(event) => {
              this.props.activePageHandler(event.target.id);
            }}
            activePage={this.props.activePage}
            active="true"
          >
            {this.props.name}
          </NavItemWrapper>
        );
      } else {
        return (
          <NavItemWrapper
            id={this.props.id}
            onClick={(event) => {
              this.props.activePageHandler(event.target.id);
            }}
            activePage={this.props.activePage}
          >
            {this.props.name}
          </NavItemWrapper>
        );
      }
    };
    return <>{navItemRender()}</>;
  }
}

export default NavItem;
