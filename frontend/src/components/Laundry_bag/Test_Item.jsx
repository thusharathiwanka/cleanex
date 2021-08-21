import image from "../../assets/images/images-removebg-preview.png";
import iconPlus from "../../assets/images/Group.png";
import { CartContext } from "../../contexts/CartContext";
import React, { useContext } from "react";

const Test_Item = () => {
	const { packages, dispatch } = useContext(CartContext);

	return (
		<div>
			{packages.map((packages) => {
				return (
					<div className="overflow-hidden relative shadow-xl ml-24 rounded-2x flex justify-center flex-col items-center text-center w-40">
						<div>
							<button
								onclick={() =>
									dispatch({
										type: "ADD_PACK",
										pack: [
											{ pack: packages.pack },
											{ quantity: packages.pack.quantity },
										],
									})
								}
								className="absolute w-6 h6 top-5 right-5"
							>
								<img src={iconPlus} alt="" />
							</button>

							<img className="w-28 h-40" src={image} alt="" />
						</div>

						<div className="bg-light-blue w-full text-sm rounded-b-xl text-white rounded-t-xl">
							<p className="pt-1">{packages.pack.name}</p>
							<p className="pb-1">RS.{packages.pack.price}.00</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Test_Item;
