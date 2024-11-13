const getBaseUrl = (path) => {
    return `${process.env.APP_SCHEMA}://${process.env.APP_HOSTNAME}:${process.env.APP_PORT}/${path}`;
}

const getPublicUrl = (path) => {
    return getBaseUrl(`${process.env.UPLOAD_BASE_DIR}/${path}`);
}

module.exports = {
    getBaseUrl, getPublicUrl
}