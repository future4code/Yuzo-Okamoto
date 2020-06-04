import React, {Component} from 'react'
import './SecaoCompartilhar.css'

export class SecaoCompartilhar extends Component {

    state = {
        rede: '',
        texto: ''
    }

    onChangeTexto(event) {
        this.setState({
            texto: event.target.value
        })
    }

	onClickMidia(event) {
        if (event.target.id === "instagram") {
            this.setState({rede: 'Instagram'})
        } else if (event.target.id === "Facebook") {
            this.setState({rede: 'Facebook'})
        } else {
            this.setState({rede: 'Twitter'})
        }
        console.log(`Post compartilhado no ${this.state.rede} com a mensagem: ${this.state.texto}`)
    }

	render() {
		return <div className={'share-container'}>
            <div className={'btn'}>
                <button id={'instagram'} onClick={this.onClickMidia.bind(this)}>Instagram</button>
                <button id={'facebook'} onClick={this.onClickMidia.bind(this)}>Facebook</button>
                <button id={'twitter'} onClick={this.onClickMidia.bind(this)}>Twitter</button>
            </div>
            <div className={'comment'}>
                <textarea onChange={this.onChangeTexto.bind(this)} value={this.state.texto} placeholder="Digite sua mensagem"/>
            </div>
			
		</div>
	}
}
