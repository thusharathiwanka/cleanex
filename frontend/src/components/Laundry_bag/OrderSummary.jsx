import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import LocationInput from "./locationIput";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const OrderSummary = (props) => {
	const { packages } = useContext(CartContext);
	const [showModal, setShowModal] = useState(false);
	const [state, setState] = useState("");

	const [startDate, setStartDate] = useState(new Date());
	let price = 0;
	//const [price, setPrice] = useState(0);

	return (
		/*packages.length ?*/ <div className="max-w-xl   ml-40     ">
			<div className=" bg-light-blue pb-3 pt-3 text-center text-white text-xl mb-10">
				<p>Order summary</p>
			</div>

			<div className="pt-20 pb-20 bg-gray-300 text-gray">
				<p className="ml-11 text-gray-600 text-lg">Items:</p>
				{packages.map((packages) => {
					return (
						<p key={packages.id} className="ml-2 float-right">
							{packages.pack.name}
						</p>
					);
				})}
				<p className="ml-11 text-gray-600 text-lg">Estimated Sub Total : Rs</p>
				{packages.map((packages) => {
					return (
						<p key={packages.id} className="ml-2 float-right">
							{(price = price + packages.pack.price)}
						</p>
					);
				})}
			</div>

			<div className="mb-40 mt-10 max-w-4xl">
				<button
					onClick={() => setShowModal(true)}
					className="p-3  rounded-xl bg-light-blue text-center text-white max-w-sm float-right    "
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
										<form>
											<div className="my-5 text-sm">
												<label for="username" className="block ">
													Location
												</label>
												<LocationInput setstate={setState} />
											</div>
											<h1>{state}</h1>
											<div className="my-5 text-sm">
												<label for="username" className="block text-gray">
													Date:
												</label>
												<DatePicker
													selected={startDate}
													onChange={(date) => setStartDate(date)}
													className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
												/>
											</div>
										</form>
									</div>
									{/*footer*/}
									<div className="flex items-center justify-center p-6  rounded-b mb-20">
										<button
											className="text-gray-500 bg-gray-300 font-bold uppercase px-6 py-3 text-sm outline-none  rounded shadow hover:shadow-lg   focus:outline-none mr-10 mb-1 ease-linear transition-all duration-150"
											type="button"
											onClick={() => setShowModal(false)}
										>
											Close
										</button>
										<button
											className="bg-light-blue text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ml-20 mr-1 mb-1 ease-linear transition-all duration-150"
											type="button"
											onClick={() => setShowModal(false)}
										>
											Confirm
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
					</>
				) : null}
			</div>
		</div>
	); /*: (
		<div className="w-9/12 ml-auto mr-auto mb-10">Your lundry bag is Empty</div>
	);*/
};

export default OrderSummary;
