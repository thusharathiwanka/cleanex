import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/nav/Navbar";

import Home from "../pages/Home";
import Worker from "../pages/Worker";
import CreateBlog from "../pages/CreateBlog";
<<<<<<< HEAD
import Blog from "../pages/Blog";
import SingleBlog from "../pages/SingleBlog";

=======
import Register from "../pages/Register";
import Login from "../pages/Login";
import Packages from "../pages/Packages";
import AdminDashboard from "../pages/AdminDashboard";
import AdminPackages from "../pages/AdminPackages";
import AdminNewPackage from "../pages/AdminNewPackage";
import AdminCustomer from "../pages/AdminCustomer";
import AdminFeedback from "../pages/AdminFeedback";
>>>>>>> 60a3bf4771d27e5b6ac90e0dcc99b931371c5fc8

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
				<Route exact path="/auth/admin/customers">
					<AdminCustomer />
				</Route>
				<Route exact path="/auth/admin/feedbacks">
					<AdminFeedback />
				</Route>
				<Route exact path="/worker">
					<Navbar />
					<Worker />
				</Route>
				<Route exact path="/createblogs">
					<Navbar />
					<CreateBlog />
				</Route>
				<Route exact path="/blogs">
					<Blog />
				</Route>
				<Route exact path="/singleblog">
					<SingleBlog />
				</Route>
			</Switch>
		</>
	);
};

export default Routes;
