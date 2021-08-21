const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    name:{type: String , require: true, trim: true},
    date:{type: String , require: true, trim: true},
    amount:{type: String , require: true, trim: true}
})

const Payment = mongoose.model("payments", paymentSchema);

module.exports = Payment;