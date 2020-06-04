import React from 'react';
//Etapas
import Etapa1 from './Etapas/Etapa1';
import Etapa2 from './Etapas/Etapa2';
import Etapa3 from './Etapas/Etapa3';
import Fim from './Etapas/Fim';

export default class FormContainer extends React.Component {
    render() {

        const etapa = () => {
            switch (this.props.rendered) {
              case "E1":
                return <Etapa1 active={this.props.rendered} refreshPage={this.props.refreshPage}/>
              case "E2":
                return <Etapa2 active={this.props.rendered} refreshPage={this.props.refreshPage}/>
              case "E3":
                return <Etapa3 active={this.props.rendered} refreshPage={this.props.refreshPage}/>
              default:
                return <Fim active={this.props.rendered} />
            }
          }

        return(
            <section>
                {etapa()}
            </section>
        );
    }
}