import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'
import iconeBandeiraPreta from '../../img/flag-24px.svg'
import iconeBandeiraBranca from '../../img/outlined_flag-24px.svg'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'
import iconeShare from '../../img/share-24px.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    marcado: false,
    compartilhando: false,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    if (!this.state.curtido) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1,
        curtido: true
      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1,
        curtido: false
      })
    }
  }

  onClickMarcacao = () => {
    this.setState({
      marcado: !this.state.marcado
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarcacao

    if(this.state.marcado) {
      iconeMarcacao = iconeBandeiraPreta
    } else {
      iconeMarcacao = iconeBandeiraBranca
    }

    let iconeCompartilhar = iconeShare
    let componenteComentario

    let componenteCompartilhar

    if(this.state.compartilhando) {
      componenteCompartilhar = <SecaoCompartilhar />
    }

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeSemContador 
          icone={iconeMarcacao}
          onClickIcone={this.onClickMarcacao}
        />

        <IconeSemContador 
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
      {componenteCompartilhar}
    </div>
  }
}

export default Post