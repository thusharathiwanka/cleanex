import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PendingLists = (props) => {

    const [PendingOrders, setPendingOrders] = useState([])
    const [ID, setID] = useState("")

    useEffect(() => {
        
        async function fetchData() {
            const res = await axios.get("/order/getPendingOrders")
            setPendingOrders(res.data.pendingOrdes)
        }
        fetchData()
        
    }, [ID])

    const updateStatus = async(id)=>{

        try{
            const res = await axios.patch(`order/updateToProcess/${id}`)
            if(res.status===200){
                setID(id)
                props.setSuccMsg("Successfully Start")
                props.setSucc(true)
            }
        }catch(err){
            props.setErr(true)
            console.log(err)
        }
    }

    return (
        <div class=" pt-16 pl-60 pr-60">
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
                    <div class="text-center  ">
                        <form  onSubmit={(e)=>e.preventDefault()}>
                        <input class=" focus:outline-none  shadow-md py-2 px-4 rounded" placeholder="Hours" type="number" required id="quantity" name="quantity" min="1" max="24"/>
                        <button onClick={()=>updateStatus()} type="submit" class=" shadow-md bg-light-blue text-white py-2 px-6 rounded font-bold ml-5">
                            Accept
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PendingLists
