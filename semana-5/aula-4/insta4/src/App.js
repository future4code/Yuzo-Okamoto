import React from 'react';
import './App.css';
import Post from './components/Post/Post';

import styled from 'styled-components'

class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50?random=1",
        fotoPost: "https://picsum.photos/200/150?random=2"
      },
      {
        nomeUsuario: "soter",
        fotoUsuario: "https://picsum.photos/50/50?random=3",
        fotoPost: "https://picsum.photos/200/150?random=4"
      },
      {
        nomeUsuario: "caio",
        fotoUsuario: "https://picsum.photos/50/50?random=5",
        fotoPost: "https://picsum.photos/200/150?random=6"
      },
      {
        nomeUsuario: "darvas",
        fotoUsuario: "https://picsum.photos/50/50?random=7",
        fotoPost: "https://picsum.photos/200/150?random=8"
      }
    ],
    newNomeUsuario: "",
    newFotoUsuario: "",
    newFotoPost: ""
  }

  onChangeNewNome = (event) => {
    this.setState({
      newNomeUsuario: event.target.value
    })
  }

  onChangeNewFotoUsuario = (event) => {
    this.setState({
      newFotoUsuario: event.target.value
    })
  }

  onChangeNewFotoPost = (event) => {
    this.setState({
      newFotoPost: event.target.value
    })
  }

  onClickNewPost = () => {
    const newPost = {
      nomeUsuario: this.state.newNomeUsuario,
      fotoUsuario: this.state.newFotoUsuario,
      fotoPost: this.state.newFotoPost
    }

    const newPosts = [...this.state.posts, newPost]

    this.setState({
      posts: newPosts,
      newNomeUsuario: "",
      newFotoUsuario: "",
      newFotoPost: ""
    })
  }

  render() {

    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post 
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })

    const AppWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
    `

    const NewPostDiv = styled.div`
      border: 1px solid gray;
      width: 300px;
      margin-bottom: 10px;
    `

    const NewPostForm = styled.form`
      display: flex;
      flex-direction: column;
      align-items: stretch;
    `

    const InputContainer = styled.div`
      display: flex;
      justify-content: space-between;
      margin: 5px;
    `
    const NewPostButton = styled.button`
      width: 100px;
      margin: 5px 5px 10px auto;
    `

    return (
      <AppWrapper>

        <NewPostDiv>
          <NewPostForm>
              <InputContainer>
                <label>nome usuário</label>
                <input onChange={this.onChangeNewNome} value={this.state.newNomeUsuario}/>
              </InputContainer>

              <InputContainer>
                <label>foto perfil url</label>
                <input onChange={this.onChangeNewFotoUsuario} value={this.state.newFotoUsuario}/>
              </InputContainer>

              <InputContainer>
                <label>foto post url</label>
                <input onChange={this.onChangeNewFotoPost} value={this.state.newFotoPost}/>
              </InputContainer>

              <NewPostButton onClick={this.onClickNewPost}>Novo Post</NewPostButton>
          </NewPostForm>
        </NewPostDiv>

        <div className={'app-container'}>
          {listaDePosts}
        </div>

      </AppWrapper>
      
    );
  }
}

export default App;
