import React from 'react'
import { ContatoContainer, Dados, DadosItens } from '../styles/contatoS'
import { Helmet } from 'react-helmet'
import foto from '../img/contato.jpg'


const Contato = () => {
  return (

    
    <ContatoContainer className='animeLeft'>
         <Helmet>
          <title>Ranek | Contato</title>
          <meta name="description" content="Essa é a pagina de contato" />
        </Helmet>
        <img  src={foto} alt="Máquina de escrever" />
        <div>
        <h1>Entre em contato</h1>
        <Dados>
            <DadosItens>jhonatasjhmj@gmail.com</DadosItens>
            <DadosItens>996039438</DadosItens>
            <DadosItens>Rua logo ali - 123</DadosItens>
        </Dados>
        </div>
    </ContatoContainer>
  )
}

export default Contato