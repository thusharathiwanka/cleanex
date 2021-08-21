import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import Packages from "../../pages/Packages";

const OrderSummary = () => {
	const { packages } = useContext(CartContext);
	return (
		<div className="max-w-xl   ml-40     ">
			<div className=" bg-light-blue pb-3 pt-3 text-center text-white text-xl mb-10">
				<p>Order summary</p>
			</div>
			<div className="pt-20 pb-20 bg-gray-300 text-gray">
				<p className="ml-11">Items:</p>
				{packages.map((packages) => {
					<p key={Packages.id}>{packages.package.name}</p>;
				})}
			</div>
			<div className="mb-40 mt-10 max-w-4xl">
				<button className="p-3  rounded-2xl bg-light-blue text-center text-white max-w-sm float-right    ">
					Place Order
				</button>
			</div>
		</div>
	);
};

export default OrderSummary;
