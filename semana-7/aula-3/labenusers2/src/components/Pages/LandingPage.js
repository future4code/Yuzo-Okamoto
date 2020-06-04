import React from "react";
import styled from "styled-components";

const LandingPageWrapper = styled.article`
  background: #1f2c3b;
  grid-row: 2 / 4;
  grid-column: 2 / 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7rem;
  font-size: 2.2rem;
`;

class LandingPage extends React.Component {
  render() {
    return (
      <LandingPageWrapper>
        <h1>Bem-vindo ao LabenUsers II!</h1>
        <p>
          Navegue pelo menu lateral para registrar e ver os usuários
          cadastrados.
        </p>
      </LandingPageWrapper>
    );
  }
}

export default LandingPage;
