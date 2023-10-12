const express = require('express');
const { signup } = require('../controllers/user.controller');
const { validateSignup } = require('../middleware/validation');

const router = express.Router();

router.post('/register', validateSignup, signup);

module.exports = router;
