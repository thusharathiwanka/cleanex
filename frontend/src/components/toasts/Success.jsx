import React from "react";

const Success = ({ success, left = "left-1/2", top = "top-10" }) => {
	return (
		<div className="w-full flex justify-center relative">
			<div
				className={`absolute z-10 ${top} ${left} transform -translate-x-1/2`}
			>
				<div
					className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
					role="alert"
				>
					<strong className="font-bold">Success ! </strong>
					<span className="block sm:inline pl-2">{success}</span>
				</div>
			</div>
		</div>
	);
};

export default Success;
