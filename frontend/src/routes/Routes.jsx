import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/nav/Navbar";

import Home from "../pages/Home";
import Worker from "../pages/Worker";
import CreateBlog from "../pages/CreateBlog";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Packages from "../pages/Packages";
import AdminDashboard from "../pages/AdminDashboard";
import AdminPackages from "../pages/AdminPackages";
import AdminNewPackage from "../pages/AdminNewPackage";

const Routes = () => {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Navbar />
					<Home />
				</Route>
				<Route exact path="/auth/register">
					<Navbar />
					<Register />
				</Route>
				<Route exact path="/auth/login">
					<Navbar />
					<Login />
				</Route>
				<Route exact path="/auth/user/packages">
					<Navbar />
					<Packages />
				</Route>
				<Route exact path="/auth/admin/dashboard">
					<AdminDashboard />
				</Route>
				<Route exact path="/auth/admin/packages">
					<AdminPackages />
				</Route>
				<Route exact path="/auth/admin/packages/new">
					<AdminNewPackage />
				</Route>
				<Route exact path="/worker">
					<Navbar />
					<Worker />
				</Route>
				<Route exact path="/createblogs">
					<Navbar />
					<CreateBlog />
				</Route>
			</Switch>
		</>
	);
};

export default Routes;
