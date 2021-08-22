import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProcessingList = () => {

    const [ProcessingOrders, setProcessingOrders] = useState([])
    const [ID, setID] = useState("")

    useEffect(() => {
        
        async function fetchData() {
            const res = await axios.get("/order/getProcessingOrders")
            setProcessingOrders(res.data.processingOrdes)
        }
        fetchData()
        
    }, [ID])

    const updateStatus =async(id)=>{
        try{
            const res = await axios.patch(`/order/updateToCompleate/${id}`)
            if(res.status===200){
                setID(id)
            }
        }catch(err){

        }
    }

    return (
        <div className=" pt-16 pl-60 pr-60 pb-20">
            <div className="bg-white rounded-xl shadow-2xl p-10" >
                <div className="grid grid-cols-3 divide-x divide-light-blue">
                    <div className="ml-16">
                        <span className="font-semibold">Name</span>
                        <span className="ml-10">Liam Hemsworth</span>
                        <br/>
                        <span className="font-semibold">Date</span>
                        <span className="ml-12">22 july 2021</span>
                        <br/>
                        <span className="font-semibold">Time</span>
                        <span className="ml-12">11:30 AM</span>
                    </div>
                    <div className="relative">
                        <div className="text-center">
                        <span className="font-semibold">Cloths</span>
                        <span className="ml-20 font-semibold">Quantity</span>
                        </div>
                        <span className="ml-20">T-Shirt</span>
                        <span className="absolute  right-28">2</span>
                    </div>
                    <div >
                        <div className="ml-16">
                        <span className="font-semibold">Started Date</span>
                        <span className="ml-12">22 july 2021</span>
                        <br/>
                        <span className="font-semibold">Started Time</span>
                        <span className="ml-12">2:00pm</span>
                        <br/>
                        <span className="font-semibold">Time Remaing</span>
                        <span className="ml-10">5 Hours</span>
                        
                        <button type="submit" onClick={updateStatus} className="mt-5 shadow-md ml-28 bg-light-blue text-white py-2 px-6 rounded font-bold ml-5">
                            Complete
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessingList
