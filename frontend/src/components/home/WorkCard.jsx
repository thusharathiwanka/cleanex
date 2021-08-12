import React from "react";

const WorkCard = ({ work }) => {
	return (
		<div
			className="flex flex-col justify-between items-start w-96 mx-10 min-h-60 h-auto my-10 text-left shadow-lg rounded-xl"
			data-aos-delay={work.delay}
			data-aos="fade-up"
			data-aos-offset="400"
		>
			<div className="flex justify-center items-center">
				<img src={work.src} alt="work-img" className="w-full" />
			</div>
			<h3 className="text-2xl font-bold pt-10 pb-4 px-6">{work.title}</h3>
			<p className="text-lg px-6 pb-5">{work.description}</p>
		</div>
	);
};

export default WorkCard;
