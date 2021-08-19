import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

import Navbar from "../components/nav/Navbar";
import Home from "../pages/Home";
import Worker from "../pages/Worker";
import CreateBlog from "../pages/CreateBlog";
import Blog from "../pages/Blog";
import SingleBlog from "../pages/SingleBlog";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Packages from "../pages/Packages";
import AdminDashboard from "../pages/AdminDashboard";
import AdminPackages from "../pages/AdminPackages";
import AdminNewPackage from "../pages/AdminNewPackage";
import AdminCustomer from "../pages/AdminCustomer";
import AdminFeedback from "../pages/AdminFeedback";
import Payment from "../pages/Payment";
import Manager from "../pages/Manager";

const Routes = () => {
	const { loggedIn } = useContext(AuthContext);

	return (
		<Switch>
			<Route exact path="/">
				{!loggedIn ? (
					<>
						<Navbar />
						<Home />
					</>
				) : (
					<Redirect to="/auth/user/packages" />
				)}
			</Route>
			<Route exact path="/auth/register">
				{!loggedIn ? (
					<>
						<Navbar />
						<Register />
					</>
				) : (
					<Redirect to="/auth/user/packages" />
				)}
			</Route>
			<Route exact path="/auth/login">
				{!loggedIn ? (
					<>
						<Navbar />
						<Login />
					</>
				) : (
					<Redirect to="/auth/user/packages" />
				)}
			</Route>
			<Route exact path="/auth/user/packages">
				{!loggedIn ? (
					<Redirect to="/" />
				) : (
					<>
						<Navbar />
						<Packages />
					</>
				)}
			</Route>
			<Route exact path="/auth/admin/dashboard">
				{!loggedIn ? <Redirect to="/" /> : <AdminDashboard />}
			</Route>
			<Route exact path="/auth/admin/packages">
				{!loggedIn ? <Redirect to="/" /> : <AdminPackages />}
			</Route>
			<Route exact path="/auth/admin/packages/new">
				{!loggedIn ? <Redirect to="/" /> : <AdminNewPackage />}
			</Route>
			<Route exact path="/auth/admin/customers">
				{!loggedIn ? <Redirect to="/" /> : <AdminCustomer />}
			</Route>
			<Route exact path="/auth/admin/feedbacks">
				{!loggedIn ? <Redirect to="/" /> : <AdminFeedback />}
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
			<Route exact path="/payment">
				<Payment />
			</Route>
			<Route exact path="*">
				{!loggedIn ? (
					<Redirect to="/" />
				) : (
					<Redirect to="/auth/user/packages" />
				)}
			</Route>
			<Route exact path="/manager">
				<Manager />
			</Route>
		</Switch>
	);
};

export default Routes;
