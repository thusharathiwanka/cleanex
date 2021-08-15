import React from "react";

import InfoCard from "../components/admin/InfoCard";
import Sidebar from "../components/sidebar/Sidebar";
import { adminCardInfo } from "../helpers/adminCardsInfo";

const Dashboard = () => {
	return (
		<div className=" text-gray-800">
			<div className="ml-80 mt-20 ">
				<h1 className="text-5xl font-extrabold pb-10 text-center">Summary</h1>
				<Sidebar />
				<div className="px-16 flex justify-between">
					{adminCardInfo.map((adminCard) => (
						<InfoCard cardInfo={adminCard} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
