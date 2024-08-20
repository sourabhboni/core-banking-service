const mongoose = require('mongoose');

// Define the account schema
const accountSchema = new mongoose.Schema({
  accountNumber: {
    type: String,
    required: true,
    unique: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
  owner: {
    type: String,
    required: true,
  },
});

// Export the Account model based on the schema
module.exports = mongoose.model('Account', accountSchema);
