import React from "react";

import Sidebar from "../components/sidebar/Sidebar";

const AdminReports = () => {
	document.title = "CLEANEX - Reports";

	return (
		<div className=" text-gray-800">
			<div className="ml-80 mt-12">
				<div className="w-full text-center flex justify-center">
					<h1
						className="text-5xl font-extrabold pb-10 text-center"
						data-aos="fade-up"
					>
						Packages Report
					</h1>
					<Sidebar />
				</div>
			</div>
		</div>
	);
};

export default AdminReports;
