import React from "react";

const FeedbackCard = ({ feedback }) => {
	return (
		<div
			className="flex flex-col justify-center items-center w-80 text-center m-10 shadow-lg rounded-xl p-5 bg-white"
			data-aos-delay={feedback.delay}
			data-aos="fade-up"
		>
			<div className="p-10 w-60 h-60 flex justify-center items-center absolute -top-28">
				<img src={feedback.src} alt="process-step-img" className="w-28" />
			</div>
			<h3 className="text-2xl font-bold pt-20">{feedback.name}</h3>
			<h4 className="text-lg font-bold text-gray-400">{feedback.title}</h4>
			<p className="text-base text-gray-400 pt-8 px-5 pb-4">
				{feedback.description}
			</p>
		</div>
	);
};

export default FeedbackCard;
