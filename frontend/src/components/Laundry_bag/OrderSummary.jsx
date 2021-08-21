import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

const OrderSummary = () => {
	const { packages } = useContext(CartContext);
	const [showModal, setShowModal] = useState(false);

	return packages.length ? (
		<div className="max-w-xl   ml-40     ">
			<div className=" bg-light-blue pb-3 pt-3 text-center text-white text-xl mb-10">
				<p>Order summary</p>
			</div>
			{packages.map((packages) => {
				return (
					<div key={packages.id} className="pt-20 pb-20 bg-gray-300 text-gray">
						<p className="ml-11">Items:</p>
						<p className="ml-20">{packages.pack.name}</p>
						<p className="ml-11">Estimated Sub Total :</p>
						<p className="ml-20">Rs {packages.pack.price}.00</p>
					</div>
				);
			})}
			<div className="mb-40 mt-10 max-w-4xl">
				<button
					onClick={() => setShowModal(true)}
					className="p-3  rounded-2xl bg-light-blue text-center text-white max-w-sm float-right    "
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
											<div class="my-5 text-sm">
												<label for="username" class="block text-gray">
													Location
												</label>
												<input
													autofocus
													type="text"
													className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
												/>
											</div>
											<div class="my-5 text-sm">
												<label for="username" class="block text-gray">
													Date:
												</label>
												<input
													type="datetime"
													name="date"
													id="date"
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
	) : (
		<div className="w-9/12 ml-auto mr-auto mb-10">Your lundry bag is Empty</div>
	);
};

export default OrderSummary;
