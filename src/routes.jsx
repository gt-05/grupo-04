import {
        Route,
        createBrowserRouter,
        createRoutesFromElements
    } from 'react-router-dom';

    import HomePage from './pages/HomePage';
    import productListingPage from './pages/ProductListingPage';

export default createBrowserRouter(
    createRoutesFromElements(
         <>
            <Route path='/' element={<HomePage />}/>
            <Route path='/products' element={<productListingPage />}/>
        </>
    )
)
   