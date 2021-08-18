import React from "react";

const Error = ({ message }) => {
	return (
		<div class="absolute z-10 top-25 left-1/2 transform -translate-x-1/2">
			<div
				class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
				role="alert"
			>
				<strong class="font-bold">Validation Error! </strong>
				<span class="block sm:inline">Something seriously bad happened.</span>
			</div>
		</div>
	);
};

export default Error;
