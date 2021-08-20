import React from "react";

const ProcessCard = ({ processStep }) => {
	return (
		<div
			className="flex flex-col justify-center items-center w-96 text-center m-10"
			data-aos-delay={processStep.delay}
			data-aos="fade-up"
		>
			<div className="shadow-lg rounded-full p-10 w-60 h-60 flex justify-center items-center bg-white">
				<img src={processStep.src} alt="process-step-img" className="w-24" />
			</div>
			<h3 className="text-3xl font-bold pt-10 pb-4">{processStep.title}</h3>
			<p className="text-lg text-gray-400">{processStep.description}</p>
		</div>
	);
};

export default ProcessCard;
