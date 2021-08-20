import React from "react";
import { Link } from "react-router-dom";

import HeroImage from "../../assets/images/landing-img.png";

const Hero = () => {
	return (
		<div className="bg-lighter-blue">
			<div className="max-w-screen-2xl mx-auto min-h-90 px-4 flex justify-between items-center">
				<div
					data-aos-offset="500"
					className="flex flex-col items-start -mt-20 flex-wrap"
				>
					<h1
						className="text-7xl font-extrabold pb-5"
						data-aos-delay="0"
						data-aos="fade-up-right"
					>
						Save Time for more Important Things
					</h1>
					<p
						className="text-2xl font-semibold pb-4 text-gray-400"
						data-aos-delay="100"
						data-aos="fade-up-right"
					>
						We'll take care all your cleanings
					</p>
					<Link
						data-aos-delay="200"
						data-aos="fade-up-right"
						className="bg-light-blue text-white py-4 px-14 rounded-full mt-8 font-semibold text-lg"
						to="/auth/register"
					>
						Get Started
					</Link>
				</div>
				<div data-aos="fade-down-left" data-aos-offset="200">
					<img src={HeroImage} alt="hero-img" className="transform scale-135" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
