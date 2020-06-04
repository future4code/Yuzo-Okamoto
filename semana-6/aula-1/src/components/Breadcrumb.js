import React from 'react';

export default class Breadcrumb extends React.Component {

    state = {
        active: "E1",
        title: {
                one: "Dados Gerais",
                two: "Informações do Ensino Superior",
                three: "Informações Gerais de Ensino",
                end: "O Formulário acabou!"
            }
    }

    onClickEtapa = (e) => {
        this.setState({
            active: e.target.id
        });
        this.props.refreshPage(e.target.id);
    }

    render() {

        const title = () => {
            switch (this.props.rendered) {
                case "E1":
                    return this.state.title.one;
                case "E2":
                    return this.state.title.two;
                case "E3":
                    return this.state.title.three;
                default:
                    return this.state.title.end;
            }
        }

        return(
            <header>
                <div>
                    <h1>{title()}</h1>
                </div>
                <ul>
                    <li id="E1" onClick={this.onClickEtapa} >Etapa 1</li>
                    <li id="E2" onClick={this.onClickEtapa} >Etapa 2</li>
                    <li id="E3" onClick={this.onClickEtapa} >Etapa 3</li>
                </ul>
            </header>
        );
    }
}