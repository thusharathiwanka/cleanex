import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/nav/Navbar";

import Home from "../pages/Home";
import Worker from "../pages/Worker";
import CreateBlog from "../pages/CreateBlog";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Packages from "../pages/Packages";

const Routes = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/auth/register">
					<Register />
				</Route>
				<Route exact path="/auth/login">
					<Login />
				</Route>
				<Route exact path="/auth/packages">
					<Packages />
				</Route>
				<Route exact path="/worker">
					<Worker />
				</Route>
				<Route exact path="/createblogs">
					<CreateBlog />
				</Route>
			</Switch>
		</>
	);
};

export default Routes;
