import React, { createContext, useEffect, useReducer } from "react";

import { cartReduser } from "../reducers/cartReducer";

export const CartContext = createContext();

const CartContextProvider = (props) => {
	const [packages, dispatch] = useReducer(cartReduser, [], () => {
		const localData = localStorage.getItem("packages");
		return localData ? JSON.parse(localData) : [];
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
