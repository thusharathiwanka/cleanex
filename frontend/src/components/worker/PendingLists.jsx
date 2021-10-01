import axios from "axios";
import React, { useEffect, useState } from "react";

const PendingLists = (props) => {
	const [PendingOrders, setPendingOrders] = useState([]);
	const [Input, setInput] = useState("");
	const [ID, setID] = useState("");

	useEffect(() => {
		async function fetchData() {
			const res = await axios.get("/order/getPendingOrders");
			setPendingOrders(res.data.pendingOrdes);
			// console.log(res.data.pendingOrdes);
		}
		fetchData();
	}, [ID]);

	const updateStatus = async (id) => {
		try {
			const res = await axios.patch(`order/updateToProcess/${id}`, Input);
			if (res.status === 200) {
				setID(id);
				props.setSucc(true);
			}
		} catch (err) {
			props.setErr(true);
			console.log(err);
		}
	};

	return (
		<div className=" pt-10 pl-60 pr-60">
			{PendingOrders.map((data) => {
				return (
					<div className=" bg-white rounded-xl shadow-xl p-10 mb-5">
						<div className="grid grid-cols-3 divide-x divide-light-blue">
							<div className="ml-16">
								<span className="font-semibold">Name</span>
								<span className="ml-10">{data.CustomerName}</span>
								<br />
								<span className="font-semibold">Date</span>
								<span className="ml-12">{data.StartDate}</span>
								<br />
								<span className="font-semibold">Time</span>
								<span className="ml-12">{data.StartTime}</span>
							</div>
							<div className="relative">
								<div className="text-center">
									<span className="font-semibold">Cloths</span>
									<span className="ml-20 font-semibold">Quantity</span>
								</div>
								<div className="overflow-y-auto h-16">
									{data.items.map((id) => {
										return (
											<div>
												<span className=" ml-20">{id.pack.name}t</span>
												<span className="absolute right-32">{id.quantity}</span>
											</div>
										);
									})}
								</div>
							</div>
							<div className="text-center  ">
								<form onSubmit={(e) => e.preventDefault()}>
									<input
										onChange={(e) =>
											setInput({ ...Input, hours: e.target.value })
										}
										className=" focus:outline-none  shadow-md py-2 px-4 rounded"
										placeholder="Hours"
										type="number"
										required
										id="quantity"
										name="quantity"
										min="1"
										max="24"
									/>
									<button
										onClick={() => updateStatus(data._id)}
										type="submit"
										className=" shadow-md bg-light-blue text-white py-2 px-6 rounded font-bold ml-5"
									>
										Accept
									</button>
								</form>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default PendingLists;
