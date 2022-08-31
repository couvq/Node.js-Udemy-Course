const express = require('express');

const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/users');

const app = express();

app.use(mainRoutes);
app.use(userRoutes);

app.listen(3000, () => {
    console.log('Listening on port 3000.')
})