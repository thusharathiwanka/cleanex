import React from "react";

const InfoCard = ({ cardInfo }) => {
	return (
		<div className="w-1/3 shadow-lg rounded-xl p-8 bg-white m-8 flex justify-between">
			<div>
				<h1 className="text-5xl font-semibold">10</h1>
				<p>{cardInfo.name}</p>
			</div>
			<div>{cardInfo.icon}</div>
		</div>
	);
};

export default InfoCard;
