
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Content, AppContainer, GlobalStyle } from "./styles/globalS";
import Contato from "./Components/Contato";
import Produto from "./Components/Produto";
import Produtos from "./Components/Produtos";


const App = () => {
  return (
    <AppContainer>
      <GlobalStyle/>
      <BrowserRouter>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto/>}/>
            <Route path="contato" element={<Contato />} />
          </Routes>
        </Content>
        <Footer />
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
