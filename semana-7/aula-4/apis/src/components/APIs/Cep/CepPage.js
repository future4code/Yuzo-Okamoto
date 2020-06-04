import React from "react";
import styled from "styled-components";
import axios from "axios";

const CepWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  > h2 {
    font-style: italic;
  }
`;

const SearchDiv = styled.div`
  margin-top: 3rem;
  > input {
    margin-top: 3rem;
  }
`;

const ResultDiv = styled.div`
  margin-top: 3rem;
  > p {
    border-bottom: 1px dotted black;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    > span:first-child {
      margin-right: 1rem;
    }
  }
`;

class CepPage extends React.Component {
  state = {
    cepInput: "",
    cep: "",
  };

  fetchCep = async (cep) => {
    try {
      let res = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);
      this.setState({ cep: res.data });
    } catch (err) {
      console.log(err.message);
    }
  };

  validadeCep = () => {
    let cepTxt = this.state.cepInput;
    let cepNum = Number(this.state.cepInput);

    if (cepNum && cepTxt.length === 8) {
      this.fetchCep(cepNum);
      this.setState({ cepInput: "" });
    } else {
      alert("ERRO: CEP inválido.");
      console.log("cep inválido: ", cepNum);
    }
  };

  cepHandler = (e) => {
    e.preventDefault();
    this.setState({
      cepInput: e.target.value,
    });
  };

  cepHandlerEnter = (e) => {
    if (e.key === "Enter") {
      this.validadeCep();
    }
  };

  render() {
    return (
      <CepWrapper>
        <h2>CEP API</h2>
        <SearchDiv>
          <h5>Buscar Endereço por CEP</h5>
          <input
            type="text"
            value={this.state.cepInput}
            onChange={this.cepHandler}
            onKeyDown={this.cepHandlerEnter}
            placeholder="Informe o CEP"
          />
          <button onClick={this.validadeCep}>Buscar</button>
        </SearchDiv>
        <ResultDiv>
          {this.state.cep ? (
            <>
              <p>
                <span>CEP:</span>
                <span>{this.state.cep.cep}</span>
              </p>
              <p>
                <span>UF:</span>
                <span>{this.state.cep.uf}</span>
              </p>
              <p>
                <span>Cidade:</span>
                <span>{this.state.cep.localidade}</span>
              </p>
              <p>
                <span>Bairro:</span>
                <span>{this.state.cep.bairro}</span>
              </p>
              <p>
                <span>Logradouro:</span>
                <span>{this.state.cep.logradouro}</span>
              </p>
            </>
          ) : (
            <></>
          )}
        </ResultDiv>
      </CepWrapper>
    );
  }
}

export default CepPage;
