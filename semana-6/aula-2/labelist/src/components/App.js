import React from 'react';
import { StyledApp, Header, Main, Section, Footer, Container } from './StyledApp.js';

class App extends React.Component {
  
  state = {
    taskList: [{
      id: 0,
      name: "",
      done: false
    }],
    taskInput: "",
    taskFilter: "none"
  };

  componentDidMount() {
    const taskListParsed = JSON.parse(localStorage.getItem("taskList"));
    this.setState({
      taskList: taskListParsed
    });
  }

  componentDidUpdate() {
    localStorage.setItem("taskList", JSON.stringify(this.state.taskList));
  }

  onChangeEvent = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  onClickAddTask = (e) => {
    e.preventDefault()
    if (this.state.taskInput) {
      const newTask = {
        id: Date.now(),
        name: this.state.taskInput,
        done: false
      };

      const newTaskList = [...this.state.taskList, newTask];
      this.setState({taskList: newTaskList});

    } else {
      alert("Erro: informe o nome da tarefa antes de adicioná-la.");
    }
  }

  onClickTask = (e) => {
    e.target.classList.toggle("task-done");
  }

  render() {
    // const taskList = this.state.taskList.map((task) => {
    //   return (
    //     <li key={Date.now()} onClick={this.onClickTask}>{task.name}</li>
    //   );
    // });

    return (
      <StyledApp>
        
        <Header>
          <Container>
            <h1>LabeList - Gerenciador de Tarefas</h1>
          </Container>
        </Header>

        <Main>
          <Container>
            <Section>
              <form>
                <input id="taskInput" onChange={this.onChangeEvent} value={this.state.taskInput}/>
                <button onClick={this.onClickAddTask}>Adicionar</button>
              </form>
            </Section>

            <Section>
              <form>
                <label>Filtro</label>
                <select onChange={this.onChangeEvent} id="taskFilter" value={this.state.taskFilter}>
                  <option value="none">Nenhum</option>
                  <option value="in progress">Pendentes</option>
                  <option value="done">Completas</option>
                </select>
              </form>
            </Section>

            <Section>
              <ul>
                {/* {this.state.taskList ? taskList : null} */}
              </ul>
            </Section>
          </Container>
        </Main>

        <Footer>
          <Container>
            <h6>Developed by Yuzo Santana Okamoto @ github</h6>
          </Container>
        </Footer>

      </StyledApp>
    );
  }
}

export default App;
