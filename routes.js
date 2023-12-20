const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('./mongoClient.js');

const router = express.Router();
module.exports = router;

router.use(bodyParser.json({ extended: true }));

//Get all Method (with search option)
router.get('/products', async (req, res) => {
    res.send(await mongoClient.getProducts(req.query.name));
});

//Get by ID Method
router.get('/products/:id', async (req, res) => {
    res.send(await mongoClient.getProduct(req.params.id));
});

//Post Method
router.post('/products', async (req, res) => {
    res.send(await mongoClient.PostProduct(req.body));
});
