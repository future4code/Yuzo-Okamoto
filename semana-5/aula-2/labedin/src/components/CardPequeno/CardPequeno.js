import React from 'react'
import './CardPequeno.css'

function CardPequeno (props) {
    return (
        <div>
            <div className="smallcard-container">
                <img src={props.imagem} alt="ícone de e-mail" />
                <h4>{props.titulo}</h4> <p>{props.texto}</p>
            </div>
        </div>
    )
}

export default CardPequeno