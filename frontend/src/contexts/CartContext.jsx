import React, { createContext, useEffect, useReducer } from "react";

import { cartReduser } from "../reducers/cartReducer";

export const CartContext = createContext();

const CartContextProvider = (props) => {
	const [packages, dispatch] = useReducer(cartReduser, [], () => {
		const localData = localStorage.getItem("packages");
		return localData
			? JSON.parse(localData)
			: [
					{
						id: "2",
						pack: {
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
			  ];
	});
	useEffect(() => {
		localStorage.setItem("packages", JSON.stringify(packages));
	}, [packages]);
	return (
		<CartContext.Provider value={{ packages, dispatch }}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
