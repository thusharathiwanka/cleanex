import React, { createContext, useEffect, useReducer } from "react";

import { cartReduser } from "../reducers/cartReducer";

export const CartContext = createContext();

const CartContextProvider = (props) => {
	const [items, dispatch] = useReducer(cartReduser, [], () => {
		const localData = localStorage.getItem("items");
		return localData ? JSON.parse(localData) : [];
	});
	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(items));
	}, [items]);
	return (
		<CartContext.Provider value={{ items, dispatch }}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
