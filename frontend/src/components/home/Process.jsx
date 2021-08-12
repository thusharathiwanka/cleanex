import React from "react";

import { processSteps } from "../../helpers/cardDetails";
import LeftBubble from "../../assets/images/left-bubble-process.png";
import RightBubble from "../../assets/images/right-bubble-process.png";
import ProcessCard from "./ProcessCard";

const Process = () => {
	return (
		<div className="relative">
			<div className="max-w-screen-2xl mx-auto min-h-screen px-4 flex flex-col justify-center items-center">
				<h1
					data-aos="fade-up"
					className="text-6xl font-extrabold pb-5 pseudo-header pt-10"
				>
					This is How We Work
				</h1>
				<div className="flex justify-evenly items-center pb-20 pt-28 flex-wrap">
					{processSteps.map((processStep, index) => (
						<ProcessCard processStep={processStep} key={index} />
					))}
				</div>
			</div>
			<img
				src={RightBubble}
				alt="right-bubble-img"
				className="absolute right-0 -bottom-60 -z-2"
				data-aos="fade-left"
			/>
			<img
				src={LeftBubble}
				alt="left-bubble-img"
				className="absolute left-0 top-10 -z-2"
				data-aos="fade-right"
			/>
		</div>
	);
};

export default Process;
