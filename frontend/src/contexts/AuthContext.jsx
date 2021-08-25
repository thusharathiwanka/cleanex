import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [LoggedInRole, setLoggedInRole] = useState("");

	const getLoggedIn = async () => {
		try {
			const res = await axios.get("/users/logged");
			console.log(res);
			setLoggedIn(res.data.state);
			setLoggedInRole(res.data.role);
			console.log(loggedIn, LoggedInRole);
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
				LoggedInRole,
				setLoggedIn,
				setLoggedInRole,
				getLoggedIn,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
