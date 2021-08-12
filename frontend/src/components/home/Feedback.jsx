import React from "react";

import { feedbackDetails } from "../../helpers/feedbackDetails";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
	return (
		<div className="relative">
			<div className="max-w-screen-2xl mx-auto min-h-screen px-4 flex flex-col justify-center items-center">
				<div>
					<h1
						data-aos="fade-up"
						className="text-6xl font-extrabold pb-5 text-center"
					>
						What our Clients Say
					</h1>
					<div className="flex justify-evenly items-center pb-24 pt-32 flex-wrap">
						{feedbackDetails.map((feedback, index) => (
							<FeedbackCard feedback={feedback} key={index} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feedback;
