<<<<<<< HEAD
import ProductListing from "./components/ProductListing"
import Section from "./components/Section";
import HomePage from "./pages/HomePage";

=======
// import HomePage from "./pages/HomePage";
import {
  RouterProvider
} from 'react-router-dom';
import routes from './routes';
>>>>>>> 2507dc735cf0151652688d29a0515c1cdeb6ce30


function App() {

return  <RouterProvider router={routes} />

<<<<<<< HEAD
  return (
    <>
    <HomePage/>
    <Section tittle="Produtos em Alta" link = {{"text": "Ver todos", "href": "https://etc"}}></Section>
      <ProductListing />
    </>
  );
=======
  // return (
  //   <>
  //     <HomePage />
  //   </>
  // );
>>>>>>> 2507dc735cf0151652688d29a0515c1cdeb6ce30
}

export default App
