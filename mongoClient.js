const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const url = "mongodb://martin:martin@localhost:27017";
const client = new MongoClient(url);


async function getCollection(collection) {
    try {
        await client.connect();
        console.log('Connected to mongoDB!');
        const db = client.db('publication');
        return db.collection(collection);
    } catch (error) {
        console.error(error);
    }
}

function closeDB() {
    client.close();
    console.log('Connection to mongoDB closed');
}

module.exports.getProducts = async (name) => {
    const collection = await getCollection('products');

    const toSearch = name ? { name: name } : {};
    const findResult = await collection.find(toSearch).toArray();
    
    closeDB();

    return findResult;
}

module.exports.getProduct = async (id) => {
    const collection = await getCollection('products');

    const result = await collection.findOne({ _id: new ObjectId(id) });
    closeDB();

    return result;
}

module.exports.PostProduct = async (product) => {
    const collection = await getCollection('products');

    const date = new Date();
    product.created_at = date.toUTCString();

    const inserted = await collection.insertOne(product);
    closeDB();

    return inserted;
}
