import ProductListing from "./components/ProductListing"
import Section from "./components/Section";
import Home from "./pages/Home";


function App() {


  return (
    <>
    <Home/>
    <Section tittle="Produtos em Alta" link = {{"text": "Ver todos", "href": "https://etc"}}></Section>
      <ProductListing />
    </>
  );
}

export default App
