const payment = require('../models/payment.model')

const getAllPayment = async(req, res)=>{
        try{
            const payments = await payment.find()
            res.status(200).json(payment)
        }catch(err){
            res.status(400)
            console.log(err.message)
        }
}

const addPayment = async(req, res)=>{
        try{
            const newPayment = new payment(req.body)
            await newPayment.save()
            res.status(200)
        }catch(err){
            res.status(400)
            console.log(err.message)
        }
}

module.exports = {addPayment, getAllPayment}