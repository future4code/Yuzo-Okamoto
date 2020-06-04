import React from "react";
import styled from "styled-components";
import axios from "axios";

const PokeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  > h2 {
    font-style: italic;
  }
`;

class PokePage extends React.Component {
  state = {
    pokemons: "",
    types: "",
    filteredPokemon: "",
  };

  componentDidMount() {
    this.fetchPokeData();
  }

  fetchPokeData = async () => {
    try {
      let res = await axios.get(`https://pokeapi.co/api/v2/generation/1`);
      this.setState({
        pokemons: res.data.pokemon_species,
        types: res.data.types,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    const renderPokeTypes = this.state.pokemons ? (
      <div>
        <span>Filter By Type:</span>
        <select>
          <option value="">all</option>
          {this.state.types.map((type) => {
            return (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            );
          })}
        </select>
      </div>
    ) : (
      <div>Carregando...</div>
    );

    return (
      <PokeWrapper>
        <h2>Pokemon | Generation I</h2>
        {renderPokeTypes}
      </PokeWrapper>
    );
  }
}

export default PokePage;
