import axios from "axios";
import React, { useEffect, useState } from "react";

import GraphInfoCard from "../components/adminDashboard/GraphOrderCard";
import InfoCard from "../components/adminDashboard/InfoCard";
import Spinner from "../components/loading/Spinner";
import Sidebar from "../components/sidebar/Sidebar";
import { adminCardInfo } from "../helpers/adminCardsInfo";

const Dashboard = () => {
	document.title = "CLEANEX - Dashboard";
	const [isLoading, setIsLoading] = useState(true);
	const [totals, setTotals] = useState([]);
	const [orders, setOrders] = useState([]);
	const [pending, setPending] = useState([]);
	const [processing, setProcessing] = useState([]);
	const [completed, setCompleted] = useState([]);
	const graphOneNames = ["Pending", "Processing", "Completed"];
	const graphTwoNames = ["Pending", "Processing", "Completed"];

	const getTotalInfo = () => {
		adminCardInfo.map(async (card) => {
			try {
				const res = await axios.get(card.endpoint);
				setTotals((prev) => [
					...prev,
					{ total: res.data.total, name: card.name, icon: card.icon },
				]);
			} catch (err) {
				console.error(err);
			}
		});
		setIsLoading(false);
	};

	const getGraphInfo = async () => {
		const res = await axios.get("/order/orders");
		setOrders(res.data);

		res.data.map((order) => console.log(order.WashingStatus));

		setPending(
			res.data.filter((order) => {
				return order.WashingStatus === "pending";
			})
		);

		setProcessing(
			res.data.filter((order) => {
				return order.WashingStatus === "processing";
			})
		);

		setCompleted(
			res.data.filter((order) => {
				return order.WashingStatus === "completed";
			})
		);

		console.log(pending, processing, completed);
	};

	useEffect(() => {
		getGraphInfo();
		getTotalInfo();
	}, []);

	return (
		<div className=" text-gray-800">
			<div className="ml-80 mt-20">
				<h1
					className="text-5xl font-extrabold pb-10 text-center"
					data-aos="fade-up"
				>
					Summary
				</h1>
				<Sidebar />
				{isLoading ? (
					<Spinner />
				) : (
					<div className="w-full">
						<div className="px-16 flex justify-between">
							{totals.map((total, index) => (
								<InfoCard info={total} key={index} />
							))}
						</div>
						<div className="px-16 flex justify-between w-full" id="chart">
							<GraphInfoCard
								delay={0}
								graphNames={graphOneNames}
								pending={pending}
								processing={processing}
								completed={completed}
							/>
							<GraphInfoCard delay={300} graphNames={graphTwoNames} />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
