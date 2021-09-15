import { useState, useEffect } from "react";
import PickUPList from "../components/Deliverer/PickUpList";
import DeliveryList from "../components/Deliverer/DeliveryList";
import Navbar from "../components/nav/Navbar";
import Report from "../components/Deliverer/ReportForm";

import axios from "axios";

const Deliverer = () => {
	const [isPickUp, setPickUp] = useState(true);

	const [deliverer, Setdeliverer] = useState({});

	const getDelivererDetails = async () => {
		try {
			const res = await axios.get("order/deleiverer/details");
			Setdeliverer(res.data.deliverer);
			console.log(res.data.deliverer);
		} catch (err) {
			console.error(err.message);
		}
	};
	useEffect(() => {
		getDelivererDetails();
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
					<div className="text-sm font-medium text-gray-900">
						{deliverer.name}
					</div>
					<div className="text-sm text-gray-500">{deliverer.email}</div>
				</div>
			</div>
			<div className="flex items-end">
				<Report />
			</div>
			<div
				className="flex items-center"
				style={{ marginTop: "150px", marginLeft: "150px" }}
			>
				<button
					onClick={() => setPickUp(true)}
					style={{ marginRight: "20px", width: "120px" }}
					className="bg-light-blue hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full"
				>
					Pick Up
				</button>
				<button
					onClick={() => setPickUp(false)}
					style={{ width: "120px" }}
					className="bg-light-blue hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full"
				>
					Deliver
				</button>
			</div>
			{isPickUp ? <PickUPList /> : <DeliveryList />}
		</div>
	);
};

export default Deliverer;
