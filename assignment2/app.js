const express = require('express');

const app = express();

app.use('/users', (req, res) => {
    const users = [
        {id: 1, name: 'David'},
        {id: 2, name: 'Quentin'},
        {id: 3, name: 'Richard'}
    ];

    res.send(users);
});

app.use('/', (req, res) => {
    res.send('<h1>Welcome to my app!</h1>');
});

app.listen(3000, () => {
    console.log('Listening on port 3000.')
});