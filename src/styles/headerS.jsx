import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.nav`
  margin-bottom: 2rem;
`;

export const Lista = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ListaItens = styled.li`
    display: flex;
    gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 1.2rem ;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  background-color: #eee;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: .3s ease;

  &:hover, &.active { 
    background-color: #ddd;
  }

`;
