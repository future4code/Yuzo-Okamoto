import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton';
import yuzo from './img/yuzo.jpg'
import emailIcon from './img/email.svg'
import enderecoIcon from './img/endereco.svg'
import sistemaIcon from './img/sistema.png'
import governancaIcon from './img/governanca.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={yuzo} 
          nome="Yuzo" 
          descricao="Oi, eu sou o Yuzo. Sou aluno da Labenu e estou estudando para me tornar um dev Full Stack! Adoro codar e assistir conteúdos de comédia. Ainda não recebi bronca do Astrodev hahaha!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={emailIcon}
          titulo="Email: "
          texto="yuzokamoto@gmail.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={enderecoIcon}
          titulo="Endereço: "
          texto="Águas Claras - Distrito Federal"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Freelancer Dev Full Stack | React" 
        />
        
        <CardGrande 
          imagem="http://clipart-library.com/data_images/280245.png" 
          nome="Técnico de Suporte TI" 
          descricao="Suporte técnico em TI para PCs e Notebooks" 
        />
      </div>

      <div className="page-section-container">
        <h2>Formações Acadêmicas</h2>
        <CardGrande 
          imagem={sistemaIcon}
          nome="Análise e Desenvolvimento de Sistemas" 
          descricao="Cursado entre 2017/2019" 
        />

        <CardGrande 
          imagem={governancaIcon}
          nome="Gestão e Governança de TI" 
          descricao="Previsão de formatura 2020/02" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
