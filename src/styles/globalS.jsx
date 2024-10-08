import styled, { createGlobalStyle} from 'styled-components';


export const AppContainer = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 10rem);
`;

export const Content = styled.div`
    flex: 1;
`;

export const GlobalStyle = createGlobalStyle`
  body {
   margin: 2rem;
    font-family: Arial, Helvetica, sans-serif;
  
  }

  img {
    max-width: 80%;
    border-radius: 0.5rem;
    display: block;
  }
  a {
    text-decoration: none;
    color: black;
  }
  h1 {
    font-size:1.4rem;
  }

  .animeLeft {
    transform: translateX(-20px);
    opacity: 0;
    animation: animeLeft .6s forwards;
  }

 

  .loading {
    width:20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ccc;
    border: 10px solid #ccc;
    border-right-color: transparent;
    animation: loading 1s infinite;
  }

  @keyframes animeLeft {
    to {
      transform: initial;
      opacity: initial;
    }
  }

  @keyframes loading {
  to {
    transform: rotate(360deg);
  }
}
`;

