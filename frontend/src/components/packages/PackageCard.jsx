import React, { useContext, useState } from "react";
import { IoBagAdd } from "react-icons/io5";

import { imageURL } from "../../config/paths";
import { CartContext } from "../../contexts/CartContext";

const PackageCard = ({ packageItem, setDelay }) => {
	const { dispatch } = useContext(CartContext);
	const [quantity, setQuantity] = useState("1");

	return (
		<div
			className="relative mx-8 rounded-xl shadow-xl overflow-hidden my-8 w-72"
			data-aos="fade-up"
		>
			<span className="absolute top-3 left-3 inline-flex items-center justify-center px-3 py-2 mr-2 text-xs font-bold leading-none text-gray-600 bg-white blur rounded-full opacity-70">
				{"LKR " + packageItem.price + ".00"}
			</span>
			<div className="w-72">
				<img
					src={imageURL + packageItem.src}
					alt="package-img"
					className="w-full h-72 object-cover"
				/>
			</div>
			<div className="p-5">
				<h3 className="font-semibold text-lg">{packageItem.name}</h3>
				<p>{packageItem.description}</p>
				<div className="flex justify-between pt-4 items-center">
					<select
						className="border rounded-full px-4 py-1 focus:outline-none"
						onClick={(e) => {
							setQuantity(e.target.value);
						}}
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>

					<button
						onClick={() => {
							dispatch({
								type: "ADD_PACK",
								pack: { pack: packageItem, quantity: quantity },
							});
						}}
						className="text-3xl text-light-blue"
					>
						<IoBagAdd />
					</button>
				</div>
			</div>
		</div>
	);
};

export default PackageCard;
