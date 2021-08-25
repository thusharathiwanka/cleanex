import React, { useState, useEffect } from "react";
import axios from "axios";

import OrderList from "../components/Deliverer/OrderList";
import Navbar from "../components/nav/Navbar";

const Deliverer_home = () => {
	const [userDetail, setUserDetail] = useState({});
	const delivererDetails = async () => {
		try {
			const res = await axios.get("order/deliverDetails");
			setUserDetail(res.data.moderators);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		delivererDetails();
	}, []);
	return (
		<div>
			<Navbar />
			<div
				className="flex items-center"
				style={{ marginTop: "150px", marginLeft: "150px" }}
			>
				<div className="flex-shrink-0 h-24 w-24">
					<img
						className="h-24 w-24 rounded-full"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
						alt=""
					/>
				</div>
				<div className="ml-4">
					<div className="text-sm font-medium text-gray-900">Jane Cooper</div>
					<div className="text-sm text-gray-500">jane.cooper@example.com</div>
				</div>
				<button
					style={{ width: "220px", marginLeft: "515px" }}
					className="bg-light-blue hover:bg-blue-200 text-white font-bold py-2 px-4 mr-1 rounded-full"
				>
					My Deliveries
				</button>
			</div>
			<div
				className="flex items-center"
				style={{ marginTop: "150px", marginLeft: "150px" }}
			>
				<button
					style={{ marginRight: "20px", width: "120px" }}
					className="bg-light-blue hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full"
				>
					Pick Up
				</button>
				<button
					style={{ width: "120px" }}
					className="bg-light-blue hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full"
				>
					Deliver
				</button>
			</div>
			<OrderList />
		</div>
	);
};

export default Deliverer_home;
