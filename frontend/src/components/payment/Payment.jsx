import React, { useEffect, useState } from 'react'
import Error from '../toasts/Error'
import PaymentForm from './PaymentForm'
import PaymentSummery from './PaymentSummery'
import Success from '../toasts/Success'
import axios from 'axios'
import { useParams } from 'react-router'
import Spinner from '../loading/Spinner'

const Payment = () => {

    const {id} = useParams();
    const [OrderDetails, setOrderDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    
    async function fetchData() {
         
        const res =  await axios.get(`/order/${id}`);
            setOrderDetails(res.data);

            setIsLoading(false);

    }
    fetchData()

       
}, []);

    const [Err, setErr] = useState("")
    const [Succ, setSucc] = useState("")

    return (isLoading ? (<Spinner/>):(
        <div className=" relative">
            {(Err && <Error error={"Payment Unsuccessful"}/>)}
            {(Succ && <Success success={"Payment Successful"}/>)}
            <h1 className="text-4xl font-bold flex justify-center mb-20 mt-5">Payment</h1>
                
            <div className=" shadow-2xl h-auto relative mx-96 overflow-hidden rounded-xl ">
                <div>
                    <PaymentSummery OrderDetails={OrderDetails.items} AllOrders={OrderDetails} />
                </div>
                <div className="absolute top-0 right-3">
                    <PaymentForm setErr={setErr} AllOrders={OrderDetails} setSucc={setSucc} />
                </div>
                
            </div>

        </div>)
    )
}

export default Payment
