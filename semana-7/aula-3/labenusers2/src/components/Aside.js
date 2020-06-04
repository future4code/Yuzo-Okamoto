import React from "react";
import styled from "styled-components";

const AsideWrapper = styled.aside`
  background: #415c7b;
  grid-row: 2 / 4;
  grid-column: 3 / 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class Aside extends React.Component {
  render() {
    return (
      <AsideWrapper>
        <h1>Aside</h1>
      </AsideWrapper>
    );
  }
}

export default Aside;
