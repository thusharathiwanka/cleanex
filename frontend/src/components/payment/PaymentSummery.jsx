import React, { useEffect, useState } from "react";
import { imageURL } from "../../config/paths";

const PaymentSummery = ({ OrderDetails, AllOrders }) => {
	const subTotal = AllOrders.Total;
	const Total = parseInt(subTotal) + 500;
	useEffect(() => {
		// async function fetchData() {
		//      try{
		//     const res =  await axios.get(`/order/${orderid}`);
		//         setOrderDetails(res.data.items);
		//     }catch(err){
		//     }
		// }
		// fetchData()
	}, []);
	return (
		<div className="  py-10 w-2/6  bg-light-blue ">
			<div className=" ">
				{console.log(OrderDetails)}
				<h1 className="flex mb-10 justify-center text-3xl text-white font-normal">
					Order Summary
				</h1>
				<div className="overflow-y-auto  h-52   pb-1">
					{OrderDetails.map((id, key) => (
						<div className="grid grid-cols-2" key={key}>
							<div className="mb-3">
								<img
									alt="order1"
									className=" ml-20 inline-block w-20 h-20"
									src={imageURL + id.pack.src}
								/>
							</div>

							<div className=" ml-3 pt-1">
								<label className="text-white ">{id.pack.name}</label>
								<br />
								<label className="text-white">Qt {id.quantity}</label>
								<br />
								<label className="text-white">LKR {id.pack.price}</label>
							</div>
						</div>
					))}
				</div>
				<div className="relative px-5 divide-y pt-14">
					<div></div>
					<div className="p-2 pl-4">
						<label className="text-lg  text-white">Sub Total</label>
						<label className="absolute right-10 text-lg  text-white">
							LKR {subTotal}
						</label>
						<br />
						<label className="text-lg  text-white">Shipping</label>
						<label className="absolute right-10 text-lg  text-white">
							LKR 500
						</label>
					</div>
					<div className="p-2 pl-4">
						<label className="text-lg  text-white">Total</label>
						<label className="text-lg absolute right-10 text-white">
							LKR {Total}
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentSummery;
