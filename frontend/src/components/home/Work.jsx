import React from "react";

import { workDetails } from "../../helpers/cardDetails";
import WorkCard from "./WorkCard";

const Work = () => {
	return (
		<div>
			<div className="max-w-screen-2xl mx-auto min-h-screen px-4 flex flex-col justify-center items-center">
				<h1 data-aos="fade-up" className="text-7xl font-extrabold pb-5">
					What We Offer
				</h1>
				<div className="flex justify-evenly items-center pb-20 pt-28 flex-wrap">
					{workDetails.map((work) => (
						<WorkCard work={work} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Work;
