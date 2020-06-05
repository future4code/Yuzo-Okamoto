import React from "react";
import StyledApp from "./Style";

import Header from "../Header/Header";

import LoginPage from "../Pages/Login/LoginPage";
import LandingPage from "../Pages/Landing/LandingPage";

class App extends React.Component {
  state = {
    currentPage: "landing",
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const renderCurrentPage = () => {
      switch (this.state.currentPage) {
        case "landing":
          return <LandingPage handlePageChange={this.handlePageChange} />;
        default:
          return <LoginPage />;
      }
    };

    return (
      <StyledApp>
        {this.state.currentPage === "login" ? (
          <></>
        ) : (
          <>
            <Header handlePageChange={this.handlePageChange} />
          </>
        )}
        {renderCurrentPage()}
      </StyledApp>
    );
  }
}

export default App;
