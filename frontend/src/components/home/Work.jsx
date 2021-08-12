import React from "react";

import { workDetails } from "../../helpers/cardDetails";
import WorkCard from "./WorkCard";

const Work = () => {
	return (
		<div>
			<div className="max-w-screen-2xl mx-auto min-h-screen px-4 flex flex-col justify-center items-center">
				<h1 data-aos="fade-up" className="text-6xl font-extrabold pb-5">
					What We Offer
				</h1>
				<div className="flex justify-evenly items-center pb-20 pt-28 flex-wrap">
					{workDetails.map((work, index) => (
						<WorkCard work={work} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Work;
