import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [LoggedInRole, setLoggedInRole] = useState("");

	useEffect(() => {
		const getLoggedIn = async () => {
			try {
				const res = await axios.get("/users/logged");
				setLoggedIn(res.data.state);
				setLoggedInRole(res.data.role);
			} catch (err) {
				console.error(err.message);
			}
		};
		getLoggedIn();
	}, []);

	return (
		<AuthContext.Provider value={{ loggedIn, LoggedInRole }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
