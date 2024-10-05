import React from 'react'
import { HeaderContainer, Lista, ListaItens, StyledNavLink } from '../styles/headerS'


const Header = () => {
  return (
    <HeaderContainer>
      <Lista>
        <ListaItens>
          <StyledNavLink to='/' end>Produtos</StyledNavLink>
          <StyledNavLink to='contato'>Contato</StyledNavLink>
        </ListaItens>
      </Lista>
    </HeaderContainer>
       
 
  )
}

export default Header
