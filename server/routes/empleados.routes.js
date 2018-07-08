const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        status: 'Hello world!!'
    });
})

module.exports = router;