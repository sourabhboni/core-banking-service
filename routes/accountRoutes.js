const express = require('express');
const { createAccount, getBalance } = require('../controllers/accountController');

const router = express.Router();

// Route to create a new account
router.post('/create', createAccount);

// Route to retrieve account balance
router.get('/:accountNumber/balance', getBalance);

module.exports = router;
