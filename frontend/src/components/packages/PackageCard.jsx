import React from "react";
import { IoBagAdd } from "react-icons/io5";

import packageImage from "../../assets/images/default-package-image.png";

const PackageCard = () => {
	return (
		<div className="relative mx-8 rounded-xl shadow-xl overflow-hidden my-8">
			<span class="absolute top-3 left-3 inline-flex items-center justify-center px-3 py-2 mr-2 text-xs font-bold leading-none text-gray-600 bg-white blur rounded-full opacity-50">
				100 LKR
			</span>
			<div>
				<img src={packageImage} alt="package-img" className="w-72 h-1/4" />
			</div>
			<div className="p-5">
				<h3 className="font-semibold text-lg">Shirt on Hanger</h3>
				<p>Washed, Pressed and Hung</p>
				<div className="flex justify-between pt-4 items-center">
					<select
						name="quantity"
						className="border rounded-full px-4 py-1 focus:outline-none"
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
					<button className="text-3xl text-light-blue">
						<IoBagAdd />
					</button>
				</div>
			</div>
		</div>
	);
};

export default PackageCard;
