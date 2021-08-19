const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    name:{type: String , require: true, trim: true},
    date:{type: String , require: true, trim: true},
    Amount:{type: String , require: true, trim: true}
})

const Payment = mongoose.model("Payments", paymentSchema);

module.exports = Payment;