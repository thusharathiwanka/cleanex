import React from "react";

import Hero from "../components/home/Hero";
import Process from "../components/home/Process";
import Work from "../components/home/Work";

const Home = () => {
	return (
		<div className="text-gray-800">
			<Hero />
			<Process />
			<Work />
		</div>
	);
};

export default Home;
