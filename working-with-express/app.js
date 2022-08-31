const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).send('<h1>404 Error Page Not Found :(</h1>');
});

app.listen(3000, () => {
    console.log('listening on port 3000.');
});