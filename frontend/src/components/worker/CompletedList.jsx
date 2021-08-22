import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CompletedList = () => {

    const [CompletedOrders, setCompletedOrders] = useState([])

    useEffect(() => {
        
        async function fetchData() {
            const res = await axios.get("/order/getCompletedOrders")
            setCompletedOrders(res.data.completedOrdes)
        }
        fetchData()
        
    }, [])
    
    return (
        <div class=" pt-16 pl-60 pr-60 pb-20">
            <div class="bg-white rounded-xl shadow-2xl p-10" >
                <div class="grid grid-cols-3 divide-x divide-light-blue">
                    <div class="ml-16">
                        <span class="font-semibold">Name</span>
                        <span class="ml-10">Liam Hemsworth</span>
                        <br/>
                        <span class="font-semibold">Date</span>
                        <span class="ml-12">22 july 2021</span>
                        <br/>
                        <span class="font-semibold">Time</span>
                        <span class="ml-12">11:30 AM</span>
                    </div>
                    <div class="relative">
                        <div class="text-center">
                        <span class="font-semibold">Cloths</span>
                        <span class="ml-20 font-semibold">Quantity</span>
                        </div>
                        <span class="ml-20">T-Shirt</span>
                        <span class="absolute  right-28">2</span>
                    </div>
                    <div >
                        <div class="ml-16">
                        <span class="font-semibold">Started Date</span>
                        <span class="ml-14">22 july 2021</span>
                        <br/>
                        <span class="font-semibold">Started Time</span>
                        <span class="ml-14">2:00pm</span>
                        <br/>
                        <span class="font-semibold">Time Remaing</span>
                        <span class="ml-12">5 Hours</span>
                        <br/>
                        <span class="font-semibold">Completed Time</span>
                        <span class="ml-8">3:00pm</span>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompletedList
