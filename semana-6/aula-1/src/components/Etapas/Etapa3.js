import React from 'react';

export default class Etapa3 extends React.Component {

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
        this.props.refreshPage("Fim");
    }

    render() {
        return(
            <div>
                <div>
                    <div>
                        <label>Por que você não terminou um curso de graduação?</label>
                        <input placeholder="" />
                    </div>
                </div>
                <div>
                    <div>
                        <label>Cursos Complementares</label>
                        <select value="0">
                            <option value="0">Nenhum</option>
                            <option value="TEC">Curso Técnico</option>
                            <option value="ING">Curso de Inglês</option>
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