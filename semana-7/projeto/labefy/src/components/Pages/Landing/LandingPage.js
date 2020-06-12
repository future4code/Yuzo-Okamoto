import React from "react";
import { StyledLanding } from "./Style";
import axios from "axios";

import Home from "./Home/Home";

const axiosConfig = {
  headers: {
    Authorization: "yuzo",
  },
};

class LandingPage extends React.Component {
  state = {
    currentNav: this.props.currentNav,
    playlists: [],
  };

  componentDidMount() {
    this.fetchAllPlaylists();
  }

  fetchAllPlaylists = async () => {
    try {
      const allPlaylists = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        axiosConfig
      );
      this.setState({ playlists: allPlaylists.data.result.list });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const renderContent = () => {
      switch (this.state.currentNav) {
        case "home":
          return <Home playlists={this.state.playlists} />;
        default:
          return <p>Página não encontrada</p>;
      }
    };
    return <StyledLanding>{renderContent()}</StyledLanding>;
  }
}

export default LandingPage;
