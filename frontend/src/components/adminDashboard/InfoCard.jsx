import React from "react";

const InfoCard = ({ cardInfo }) => {
	return (
		<div
			className="w-1/2 shadow-lg rounded-xl p-8 bg-white m-8 flex justify-between"
			data-aos="fade-up"
		>
			<div>
				<h1 className="text-5xl font-semibold">10</h1>
				<p className="text-base font-semibold pt-2 text-gray-400">
					{cardInfo.name}
				</p>
			</div>
			<div className="text-4xl text-light-blue">{cardInfo.icon}</div>
		</div>
	);
};

export default InfoCard;
