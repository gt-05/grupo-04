import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import CategoryPage from './pages/categoryPage';
import OrderingPage from './pages/OrderingPage';

export default createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductListingPage />} />
            <Route path='/category' element={<CategoryPage />} />
            <Route path='/orderings' element={<OrderingPage />} />


        </>
    )
)
