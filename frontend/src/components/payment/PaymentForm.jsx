import React from 'react'
import Order1 from '../../assets/images/order1.png'
import Order2 from '../../assets/images/order2.png'

const PaymentForm = () => {
    return (
        <div className="">
            {/* <h1 className="text-4xl font-bold flex justify-center mb-10 mt-10">Payment</h1>
        <div className=" shadow-2xl h-auto  mx-40 overflow-hidden rounded-xl grid grid-cols-2">     */}
            {/* <div className="  py-10   bg-light-blue ">
                <div className="">
                    <h1 className="flex mb-10 justify-center text-3xl text-white font-normal" >Order Summary</h1>
                    <div className="overflow-y-auto h-50 grid grid-cols-2  pb-2">
                        <div className="mb-3">
                            <img alt="order1" className=" ml-72 inline-block w-20 h-20" src={Order1}  />
                        </div>
                        <div className=" ml-10 pt-1">
                            <label className="text-white ">T-Shairt</label><br/>
                            <label className="text-white">Qt 2</label><br/>
                            <label className="text-white">LKR 1000</label>
                        </div>
                        <div>
                            <img alt="order2" className=" ml-72 inline-block w-20 h-20" src={Order2}  />
                        </div>
                        <div className="ml-10 pt-1">
                            <label className="text-white ">Shairt</label><br/>
                            <label className="text-white">Qt 1</label><br/>
                            <label className="text-white">LKR 1500</label>
                        </div>
                    </div>
                <div className="relative px-40 divide-y pt-20">
                    <div>
                        
                    </div>
                    <div className="p-2 pl-4">
                        <label className="text-lg  text-white">Sub Total</label>
                        <label className="absolute right-44 text-lg  text-white">LKR 2500</label><br/>
                        <label className="text-lg  text-white">Shipping</label>
                        <label className="absolute right-44 text-lg  text-white">LKR 500</label>
                    </div>
                    <div className="p-2 pl-4">
                        <label className="text-lg  text-white">Total</label>
                        <label className="text-lg absolute right-44 text-white">LKR 3000</label>
                    </div>
                    
                </div>
                </div>
                
            </div> */}
            <div className="px-24  py-10">
                <form>
                <h1 className="flex mb-10 justify-center text-3xl font-medium ">Card Details</h1>
            <label className=" text-lg text-gray-500 font-bold pr-4" for="inline-full-name">
                Name On card
            </label>
            <br/>
            <input required className=" mt-3 text-lg  w-full block bg-light-gary appearance-none  border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-light-blue" width="672" type="text" placeholder="Jane Doe"/> 
            <br/>
            <label className="text-lg text-gray-500 font-bold   pr-4" for="inline-password">
                Card Number
            </label>
            <br/>
            <input required className="mt-3 text-lg bg-light-gary appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-light-blue"  type="text" placeholder="xxxx-xxxx-xxxx-xxxx"/>
            <br/><br/>
            <label  className="text-lg text-gray-500 font-bold   pr-4" for="inline-password">
                Expiry Date
            </label>
            <label  className="text-lg ml-2 pl-36 text-gray-500 font-bold   pr-4" for="inline-password">
                CVC
            </label>
            <br/>
                <div className="mt-3">
                    <input required className="bg-light-gary appearance-none text-lg border-2 border-gray-200 rounded w-20 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-light-blue"  type="text" placeholder="MM"/>
                    <label className="text-lg text-gray-500 font-bold  pl-5   pr-4" for="inline-password">
                        /
                    </label>
                    <input required className="bg-light-gary  text-lg appearance-none border-2 border-gray-200 rounded w-20 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-light-blue"  type="text" placeholder=" YY"/>
                    <input required className="bg-light-gary  text-lg ml-16 w-72  appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-light-blue"  type="text" placeholder="***"/>
                </div>
            <button className="ml-56 shadow mt-10  bg-light-blue text-white font-semibold py-1 px-8 text-xl  rounded-full "  type="submit">
                PAY
            </button>
            </form>
            </div>
        {/* </div> */}
    </div>
    )
}

export default PaymentForm
