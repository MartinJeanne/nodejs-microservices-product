const express = require('express');
const routes = require('./routes.js');

const app = express();
const port = 3000;

app.use('/api', routes);

app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});
