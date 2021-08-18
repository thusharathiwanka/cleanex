import React from "react";

const Error = ({ error }) => {
	return (
		<div className="absolute z-10 top-25 left-1/2 transform -translate-x-1/2">
			<div
				className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
				role="alert"
			>
				<strong className="font-bold">Error !</strong>
				<span className="block sm:inline pl-4">{error}</span>
			</div>
		</div>
	);
};

export default Error;
