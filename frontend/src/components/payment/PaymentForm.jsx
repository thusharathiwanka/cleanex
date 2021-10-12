import React, { useState } from "react";
import axios from "axios";

const PaymentForm = (props) => {
	const [PaymentDetails, setPaymentDetails] = useState({});

	const subTotal = props.AllOrders.Total;
	const Total = parseInt(subTotal) + 500;

	const payment = async (e) => {
		e.preventDefault();
		const date = new Date();
		PaymentDetails.date = date.toLocaleDateString();
		PaymentDetails.amount = Total;
		// console.log(PaymentDetails);
		try {
			const res = await axios.post("/payment/post", PaymentDetails);
			if (res.status === 200) {
				props.setSucc(true);
			}
		} catch (err) {
			props.setErr(true);
		}
	};
	return (
		<div className="">
			<div className="px-24  py-10">
				<form onSubmit={payment}>
					<h1 className="flex mb-10 justify-center text-3xl font-medium ">
						Card Details
					</h1>
					<label
						className=" text-lg text-gray-500 font-bold pr-4"
						for="inline-full-name"
					>
						Name On card
					</label>
					<br />
					<input
						required
						onChange={(e) =>
							setPaymentDetails({ ...PaymentDetails, name: e.target.value })
						}
						className=" mt-3 text-lg  w-full block bg-light-gary appearance-none  border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-light-blue"
						width="672"
						type="text"
						placeholder="Jane Doe"
					/>
					<br />
					<label
						className="text-lg text-gray-500 font-bold   pr-4"
						for="inline-password"
					>
						Card Number
					</label>
					<br />
					<input
						pattern="[0-9]{16}"
						required
						className="mt-3 text-lg bg-light-gary appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-light-blue"
						type="text"
						placeholder="xxxx-xxxx-xxxx-xxxx"
					/>
					<br />
					<br />
					<label
						className="text-lg text-gray-500 font-bold   pr-4"
						for="inline-password"
					>
						Expiry Date
					</label>
					<label
						className="text-lg  pl-36 text-gray-500 font-bold   pr-4"
						for="inline-password"
					>
						CVC
					</label>
					<br />
					<div className="mt-3">
						<input
							pattern="[0-9]{2}"
							min="1"
							max="12"
							required
							className="bg-light-gary appearance-none text-lg border-2 border-gray-200 rounded w-20 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-light-blue"
							type="text"
							placeholder="MM"
						/>
						<label
							className="text-lg text-gray-500 font-bold  pl-5   pr-4"
							for="inline-password"
						>
							/
						</label>
						<input
							pattern="[0-9]{2}"
							min="21"
							max="30"
							required
							className="bg-light-gary  text-lg appearance-none border-2 border-gray-200 rounded w-20 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-light-blue"
							type="text"
							placeholder=" YY"
						/>
						<input
							required
							className="bg-light-gary  text-lg ml-14 w-60  appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-light-blue"
							pattern="[0-9]{3}"
							type="text"
							placeholder="***"
						/>
					</div>
					<button
						className="ml-56 shadow mt-10  bg-light-blue text-white font-semibold py-1 px-8 text-xl  rounded-full "
						type="submit"
					>
						PAY
					</button>
				</form>
			</div>
		</div>
	);
};

export default PaymentForm;
