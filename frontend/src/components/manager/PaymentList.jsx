import React from 'react'
import Profile from '../worker/Profile'
import ManagerImg from '../../assets/images/manager.jpg'
import { BiSearch } from "react-icons/bi";

const PaymentList = () => {
    return (
        <div className=" relative">
            <div className=" inline-block">
            <Profile Img={ManagerImg} name="Chamindu Jayasith" role="Manager" />
            </div>
            <div className=" rounded-lg absolute right-28 top-5 inline-block shadow-xl p-10">
                <span className="text-light-blue ">Total Income</span><br/>
                <span className="text-5xl font-semibold">LKR 100000.00</span>
            </div>
            <div className="ml-28 justify-center">
                
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
                <div className=" bg-white mb-5 rounded-lg p-5 px-8 relative shadow-xl w-2/5">
                        <span className="  font-medium">William levy</span><br/>
                        <span className="text-light-blue font-medium">22 july 2021</span>
                        <span className=" absolute right-8 top-7 text-2xl font-semibold">LKR 2000</span>
                </div>
                <div className=" bg-white rounded-lg mb-5 p-5 px-8 relative shadow-xl w-2/5">
                        <span className="  font-medium">William levy</span><br/>
                        <span className="text-light-blue font-medium">22 july 2021</span>
                        <span className=" absolute right-8 top-7 text-2xl font-semibold">LKR 2000</span>
                </div>
                <div className="bg-white rounded-lg mb-5 p-5 px-8 relative shadow-xl w-2/5">
                        <span className="  font-medium">William levy</span><br/>
                        <span className="text-light-blue font-medium">22 july 2021</span>
                        <span className=" absolute right-8 top-7 text-2xl font-semibold ">LKR 2000</span>
                </div>
                <div className="bg-white rounded-lg mb-5 p-5 px-8 relative shadow-2xl w-2/5">
                        <span className="  font-medium">William levy</span><br/>
                        <span className="text-light-blue font-medium">22 july 2021</span>
                        <span className=" absolute right-8 top-7 text-2xl font-semibold">LKR 2000</span>
                </div>
            </div>
        </div>
    )
}

export default PaymentList
