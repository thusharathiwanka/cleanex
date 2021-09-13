import React, { useEffect, useState } from 'react'
import Profile from '../worker/Profile'
import ManagerImg from '../../assets/images/manager.jpg'
import { BiSearch } from "react-icons/bi";
import Graph from './Graph';
import axios from 'axios';

const PaymentList = () => {

    const [PaymentDetails, setPaymentDetails] = useState([])
    const [Total, setTotal] = useState(0)
    

useEffect(() => {
    async function fetchdata(){
        try{
        const res = await axios.get("/payment/get")
        setPaymentDetails(res.data.payments)
        const total = await axios.get("/payment/gettotal")
        setTotal(total.data.Total)
        }catch(err){
            console.log(err);
        }
    }

    fetchdata()

    }, [])


    return (
        <div className=" relative">
            <div className=" inline-block">
            <Profile Img={ManagerImg} name="Chamindu Jayasith" role="Manager" />
            </div>
            <div className=" rounded-lg absolute right-24 top-5 inline-block shadow-xl p-10">
                <span className="text-light-blue ">Total Income</span><br/>
                <span className="text-5xl font-semibold">LKR {Total}.00</span>
            </div>
            <div className="shadow-2xl p-3 rounded-xl  w-3/7 bg-white absolute right-24 top-60">
            <Graph/>
            </div>
            <button className="bg-light-blue rounded-lg absolute right-24 top-3/4 text-white font-semibold text-2xl py-3 px-5">Generate Report</button>
            <div className="ml-20 justify-center">
            
            <form className=" w-85 mt-5 ml-40  text-center relative mb-10">
					<input
						type="text"
						name="search"
						id="search"
						className="outline-none rounded-xl border px-5 py-2 focus:border-light-blue w-full"
						placeholder="Search here..."
					/>
					<button className="text-white bg-light-blue absolute right-0 top-0 h-full rounded-xl w-14 flex items-center justify-center font-bold text-2xl">
						<BiSearch className="w-6 h-6" />
					</button>
				</form>

                {PaymentDetails.map((id)=>{
                    return(<div key={id.name} className=" bg-white mb-5 rounded-lg p-5 px-8 relative shadow-xl w-2/5">
                        <span className="  font-medium">{id.name}</span><br/>
                        <span className="text-light-blue font-medium">{id.date}</span>
                        <span className=" absolute right-8 top-7 text-2xl font-semibold">LKR {id.amount}</span>
                </div> );
                })}
            </div>
        </div>
    )
}

export default PaymentList
