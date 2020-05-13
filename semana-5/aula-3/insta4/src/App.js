import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?random=1'}
          fotoPost={'https://picsum.photos/200/150?random=2'}
        />

        <Post
          nomeUsuario={'soter'}
          fotoUsuario={'https://picsum.photos/50/50?random=3'}
          fotoPost={'https://picsum.photos/200/150?random=4'}
        />

        <Post
          nomeUsuario={'caio'}
          fotoUsuario={'https://picsum.photos/50/50?random=5'}
          fotoPost={'https://picsum.photos/200/150?random=6'}
        />

        <Post
          nomeUsuario={'darvas'}
          fotoUsuario={'https://picsum.photos/50/50?random=7'}
          fotoPost={'https://picsum.photos/200/150?random=8'}
        />
      </div>
    );
  }
}

export default App;
