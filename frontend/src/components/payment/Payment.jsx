import React, { useEffect, useState } from 'react'
import Error from '../toasts/Error'
import PaymentForm from './PaymentForm'
import PaymentSummery from './PaymentSummery'
import Success from '../toasts/Success'
import axios from 'axios'

const Payment = () => {

    const [OrderDetails, setOrderDetails] = useState("");

useEffect(() => {
    
    async function fetchData() {
         try{
        const res =  await axios.get(`/order/{id}`);
            setOrderDetails(res.data.order);
        }catch(err){

        }
    }
    fetchData()
       
}, []);

    const [Err, setErr] = useState("")
    const [Succ, setSucc] = useState("")

    return (
        <div>
            {(Err && <Error error={"Payment Unsuccessful"}/>)}
            {(Succ && <Success success={"Payment Successful"}/>)}
            <h1 className="text-4xl font-bold flex justify-center mb-20 mt-5">Payment</h1>
            <div className=" shadow-2xl h-auto  mx-40 overflow-hidden rounded-xl grid grid-cols-2">
                <div>
                    <PaymentSummery/>
                </div>
                <div>
                    <PaymentForm setErr={setErr}  setSucc={setSucc} />
                </div>
                
            </div>
        </div>
    )
}

export default Payment
