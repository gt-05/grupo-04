
const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

const isValidType = (type) => {
    return types.includes(type);
}

module.exports = {
    isValidType
}