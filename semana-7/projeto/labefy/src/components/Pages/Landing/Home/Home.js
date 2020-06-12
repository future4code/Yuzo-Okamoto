import React from "react";
import { StyledHome } from "./Style";

class Home extends React.Component {
  render() {
    return (
      <StyledHome className="rowWrapper">
        <h2 className="rowTitle">Minhas Playlists</h2>
        <div className="cardGrid">
          {this.props.playlists.length > 0 ? (
            this.props.playlists.map((playlist) => (
              <div className="card">
                <p>{playlist.name}</p>
                <p>descrição</p>
                <span>|></span>
              </div>
            ))
          ) : (
            <p>Você ainda não possui nenhuma playlist</p>
          )}
        </div>
      </StyledHome>
    );
  }
}

export default Home;
