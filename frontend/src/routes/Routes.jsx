import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/nav/Navbar";

import Home from "../pages/Home";

const Routes = () => {
	return (
		<Switch>
			<Navbar />
			<Route exact path="/">
				<Home />
			</Route>
		</Switch>
	);
};

export default Routes;
