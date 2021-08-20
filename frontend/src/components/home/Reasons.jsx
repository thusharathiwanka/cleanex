import React from "react";

import ReasonCheck from "../../assets/images/reason-check.png";
import ReasonsImage from "../../assets/images/reasons-img.png";
import LeftTopBubble from "../../assets/images/left-top-bubble-reason.png";
import LeftBottomBubble from "../../assets/images/left-bottom-bubble-reason.png";
import RightBottomBubble from "../../assets/images/right-bottom-bubble-reason.png";

const Reasons = () => {
	return (
		<div className="relative">
			<div className="max-w-screen-2xl mx-auto min-h-screen px-4 flex flex-col justify-center items-center">
				<div>
					<h1
						data-aos="fade-up"
						className="text-6xl font-extrabold pb-5 text-center"
					>
						Why to Choose Us
					</h1>
					<p
						className="text-xl font-semibold pb-4 text-gray-400 text-center max-w-3xl"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						Just request through the profile to pickup your stuff. We will do
						the rest. We wash, dry and iron your clothes, you just have to ask.
					</p>
				</div>
				<div className="flex items-center mt-20 justify-around">
					<div className="w-1/2">
						<img
							src={ReasonsImage}
							alt="reasons-img"
							data-aos="fade-right"
							data-aos-offset="50"
						/>
					</div>
					<div
						className="mx-5 text-2xl font-semibold pb-4 text-center"
						data-aos="fade-left"
					>
						<div className="flex items-center py-5">
							<img src={ReasonCheck} alt="check-img" />
							<h3 className="px-5">100% Satisfaction</h3>
						</div>
						<div className="flex items-center py-5">
							<img src={ReasonCheck} alt="check-img" />
							<h3 className="px-5">Quality Services</h3>
						</div>
						<div className="flex items-center py-5">
							<img src={ReasonCheck} alt="check-img" />
							<h3 className="px-5">Fast Delivery</h3>
						</div>
						<div className="flex items-center py-5">
							<img src={ReasonCheck} alt="check-img" />
							<h3 className="px-5">Cost Effective</h3>
						</div>
					</div>
					<img
						src={LeftTopBubble}
						alt="left-top-bubble"
						className="absolute -z-2 -top-40 left-0"
						data-aos="fade-right"
					/>
					<img
						src={LeftBottomBubble}
						alt="left-bottom-bubble"
						className="absolute -z-2 -bottom-40 left-40"
						data-aos="fade-right"
					/>
					<img
						src={RightBottomBubble}
						alt="right-bottom-bubble"
						className="absolute -z-2 -bottom-80 right-20"
						data-aos="fade-left"
					/>
				</div>
			</div>
		</div>
	);
};

export default Reasons;
