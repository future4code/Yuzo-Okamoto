import React from 'react';

export default class Etapa2 extends React.Component {

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
        this.props.refreshPage("E3");
    }

    render() {
        return(
            <div>
                <div>
                    <div>
                        <label>Curso</label>
                        <input placeholder="Nome do curso" />
                    </div>
                </div>
                <div>
                    <div>
                        <label>Unidade de Ensino</label>
                        <input placeholder="Nome da instituição" />
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