const express = require('express');

const router = express.Router();

router.use('/sensors', require('./sensors'));

module.exports = router;
