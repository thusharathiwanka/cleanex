import { IoBagAddOutline } from "react-icons/io5";
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
						className="absolute w-7 h6 top-5 b 	font-weight: 500;
						font-extrabold right-5 text-light-blue hover:text-blue-300"
					>
						<IoBagAddOutline className=" w-7 h-7 " />
					</button>

					<img
						className="w-40 rounded-t-lg h-40"
						src={imageURL + packageItem.src}
						alt="image"
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
