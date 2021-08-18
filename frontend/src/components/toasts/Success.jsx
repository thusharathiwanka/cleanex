import React from "react";

const Success = ({ message }) => {
	return (
		<div class="absolute z-10 top-25 left-1/2 transform -translate-x-1/2">
			<div
				class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
				role="alert"
			>
				<strong class="font-bold">Validation Success! </strong>
				<span class="block sm:inline">Something seriously good happened.</span>
			</div>
		</div>
	);
};

export default Success;
