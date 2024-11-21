const privateRoutes = require('./private-routes');
const publicRoutes = require('./public-routes');

const AllProductImagesController = require('../controllers/ProductImages/AllProductImagesController');


publicRoutes.get('/ProductImages', AllProductImagesController);
// publicRoutes.get('/products/:slug', GetBySlug);
// privateRoutes.post('/products', CreateController);
// privateRoutes.put('/products/:id?', UpdateController);
// privateRoutes.delete('/products/:id', DeleteController);
// publicRoutes.get('/products/:id/images', ListImagesController);

module.exports = [publicRoutes, privateRoutes];