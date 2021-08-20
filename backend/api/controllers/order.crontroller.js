const order = require('../models/order.model')

const updateToProcess = async(req, res)=>{
    try{
         await order.findByIdAndUpdate(req.params.id,
            {
                WashingStatus : "processing",
                Hours : req.body.hours
            })
        res.status(200).json({message: 'order successfully approved'})
    }catch(err){
            res.status(200)
            console.log(err.message);
    }
}

const updateToCompleate = async(req, res)=>{
    try{
         await order.findByIdAndUpdate(req.params.id,
            {
                WashingStatus : "Completed",
            })
        res.status(200).json({message: 'order successfully approved'})
    }catch(err){
            res.status(200)
            console.log(err.message);
    }
}