import axios from "axios";
import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import LocationInput from "./locationIput";
import DatePicker from "react-datepicker";
import Error from "../toasts/Error";

import "react-datepicker/dist/react-datepicker.css";

const OrderSummary = () => {
	const { items } = useContext(CartContext);
	const [showModal, setShowModal] = useState(false);
	const [Address, setAddress] = useState("");
	const [error, setError] = useState("");
	const [Iserror, setIsError] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
	let total = 0;
	let obj = new Set();
	items.map((packages) => {
		total += packages.pack.price * packages.quantity;
		obj.add("\n" + packages.pack.name + " * " + packages.quantity + " , ");
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		let Total = total.toString();
		let StartDate = startDate.toDateString();

		const orders = { items, Total, StartDate, Address };
		console.log(orders);

		try {
			await axios.post("order/addOrder", orders).then(function (response) {
				console.log(response);
				setShowModal(false);
			});
		} catch (err) {
			console.log(err);
		}
	};

	return items.length ? (
		<div className="max-w-xl   ml-40     ">
			<div className=" bg-light-blue pb-3 pt-3 text-center text-white text-xl mb-10">
				<p>Order summary</p>
			</div>

			<div className="pt-20 pb-20 bg-gray-300 text-gray">
				<p className="ml-11 text-gray-600 text-lg">Items: </p>

				<p className="mr-2 float-right">{[...obj]}</p>
				<p className="ml-11 text-gray-600 text-lg">
					Estimated Sub Total : Rs {total}.00
				</p>

				<p className="ml-2 float-right"></p>
			</div>

			<div className="mb-40 mt-10 max-w-4xl">
				<button
					onClick={() => setShowModal(true)}
					className="p-3  rounded-lg bg-light-blue text-center  text-white max-w-sm float-right shadow hover:shadow-xl "
				>
					Place Order
				</button>
				{showModal ? (
					<>
						<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
							<div className="relative w-auto my-6 mx-auto max-w-3xl">
								{/*content*/}
								<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
									{/*header*/}
									<div className="flex items-start justify-between p-5 mt-20 rounded-t">
										<h5 className="text-2xl font-semibold  w-96 text-center text-light-blue mr-5 ml-5">
											Please Enter a location & a date to pick up
										</h5>
										<button
											className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
											onClick={() => setShowModal(false)}
										>
											<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
												×
											</span>
										</button>
									</div>
									{/*body*/}
									<div className="relative p-6 flex-auto ml-auto mr-auto w-85">
										<form onSubmit={handleSubmit}>
											<div className="my-5 text-sm">
												<label className="block ">Location</label>
												<LocationInput setAddress={setAddress} />
											</div>

											<div className="my-5 text-sm">
												<label className="block text-gray">Date:</label>
												<DatePicker
													required
													selected={startDate}
													onChange={(date) => {
														if (date != null) {
															setStartDate(date);
															setIsError(false);
														} else {
															setIsError(true);
															setError("Date cannot be null");
														}
													}}
													className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
												/>
												{Iserror ? (
													<Error error={error} top={5} left={1} />
												) : (
													<p></p>
												)}
											</div>
											<div className="flex items-center justify-center p-6  rounded-b mt-10 mb-20">
												<button
													className="text-gray-500 bg-gray-300 font-bold uppercase px-6 py-3 text-sm outline-none  rounded shadow hover:shadow-lg   focus:outline-none mr-10 mb-1 ease-linear transition-all duration-150"
													type="button"
													onClick={() => {
														setShowModal(false);
													}}
												>
													Close
												</button>
												<button
													className="bg-light-blue text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ml-20 mr-1 mb-1 ease-linear transition-all duration-150"
													type="submit"
												>
													Confirm
												</button>
											</div>
										</form>
									</div>
									{/*footer*/}
								</div>
							</div>
						</div>
						<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
					</>
				) : null}
			</div>
		</div>
	) : (
		<div className="w-9/12 ml-auto text-center text-blue-400 font-bold mr-auto mb-40">
			Your lundry bag is Empty !!
		</div>
	);
};

export default OrderSummary;
