const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('./mongoClient.js');

const router = express.Router();
module.exports = router;

router.use(bodyParser.json({ extended: true }));

//Get all Method (with search option)
router.get('/products', async (req, res) => {
    fs.writeFileSync('./test.txt', 'Error: ');
    res.send(await mongoClient.getProducts(req.query.name));
});

//Post Method
router.post('/products', async (req, res) => {
    res.send(await mongoClient.postProduct(req.body));
});


router.get('/products/ip', async (req, res) => {
    const ip = require('ip');
    res.send("My IP is: " + ip.address());
});


//Get by ID Method
router.get('/products/:id', async (req, res) => {
    res.send(await mongoClient.get/Product(req.params.id));
});
