const path = require('path');
const fs = require('fs');
module.exports = (request, response, next) => {
    let file = path.resolve(`public/${request.path}`);
    if(fs.existsSync(file)) {
        return next();
    }
    let content = fs.readFileSync(path.resolve('public/placeholder.webp'));
    return response.end(content);
}

