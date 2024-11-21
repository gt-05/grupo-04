const bcrypt = require('bcrypt');

module.exports = (request, response, next) => {

    if(!request.body.password) {
        return next();
    }

    let salt = bcrypt.genSaltSync(Number(process.env.SALT));
    request.body.password = bcrypt.hashSync(
        request.body.password.toString(),
        salt
    );
    next();
}