import ProductListing from "./components/ProductListing"
import Section from "./components/Section";


function App() {


  return (
    <>
    <Section tittle="Produtos em Alta" link = {{"text": "Ver todos", "href": "https://etc"}}></Section>
      <ProductListing />
    </>
  );
}

export default App
