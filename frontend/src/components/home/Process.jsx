import React from "react";

import { processSteps } from "../../helpers/process";
import ProcessCard from "./ProcessCard";

const Process = () => {
	return (
		<div>
			<div className="max-w-screen-2xl mx-auto min-h-screen px-4 flex flex-col justify-center items-center">
				<h1 data-aos="fade-up" className="text-7xl font-extrabold pb-5">
					This is How We Work
				</h1>
				<div className="flex justify-evenly items-center pb-20 pt-24">
					{processSteps.map((processStep) => (
						<ProcessCard processStep={processStep} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Process;
