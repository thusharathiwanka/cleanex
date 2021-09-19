import React, { useEffect, useState } from 'react'
import Profile from '../worker/Profile'
import ManagerImg from '../../assets/images/manager.jpg'
import { BiSearch } from "react-icons/bi";
import Graph from './Graph';
import axios from 'axios';
import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { jsPDF } from "jspdf";
import Logo from "../../assets/images/logo-blue.png";
import 'jspdf-autotable'

const PaymentList = () => {

    const [PaymentDetails, setPaymentDetails] = useState([])
    const [Total, setTotal] = useState(0)
    const [SearchValue, setSearchValue] = useState("")
    const [NoResults, setNoResults] = useState(false)
    
    
    async function fetchPaymentDetails(){
        try{
        const res = await axios.get("/payment/get")
        setPaymentDetails(res.data.payments)
        const total = await axios.get("/payment/gettotal")
        setTotal(total.data.Total)
        setSearchValue("")
        setNoResults(false)
        }catch(err){
            console.log(err);
        }
    }

    const generateReport = ()=>{

        const report = new jsPDF();
        const date = new Date();

        report.addImage(Logo, "png", 10, 10, 30, 5);
        report.setFontSize(20);
        report.text("Payment Report", 75, 14);
        report.setFontSize(8);
        report.text("Name : Chamindu Jayasith", 10, 25);
        report.text(`Date   : ${date.toDateString()}`, 10, 30);
        report.text(`Time   : ${date.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}`, 10, 35);
        report.setFontSize(13);
        report.text(`Total Amount : LKR${Total}.00`, 135, 45);
        report.autoTable({
            margin: { top: 50 },
            columns:[{ header: 'Name', dataKey: 'name' },
                    { header: 'Date', dataKey: 'dates' },
                    { header: 'Amount(LKR)', dataKey: 'amount' }],
            body:PaymentDetails.map(id=>({
                name:id.name, dates:id.date, amount:id.amount+'.00'
            })),    
        })
        report.save(`payment-report-${Date()}.pdf`);

    }

    useEffect(() => fetchPaymentDetails(), [])

    const getResults=(e)=>{
        e.preventDefault();
        const result = PaymentDetails.filter((paymentdetail)=>
            paymentdetail.name.toLowerCase().includes(SearchValue.toLowerCase())
        )
        if(result.length===0){
            setNoResults(true)
            return
        }
        setPaymentDetails(result)
    }


    return (
            <div className=" relative">
                <div className=" inline-block">
                <Profile Img={ManagerImg} name="Chamindu Jayasith" role="Manager" />
                </div>
                <div className=" rounded-lg absolute right-24 top-5 inline-block shadow-xl p-10">
                    <span className="text-light-blue ">Total Income</span><br/>
                    <span className="text-5xl font-semibold">LKR {Total}.00</span>
                </div>
                <div className="shadow-2xl p-3 rounded-xl  w-3/7 bg-white absolute right-24 top-52">
                <Graph/>
                </div>
                
                <div className="ml-20 justify-center">
                
                <form onSubmit={getResults} className=" w-85 mt-5 ml-40  text-center relative mb-5">
                        <input
                            required
                            value={SearchValue}
                            type="text"
                            name="search"
                            id="search"
                            className="outline-none rounded-xl border px-5 py-2 focus:border-light-blue w-full"
                            placeholder="Search here..."
                            onChange={(e)=>{setSearchValue(e.target.value)}}
                        />
                        {SearchValue && (
                            <div onClick={()=>{setSearchValue(""); fetchPaymentDetails() }} className="absolute top-2 left-67 flex cursor-pointer text-3xl">
                                <IoIosClose className=" text-gray-400" />
                            </div>
                        )}
                        <button className="text-white bg-light-blue absolute right-0 top-0 h-full rounded-2xl w-14 flex items-center justify-center font-bold text-2xl">
                            <BiSearch className="w-6 h-6" />
                        </button>
                    </form>
                    <div className="overflow-y-auto h-96 w-100">
                    {NoResults ? (
                        <div>
                            <h1 className="text-2xl font-bold pb-5 ml-56 text-gray-500">No Payment Found</h1>
                            <button onClick={fetchPaymentDetails} className="font-semibold text-lg bg-light-blue text-white py-1 rounded-full flex justify-center ml-67 w-28">
                                <IoArrowBackOutline className="pt-1 text-2xl"/>
                                Back
                            </button>
                        </div>): (
                        <div>{PaymentDetails.map((id)=>{
                            return(<div key={id.name} className=" bg-white ml-3 mb-5 mt-2 rounded-lg p-5 px-8 relative shadow-xl w-11/12">
                                <span className="  font-medium">{id.name}</span><br/>
                                <span className="text-light-blue font-medium">{id.date}</span>
                                <span className=" absolute right-8 top-7 text-2xl font-semibold">LKR {id.amount}.00</span>
                            </div>)})}
                        </div>)
                    }
                    </div>
                </div>
                <button onClick={generateReport} className="bg-light-blue rounded-full absolute right-24 top-100 text-white  font-semibold text-xl py-3 px-5">Generate Report</button>
            </div>
    )
}

export default PaymentList
