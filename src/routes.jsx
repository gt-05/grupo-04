import {
        Route,
        createBrowserRouter,
        createRoutesFromElements
    } from 'react-router-dom';

export default createBrowserRouter(
    createRoutesFromElements(
         <>
            <Route path='/' element={(<h1>Rota base</h1>)}/>
        </>
    )
)
   