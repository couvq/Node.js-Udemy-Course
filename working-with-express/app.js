const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    res.send('This is the add product page')
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000, () => {
    console.log('listening on port 3000.');
});