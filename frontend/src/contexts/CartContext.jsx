import React, { createContext, useState, useEffect } from "react";
import uuid from "uuid/dist/v1";

export const CartContext = createContext();

const CartContextProvider = (props) => {
	const [packages, setPackages] = useState([
		{
			id: "1",
			package: {
				_id: "61207cf29e205839985698b9",
				status: "active",
				createdAt: "1629331200000",
				updatedAt: "1629417600000",
				name: "Shirt on Hanger",
				description: "Washed, Pressed and Hung",
				price: "200",
			},
			quantity: "2",
		},
	]);
	const addPackage = (Package, Quantity) => {
		setPackages([...packages, { Package, Quantity, id: uuid() }]);
	};

	const removePacakge = (id) => {
		setPackages(packages.filter((packages) => packages.id !== id));
	};
	return (
		<CartContext.Provider value={{ packages, removePacakge, addPackage }}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
