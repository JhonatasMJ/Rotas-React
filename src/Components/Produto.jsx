import React from "react";
import { useParams } from "react-router-dom";
import { Desc, Img, Preco, ProdutoContainer } from "../styles/produtoS";
import { Helmet } from "react-helmet";

const Produto = () => {
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState(null);
  const [produto, setProduto] = React.useState(null);

  const { id } = useParams(); //Usado para pegar o id do produto

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true); //Fala que o loading vai começar assim que o fetch começar
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch {
        setErro("ocorreu um erro");
      } finally {
        //Independente do que acontecer, volte o loading para false
        setLoading(false);
      }
    }

    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (erro) return <p>{erro}</p>;
  if (produto === null) return null;
  return (
    <>
      <Helmet>
        <title> Ranek | {produto.nome} </title>
        <meta
          name="description"
          content={`Essa é a pagina do produto ${produto.nome}`}
        />
      </Helmet>

      <ProdutoContainer className="animeLeft">
        <div>
        {produto.fotos.map((foto) => (
          <Img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}

        </div>
        <div>
          <h1>{produto.nome}</h1>
          <Preco>R${produto.preco}</Preco>
          <Desc>{produto.descricao}</Desc>
        </div>
      </ProdutoContainer>
    </>
  );
};

export default Produto;
