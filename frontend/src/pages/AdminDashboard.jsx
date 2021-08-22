import React from "react";

import GraphInfoCard from "../components/adminDashboard/GraphInfoCard";
import InfoCard from "../components/adminDashboard/InfoCard";
import Sidebar from "../components/sidebar/Sidebar";
import { adminCardInfo } from "../helpers/adminCardsInfo";

const Dashboard = () => {
	document.title = "CLEANEX - Dashboard";
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
				<div className="w-full">
					<div className="px-16 flex justify-between">
						{adminCardInfo.map((adminCard, index) => (
							<InfoCard cardInfo={adminCard} key={index} />
						))}
					</div>
					<div className="px-16 flex justify-between w-full" id="chart">
						<GraphInfoCard delay={0} />
						<GraphInfoCard delay={300} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
