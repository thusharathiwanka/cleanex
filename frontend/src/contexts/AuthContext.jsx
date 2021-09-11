import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState({});

	const getLoggedIn = async () => {
		try {
			const res = await axios.get("/users/logged");
			setLoggedIn({ state: res.data.state, role: res.data.role });
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getLoggedIn();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				loggedIn,
				setLoggedIn,
				getLoggedIn,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
