const {Router} = require('express');
const auth = require('../midleware/auth');

const router = Router();

router.use(auth);

module.exports = router;