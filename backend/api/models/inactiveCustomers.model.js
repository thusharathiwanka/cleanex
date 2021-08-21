const mongoose = require("mongoose");

const InactiveCustomerSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  mobile: { type: String, required: true, trim: true },
  createdAt: { type: Date, required: true, default: Date.now() },
  updatedAt: { type: Date, required: true, default: Date.now() },
});

const InactiveCustomer = mongoose.model(
  "inactiveCustomers",
  InactiveCustomerSchema
);

module.exports = InactiveCustomer;
