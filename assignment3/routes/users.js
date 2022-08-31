const express = require('express');

const router = express.Router();

router.get('/users', (req, res) => {
    res.send('Here are our users...');
});

module.exports = router;