const Account = require('../models/accountModel');

// Controller to handle account creation
const createAccount = async (req, res) => {
  try {
    const { accountNumber, owner } = req.body;
    const account = new Account({ accountNumber, owner });
    await account.save();
    res.status(201).json({ message: 'Account created successfully', account });
  } catch (error) {
    console.error('Error creating account:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to retrieve account balance
const getBalance = async (req, res) => {
  try {
    const { accountNumber } = req.params;
    const account = await Account.findOne({ accountNumber });
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }
    res.json({ balance: account.balance });
  } catch (error) {
    console.error('Error retrieving balance:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createAccount,
  getBalance,
};
