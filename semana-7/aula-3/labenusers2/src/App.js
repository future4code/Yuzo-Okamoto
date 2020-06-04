import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import SideNav from "./components/SideNav/SideNav";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

import LandingPage from "./components/Pages/LandingPage";
import RegisterUserPage from "./components/Pages/RegisterUserPage";
import UserListPage from "./components/Pages/UserListPage";

const AppWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
  grid-template-columns: 2fr 7fr 1fr;
`;

class App extends React.Component {
  state = {
    // LandingPage or RegisterUserPage or UserListPage
    activePage: "LandingPage",
  };

  activePageHandler = (activePageName) => {
    this.setState({
      activePage: activePageName,
    });
  };

  render() {
    const renderMainContent = () => {
      switch (this.state.activePage) {
        case "RegisterUserPage":
          return <RegisterUserPage />;
        case "UserListPage":
          return <UserListPage />;
        default:
          return <LandingPage />;
      }
    };

    return (
      <AppWrapper>
        <Header />

        <SideNav
          activePage={this.state.activePage}
          activePageHandler={this.activePageHandler}
        />

        {renderMainContent()}

        <Aside />

        <Footer />
      </AppWrapper>
    );
  }
}

export default App;
