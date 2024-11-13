const ProductModel = require('../../models/ProductModel');

module.exports = async (request, response) => {
    let {body} = request;

    await ProductModel.update(body, {
        where: {
            id: request.params.id
        }
    });

    return response.status(204).end();
}