import ProductListing from "./components/ProductListing"
import Section from "./components/Section";


function App() {


  return (
    <>
      <Section title="Produtos em alta" link={{ "text": "Ver todos", "href": "https://etc" }}>
        <ProductListing />
      </Section>
    </>
  );
}

export default App
