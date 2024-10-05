import React from "react";
import { Helmet } from "react-helmet";
import { ProdutosContainer, ProdutosNome } from '../styles/produtosS'
import { Link } from "react-router-dom";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() =>{
    async function fetchProduto (url) {
        const response =  await fetch(url)
        const json = await response.json()
        setProdutos(json)

    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto`)
}, [])


  if (produtos == null) return null;
  return (
    <ProdutosContainer className="animeLeft">
      <Helmet>
        <title>Ranek | Produtos</title>
        <meta name="description" content="Essa é a pagina de produtos" />
      </Helmet>
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`}  key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <ProdutosNome>{produto.nome}</ProdutosNome>
        </Link>
      ))}
    </ProdutosContainer>
  );
};
export default Produtos;
