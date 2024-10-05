import styled from "styled-components";

export const ProdutoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr ;
 
`;

export const Preco = styled.span`
  padding: .5rem;
  background-color: #91fb5d;
  color: #017e01;
  border-radius: 4px;
`;

export const Desc = styled.p`
  font-size: 1.2rem;
  line-height: 1.2;
`;

export const Img = styled.img`
  margin-bottom: 2rem;
`;
