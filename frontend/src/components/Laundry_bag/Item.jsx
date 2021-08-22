import image from "../../assets/images/images-removebg-preview.png";
import iconPlus from "../../assets/images/Group.png";
import { CartContext } from "../../contexts/CartContext";
import React, { useContext } from "react";
import { imageURL } from "../../config/paths";

const Test_Item = ({ packageItem }) => {
	const { dispatch } = useContext(CartContext);

	return (
		<div>
			<div className="overflow-hidden relative shadow-xl ml-24 rounded-2x flex justify-center flex-col items-center text-center w-40">
				<div>
					<button
						onClick={() =>
							dispatch({
								type: "ADD_PACK",
								pack: { pack: packageItem, quantity: "1" },
							})
						}
						className="absolute w-6 h6 top-5 right-5"
					>
						<img src={iconPlus} alt="" />
					</button>

					<img
						className="w-40 rounded-t-lg h-40"
						src={imageURL + packageItem.src}
					/>
				</div>

				<div className="bg-light-blue w-full text-sm rounded-b-xl text-white">
					<p className="pt-1">{packageItem.name}</p>
					<p className="pb-1">{"LKR " + packageItem.price + ".00"}</p>
				</div>
			</div>
		</div>
	);
};

export default Test_Item;
