import { useState, useEffect } from "react";
import OrderList from "../components/Deliverer/OrderList";
import OrderList2 from "../components/Deliverer/OrderLIst2";
import Navbar from "../components/nav/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Deliverer_home = () => {
	const [deliverer, Setdeliverer] = useState({});
	const [isPickUp, setPickUp] = useState(true);
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
				className="flex items-center  "
				style={{
					marginTop: "150px",
					marginLeft: "150px",
				}}
			>
				<div className="flex-shrink-0 h-24 w-24">
					<img
						className="h-24 w-24 rounded-full"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
						alt=""
					/>
				</div>
				<div className="ml-4 ">
					<div className="text-sm font-medium text-gray-900">
						{deliverer.name}
					</div>
					<div className="text-sm text-gray-500">{deliverer.email}</div>
				</div>
				<div className=" max-w-6xl " style={{ marginLeft: "940px" }}>
					<button className="bg-light-blue hover:bg-blue-200  text-white font-bold py-2 px-8 rounded-full ">
						<Link to={`/auth/deliverer/Deliverer`}> My Deliveries</Link>
					</button>
				</div>
			</div>
			<div
				className="flex items-center"
				style={{ marginTop: "150px", marginLeft: "150px" }}
			>
				<button
					style={{ marginRight: "20px", width: "120px" }}
					className="bg-light-blue hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full"
					onClick={() => setPickUp(true)}
				>
					Pick Up
				</button>
				<button
					style={{ width: "120px" }}
					className="bg-light-blue hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full"
					onClick={() => setPickUp(false)}
				>
					Deliver
				</button>
			</div>
			{isPickUp ? <OrderList /> : <OrderList2 />}
		</div>
	);
};

export default Deliverer_home;
