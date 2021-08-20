import React from 'react'
import PaymentForm from './PaymentForm'
import PaymentSummery from './PaymentSummery'

const Payment = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold flex justify-center mb-20 mt-5">Payment</h1>
            <div className=" shadow-2xl h-auto  mx-40 overflow-hidden rounded-xl grid grid-cols-2">
                <div>
                    <PaymentSummery/>
                </div>
                <div>
                    <PaymentForm/>
                </div>
                
            </div>
        </div>
    )
}

export default Payment
