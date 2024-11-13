const products = [
    {
        name: 'Produto A',
        price: 100.00,
        slug: 'produto-a',
        description: 'Descrição do Produto A',
        price_with_discount: 90.00,
        enabled: true,
        stock: 50
    },
    {
        name: 'Produto B',
        price: 200.00,
        slug: 'produto-b',
        description: 'Descrição do Produto B',
        price_with_discount: 180.00,
        enabled: true,
        stock: 30
    },
    {
        name: 'Produto C',
        price: 150.00,
        slug: 'produto-c',
        description: 'Descrição do Produto C',
        price_with_discount: null,
        enabled: true,
        stock: 0
    },
    {
        name: 'Novo Produto D',
        price: 220.87,
        slug: 'novo-produto-d',
        description: 'Descrição do Novo Produto D',
        price_with_discount: 180.00,
        enabled: true,
        stock: 30
    }
];

const categories = [
    {
        name: 'Eletrônicos',
        slug: 'eletronicos'
    },
    {
        name: 'Roupas',
        slug: 'roupas'
    },
    {
        name: 'Alimentos',
        slug: 'alimentos'
    }
];

const productCategories = [
    {
        product_id: 1,
        category_id: 1
    },
    {
        product_id: 2,
        category_id: 1
    },
    {
        product_id: 3,
        category_id: 2
    },
    {
        product_id: 3,
        category_id: 1
    },
    {
        product_id: 2,
        category_id: 2
    },
    {
        product_id: 4,
        category_id: 1
    }
];

const productImages = [
    {
        product_id: 1,
        path: '/imagens/produto-a-imagem1.jpg'
    },
    {
        product_id: 1,
        path: '/imagens/produto-a-imagem2.jpg'
    },
    {
        product_id: 2,
        path: '/imagens/produto-b-imagem1.jpg'
    },
    {
        product_id: 3,
        path: '/imagens/produto-c-imagem1.jpg'
    }
];


const ProductModel = require('../models/ProductModel');
const CategoryModel = require('../models/CategoryModel');
const ProductCategoryModel = require('../models/ProductCategoryModel');
const ProductImageModel = require("../models/ProductImageModel");

async function execute() {
    // await ProductModel.bulkCreate(products);
    await ProductImageModel.bulkCreate(productImages);
    // await CategoryModel.bulkCreate(categories);
    // await ProductCategoryModel.bulkCreate(productCategories);
}

execute();

