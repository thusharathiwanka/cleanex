import React from "react";

const InfoCard = ({ info, total }) => {
	return (
		<div className="w-1/2 shadow-lg rounded-xl p-8 bg-white m-8 flex justify-between">
			<div>
				<h1 className="text-5xl font-semibold">{info.total}</h1>
				<p className="text-lg font-medium pt-2 text-gray-500">{info.name}</p>
			</div>
			<div className="text-5xl p-1 text-light-blue">{info.icon}</div>
		</div>
	);
};

export default InfoCard;
