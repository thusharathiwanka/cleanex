import React from 'react'
import Order1 from '../../assets/images/order1.png'
import Order2 from '../../assets/images/order2.png'
const PaymentSummery = () => {
    return (
       
        <div className="  py-10 w-2/6  bg-light-blue ">
                <div className=" ">
                    <h1 className="flex mb-10 justify-center text-3xl text-white font-normal" >Order Summary</h1>
                    <div className="overflow-y-auto   h-52 grid grid-cols-2  pb-2">
                        <div className="mb-3">
                            <img alt="order1" className=" ml-24 inline-block w-20 h-20" src={Order1}  />
                        </div>
                        <div className=" ml-3 pt-1">
                            <label className="text-white ">T-Shairt</label><br/>
                            <label className="text-white">Qt 2</label><br/>
                            <label className="text-white">LKR 1000</label>
                        </div>
                        <div>
                            <img alt="order2" className=" ml-24 inline-block w-20 h-20" src={Order2}  />
                        </div>
                        <div className="ml-3 pt-1">
                            <label className="text-white ">Shairt</label><br/>
                            <label className="text-white">Qt 1</label><br/>
                            <label className="text-white">LKR 1500</label>
                        </div>
                    </div>
                <div className="relative px-5 divide-y pt-14">
                    <div>
                        
                    </div>
                    <div className="p-2 pl-4">
                        <label className="text-lg  text-white">Sub Total</label>
                        <label className="absolute right-10 text-lg  text-white">LKR 2500</label><br/>
                        <label className="text-lg  text-white">Shipping</label>
                        <label className="absolute right-10 text-lg  text-white">LKR 500</label>
                    </div>
                    <div className="p-2 pl-4">
                        <label className="text-lg  text-white">Total</label>
                        <label className="text-lg absolute right-10 text-white">LKR 3000</label>
                    </div>
                    
                </div>
                </div>
                
        </div>
    
    )
}

export default PaymentSummery
