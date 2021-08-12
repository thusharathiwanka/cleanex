import React from "react";

import Hero from "../components/home/Hero";
import Process from "../components/home/Process";
import Reasons from "../components/home/Reasons";
import Work from "../components/home/Work";

const Home = () => {
	return (
		<div className="text-gray-800">
			<Hero />
			<Process />
			<Work />
			<Reasons />
		</div>
	);
};

export default Home;
