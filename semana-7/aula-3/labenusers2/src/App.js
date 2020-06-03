import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div``;

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <header>Header</header>
        <main>Main</main>
        <footer>Footer</footer>
      </AppWrapper>
    );
  }
}

export default App;
