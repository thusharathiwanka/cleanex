import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

const OrderSummary = () => {
	const { packages } = useContext(CartContext);

	return packages.length ? (
		<div className="max-w-xl   ml-40     ">
			<div className=" bg-light-blue pb-3 pt-3 text-center text-white text-xl mb-10">
				<p>Order summary</p>
			</div>
			{packages.map((packages) => {
				return (
					<div key={packages.id} className="pt-20 pb-20 bg-gray-300 text-gray">
						<p className="ml-11">Items:</p>
						<p className="ml-20">{packages.package.name}</p>
						<p className="ml-11">Estimated Sub Total :</p>
						<p className="ml-20">Rs {packages.package.price}.00</p>
					</div>
				);
			})}
			<div className="mb-40 mt-10 max-w-4xl">
				<button className="p-3  rounded-2xl bg-light-blue text-center text-white max-w-sm float-right    ">
					Place Order
				</button>
			</div>
		</div>
	) : (
		<div className="w-9/12 ml-auto mr-auto mb-10">Your lundry bag is Empty</div>
	);
};

export default OrderSummary;
