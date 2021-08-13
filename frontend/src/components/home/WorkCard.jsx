import React from "react";

const WorkCard = ({ work }) => {
	return (
		<div
			className="flex flex-col justify-between items-start w-85 m-10 min-h-60 h-auto text-left shadow-lg rounded-2xl"
			data-aos-delay={work.delay}
			data-aos="fade-up"
		>
			<div className="flex justify-center items-center">
				<img src={work.src} alt="work-img" className="w-full" />
			</div>
			<h3 className="text-2xl font-bold pt-10 pb-4 px-6">{work.title}</h3>
			<p className="text-lg px-6 pb-8 text-gray-400">{work.description}</p>
		</div>
	);
};

export default WorkCard;
