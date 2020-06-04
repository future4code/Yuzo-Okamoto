import React from "react";
import styled from "styled-components";

import LandingPage from "../Landing/LandingPage";
import BoredPage from "../APIs/Bored/BoredPage";
import CepPage from "../APIs/Cep/CepPage";
import PokePage from "../APIs/Poke/PokePage";

const AppWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  > header {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 2px dotted black;
    > h1 {
      background: rgb(25, 25, 25);
      border-radius: 5px;
      color: white;
      padding: 1rem 2rem;
      text-align: center;
    }
    > nav {
      margin-top: 1rem;
      border-left: 1px solid black;
      border-right: 1px solid black;
      padding: 0 2rem;
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

const NavItem = styled.span`
  background: ${(props) =>
    props.page === props.id ? "rgba(0, 0, 0, 0.2)" : "none"};
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  :hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

class App extends React.Component {
  state = {
    page: "poke",
  };

  navItemHandler = (e) => {
    this.setState({
      page: e.target.id,
    });
  };
  render() {
    const renderPage = () => {
      switch (this.state.page) {
        case "bored":
          return <BoredPage />;
        case "cep":
          return <CepPage />;
        case "poke":
          return <PokePage />;
        default:
          //home
          return <LandingPage />;
      }
    };
    return (
      <AppWrapper>
        <header>
          <h1>Praticando Requisições com APIs</h1>
          <nav>
            <div>
              <NavItem
                onClick={this.navItemHandler}
                page={this.state.page}
                id="home"
              >
                Home
              </NavItem>
            </div>
            <div>
              <NavItem
                onClick={this.navItemHandler}
                page={this.state.page}
                id="bored"
              >
                Bored
              </NavItem>
            </div>
            <div>
              <NavItem
                onClick={this.navItemHandler}
                page={this.state.page}
                id="cep"
              >
                CEP
              </NavItem>
            </div>
            <div>
              <NavItem
                onClick={this.navItemHandler}
                page={this.state.page}
                id="poke"
              >
                Pokemon
              </NavItem>
            </div>
          </nav>
        </header>

        {renderPage()}
      </AppWrapper>
    );
  }
}

export default App;
