import styled from 'styled-components';

export const ContatoContainer = styled.div`
display:  grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;

`;


export const Dados = styled.ul`
    padding: 0px;
    list-style: none;
`;


export const DadosItens = styled.li`
    font-size: 1.2rem;
   
    margin-bottom: .8rem;

    &::before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 4px;
        background: #ddd;
        margin-right: 10px
    
    }
`;
