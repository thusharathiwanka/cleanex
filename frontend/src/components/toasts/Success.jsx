import React from "react";

const Success = ({ success }) => {
	return (
		<div className="absolute z-10 top-25 left-1/2 transform -translate-x-1/2">
			<div
				className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
				role="alert"
			>
				<strong className="font-bold">Success ! </strong>
				<span className="block sm:inline pl-4">
					Something seriously good happened.
				</span>
			</div>
		</div>
	);
};

export default Success;
