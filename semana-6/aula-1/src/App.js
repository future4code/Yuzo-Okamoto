import React from 'react';
import { AppContainer, Main, Footer } from './AppStyles.js';

// Main
import Breadcrumb from './components/Breadcrumb';
import FormContainer from './components/FormContainer';

class App extends React.Component {

  state = {
    rendered: "E1"
  }

  refreshPage = (rendered) => {
    switch (rendered) {
      case "E1":
        this.setState({
          rendered: "E1"
        });
        break;
      case "E2":
        this.setState({
          rendered: "E2"
        });
        break;
      case "E3":
      this.setState({
        rendered: "E3"
      });
      break;
      default:
      this.setState({
        rendered: "Fim"
      });
      break;
    }
  }

  render() {

    return (
      <AppContainer>
          <Main>
              <Breadcrumb rendered={this.state.rendered} refreshPage={this.refreshPage} />
              <FormContainer rendered={this.state.rendered} refreshPage={this.refreshPage} />
          </Main>

          <Footer>
              <h6>Developed by Yuzo Santana Okamoto @ github</h6>
          </Footer>
      </AppContainer>
    );
  }
}

export default App;
