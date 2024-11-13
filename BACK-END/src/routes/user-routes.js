
const privateRoutes = require('./private-routes');
const publicRoutes = require('./public-routes');

const AllUserController = require('../controllers/User/AllUserController');
const CreateController = require('../controllers/User/CreateController');
const encriptPassword = require('../midleware/encript-password');
const CreateTokenController = require('../controllers/User/CreateTokenController');

publicRoutes.get('/users', AllUserController);
privateRoutes.post('/users', encriptPassword, CreateController);
publicRoutes.post('/users/token', CreateTokenController);

module.exports = [publicRoutes, privateRoutes];