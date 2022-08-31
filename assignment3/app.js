const express = require('express');
const path = require('path');

const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/users');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);
app.use(userRoutes);

app.listen(3000, () => {
    console.log('Listening on port 3000.')
})