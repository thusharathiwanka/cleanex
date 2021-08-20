import React from "react";
import image from "../../assets/images/images-removebg-preview.png";
import iconPlus from "../../assets/images/Group.png";

const Test_Item = () => {
	return (
		<div className="overflow-hidden relative shadow-xl ml-24 rounded-2x flex justify-center flex-col items-center text-center w-40">
			<div className="">
				<button className="absolute w-6 h6 top-5 right-5">
					<img src={iconPlus} alt="" />
				</button>

				<img className="w-28 h-40" src={image} alt="" />
			</div>

			<div className="bg-light-blue w-full text-sm rounded-b-xl text-white rounded-t-xl">
				<p className="pt-1">Trouser</p>
				<p className="pb-1">$11.99</p>
			</div>
		</div>
	);
};

export default Test_Item;
