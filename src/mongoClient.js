const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017';

mongoose.connect(MONGO_URL, {
    user: "martin",
    pass: "martin",
    dbName: "publication"
});

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    created_at: { type: Date, default: Date.now() }
});

const Product = mongoose.model('Products', productSchema);


module.exports.getProducts = async (name) => {
    return await Product.find();
}

module.exports.getProduct = async (id) => {
    return await Product.findById(id);
}

module.exports.postProduct = async (product) => {
    const newProduct = new Product(product);
    return newProduct.save();
}
