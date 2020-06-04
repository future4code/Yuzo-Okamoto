import React from 'react';

export default class Etapa1 extends React.Component {

    state = {
        form1: [
            {
                name: "",
                age: "",
                email: "",
                scholarity: ""
            }
        ],
        nameInput: "",
        ageInput: "",
        emailInput: "",
        scholarityInput: ""
    }

    onClickNextPage = () => {
        this.props.refreshPage("E2");
    }

    render() {
        return(
            <div>
                <div>
                    <div>
                        <label>Nome</label>
                        <input placeholder="Nome Completo" />
                    </div>
                </div>
                <div>
                    <div>
                        <label>Idade</label>
                        <input placeholder="Idade" />
                    </div>
                </div>
                <div>
                    <div>
                        <label>E-mail</label>
                        <input placeholder="johndoe@exemplo.com" />
                    </div>
                </div>
                <div>
                    <div>
                        <label>Escolaridade</label>
                        <select value="EMI">
                            <option value="EMI">Ensino Médio Incompleto</option>
                            <option value="EMC">Ensino Médio Completo</option>
                            <option value="ESI">Ensino Superior Incompleto</option>
                            <option value="ESC">Ensino Superior Completo</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <button onClick={this.onClickNextPage}>Próxima Etapa</button>
                    </div>
                </div>
            </div>
        );
    }
}