import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filter: ''
    }

  componentDidUpdate() {
    console.log('Atualizou');
    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas));
  };

  componentDidMount() {
    console.log('Montou');
    if (localStorage.getItem('tarefas')) {
      this.setState({tarefas: JSON.parse(localStorage.getItem('tarefas'))});
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value});
  }

  onEnterInput = (event) => {
    if (event.key === 'Enter') {
      this.criaTarefa();
    } 
  }

  criaTarefa = () => {
    if (this.state.inputValue !== '') {
      const novaTarefa = {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false
      };
      const novaTarefas = [...this.state.tarefas, novaTarefa];
      this.setState({tarefas: novaTarefas, inputValue: ''});
      
    } else {
      alert('Erro: informe um nome para a tarefa antes de adicioná-la.');
    }
  }

  selectTarefa = (id) => {
    const novaTarefas = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.completa = !tarefa.completa;
      }
      return tarefa;
    });
    this.setState({tarefas: novaTarefas});
  }

  onChangeFilter = (event) => {
    this.setState({filter: event.target.value});
  }

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} onKeyDown={this.onEnterInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                key={tarefa.id}
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
