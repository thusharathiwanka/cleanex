import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { jsPDF } from "jspdf";

import GraphDeliveryCard from "../components/adminDashboard/GraphDeliveryCard";
import GraphInfoCard from "../components/adminDashboard/GraphOrderCard";
import InfoCard from "../components/adminDashboard/InfoCard";
import Spinner from "../components/loading/Spinner";
import Sidebar from "../components/sidebar/Sidebar";
import { adminCardInfo } from "../helpers/adminCardsInfo";

const Dashboard = () => {
	document.title = "CLEANEX - Dashboard";
	const [isLoading, setIsLoading] = useState(true);
	const [totals, setTotals] = useState([]);
	const graphOneNames = ["Pending", "Processing", "Completed"];

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

	const generateReport = () => {
		const doc = new jsPDF();

		doc.text("Hello world!", 10, 10);
		doc.save(`summary-report-${Date()}.pdf`);
	};

	useEffect(() => {
		getTotalInfo();
	}, []);

	return (
		<div className=" text-gray-800">
			<div className="ml-80 mt-20">
				<div
					className="flex justify-end mx-10"
					data-aos="fade-left"
					data-aos-delay="100"
				>
					<button
						className="ml-5 font-semibold text-lg bg-light-blue text-white py-3 px-8 rounded-full flex justify-center items-center"
						onClick={generateReport}
					>
						<FiDownload className="text-2xl mr-2" />
						Download Summary
					</button>
				</div>
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
							<GraphInfoCard graphNames={graphOneNames} />
							<GraphDeliveryCard graphNames={graphOneNames} />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
