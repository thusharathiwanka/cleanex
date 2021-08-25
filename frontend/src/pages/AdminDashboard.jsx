import axios from "axios";
import React, { useEffect, useState } from "react";

import GraphInfoCard from "../components/adminDashboard/GraphInfoCard";
import InfoCard from "../components/adminDashboard/InfoCard";
import Spinner from "../components/loading/Spinner";
import Sidebar from "../components/sidebar/Sidebar";
import { adminCardInfo } from "../helpers/adminCardsInfo";

const Dashboard = () => {
	document.title = "CLEANEX - Dashboard";
	const [isLoading, setIsLoading] = useState(true);
	const [totals, setTotals] = useState([]);

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

	useEffect(() => {
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
							<GraphInfoCard delay={0} />
							<GraphInfoCard delay={300} />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
