import React from "react";
import StyledApp from "./Style";

import Header from "../Header/Header";

import LoginPage from "../Pages/Login/LoginPage";
import LandingPage from "../Pages/Landing/LandingPage";

class App extends React.Component {
  state = {
    currentPage: "landing",
    currentNav: "home",
  };

  handlePageChange = (newPage) => {
    this.setState({ currentPage: newPage });
  };

  handleNavChange = (newNav) => {
    this.state({ currentNav: newNav });
  };

  render() {
    const renderHeader = () => {
      if (this.state.currentPage === "login") {
        return <></>;
      } else {
        return <Header handlePageChange={this.handlePageChange} />;
      }
    };

    const renderMain = () => {
      switch (this.state.currentPage) {
        case "login":
          return <LoginPage />;
        case "landing":
          return (
            <LandingPage
              currentNav={this.state.currentNav}
              handleNavChange={this.handleNavChange}
            />
          );
        default:
          return <main>Página não encontrada</main>;
      }
    };

    return (
      <StyledApp>
        {renderHeader()}
        {renderMain()}
      </StyledApp>
    );
  }
}

export default App;
