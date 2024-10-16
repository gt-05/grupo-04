import ProductListing from "./components/ProductListing"
import Section from "./components/Section";
import HomePage from "./pages/HomePage";



function App() {


  return (
    <>
    <HomePage/>
    <Section tittle="Produtos em Alta" link = {{"text": "Ver todos", "href": "https://etc"}}></Section>
      <ProductListing />
    </>
  );
}

export default App
