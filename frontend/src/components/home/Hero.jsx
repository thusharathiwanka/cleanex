import React from "react";
import { Link } from "react-router-dom";

import HeroImage from "../../assets/images/landing-img.png";

const Hero = () => {
	return (
		<div className="bg-lighter-blue">
			<div className="max-w-screen-2xl mx-auto min-h-90 px-4 flex justify-between items-center">
				<div className="flex flex-col items-start -mt-20 flex-wrap">
					<h1 className="text-7xl font-extrabold pb-5">
						Save Time for more Important Things
					</h1>
					<p className="text-xl font-semibold pb-4 text-gray-500">
						We'll take care all your cleanings
					</p>
					<Link
						className="font-medium bg-light-blue text-white py-4 px-14 rounded-full mt-8"
						to="/register"
					>
						Get Started
					</Link>
				</div>
				<div>
					<img src={HeroImage} alt="hero-img" className="transform scale-125" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
