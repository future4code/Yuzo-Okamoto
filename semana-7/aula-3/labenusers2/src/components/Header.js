import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background: #ff7828;
  grid-row: 1 / 2;
  grid-column: 1 / 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <h1>LabenUsers2</h1>
      </HeaderWrapper>
    );
  }
}

export default Header;
