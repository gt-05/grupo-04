const dotenv = require('dotenv');
dotenv.config();
require("./database/associations");

const express = require('express');
const cors = require('cors');
const imagePlaceholder = require('./midleware/image-placeholder');
const app = express();
app.disable('x-powered-by');

app.use(cors());
app.use(express.json());
app.use('/public', imagePlaceholder, express.static('public'));

const userRoutes = require('./routes/user-routes');
const productRoutes = require("./routes/product-routes");
const categoryRoutes = require("./routes/category-routes");
const productImagesRoutes = require("./routes/productImages-routes");


app.use(userRoutes);
app.use(productRoutes);
app.use(categoryRoutes);

module.exports = app;
