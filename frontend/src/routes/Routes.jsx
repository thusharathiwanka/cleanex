import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

import AdminCustomer from "../pages/AdminCustomer";
import AdminDashboard from "../pages/AdminDashboard";
import AdminFeedback from "../pages/AdminFeedback";
import ModeratorLogin from "../pages/ModeratorLogin";
import AdminNewPackage from "../pages/AdminNewPackage";
import AdminPackages from "../pages/AdminPackages";
import AdminUpdatePackage from "../pages/AdminUpdatePackage";
import AllOrderHistory from "../pages/AllOrderHistory";
import Blog from "../pages/Blog";
import CreateBlog from "../pages/CreateBlog";
import Deliverer from "../pages/Deliverer";
import DelivererHome from "../pages/Deliverer_home";
import EditBlog from "../pages/EditBlog";
import Feedback from "../pages/Feedback";
import Home from "../pages/Home";
import LaundryBag from "../pages/Laundry_bag";
import Login from "../pages/Login";
import Manager from "../pages/Manager";
import Navbar from "../components/nav/Navbar";
import Packages from "../pages/Packages";
import Payment from "../pages/Payment";
import Register from "../pages/Register";
import SingleBlog from "../pages/SingleBlog";
import UserProfile from "../pages/UserProfile";
import UserProfileDelete from "../pages/UserProfileDelete";
import UserProfileEditDelete from "../pages/UserProfileEditDelete";
import ViewOrder from "../pages/ViewOrder";
import Worker from "../pages/Worker";

const Routes = () => {
	const { loggedIn } = useContext(AuthContext);

	return (
		<Switch>
			<Route exact path="/">
				{loggedIn.state && loggedIn.role !== "customer" ? (
					<Redirect to={`/auth/${loggedIn.role}/dashboard`} />
				) : loggedIn.state && loggedIn.role === "customer" ? (
					<Redirect to={`/auth/user/packages`} />
				) : (
					<>
						<Navbar />
						<Home />
					</>
				)}
			</Route>
			<Route exact path="/auth/register">
				{loggedIn.state && loggedIn.role ? (
					<Redirect to={`/auth/${loggedIn.role}/dashboard`} />
				) : (
					<>
						<Navbar />
						<Register />
					</>
				)}
			</Route>
			<Route exact path="/auth/login">
				{loggedIn.state && loggedIn.role ? (
					<Redirect to={`/auth/${loggedIn.role}/dashboard`} />
				) : (
					<>
						<Navbar />
						<Login />
					</>
				)}
			</Route>
			<Route exact path="/auth/user/packages">
				{loggedIn.state && loggedIn.role ? (
					<>
						<Navbar />
						<Packages />
					</>
				) : (
					<Redirect to="/" />
				)}
			</Route>
			<Route exact path="/auth/moderator/login">
				<ModeratorLogin />
			</Route>
			<Route exact path="/auth/admin/dashboard">
				{loggedIn.state && loggedIn.role === "admin" ? (
					<>
						<AdminDashboard />
					</>
				) : (
					<Redirect to="/" />
				)}
			</Route>
			<Route exact path="/auth/admin/packages">
				{loggedIn.state && loggedIn.role === "admin" ? (
					<>
						<AdminPackages />
					</>
				) : (
					<Redirect to="/" />
				)}
			</Route>
			<Route exact path="/auth/admin/packages/new">
				{loggedIn.state && loggedIn.role === "admin" ? (
					<>
						<AdminNewPackage />
					</>
				) : (
					<Redirect to="/" />
				)}
			</Route>
			<Route exact path="/auth/admin/packages/update/:id">
				{loggedIn.state && loggedIn.role === "admin" ? (
					<>
						<AdminUpdatePackage />
					</>
				) : (
					<Redirect to="/" />
				)}
			</Route>
			<Route exact path="/auth/admin/customers">
				{loggedIn.state && loggedIn.role === "admin" ? (
					<>
						<AdminCustomer />
					</>
				) : (
					<Redirect to="/" />
				)}
			</Route>
			<Route exact path="/auth/admin/feedbacks">
				{loggedIn.state && loggedIn.role === "admin" ? (
					<>
						<AdminFeedback />
					</>
				) : (
					<Redirect to="/" />
				)}
			</Route>
			<Route exact path="/auth/worker/dashboard">
				<Navbar />
				<Worker />
			</Route>
			<Route exact path="/createblogs">
				<Navbar />
				<CreateBlog />
			</Route>
			<Route exact path="/auth/user/blogs">
				<Blog />
			</Route>
			<Route exact path="/singleblog/:id">
				<SingleBlog />
			</Route>
			<Route exact path="/payment/:id">
				<Payment />
			</Route>
			<Route exact path="/auth/manager/dashboard">
				<Manager />
			</Route>
			<Route exact path="/auth/user/profile">
				<UserProfile />
			</Route>
			<Route exact path="/auth/user/userprofileeditdelete">
				<UserProfileEditDelete />
			</Route>
			<Route exact path="/auth/user/allorderhistory">
				<AllOrderHistory />
			</Route>
			<Route exact path="/auth/user/vieworder/:id">
				<ViewOrder />
			</Route>
			<Route exact path="/auth/user/feedback">
				<Feedback />
			</Route>
			<Route exact path="/auth/user/userprofiledelete">
				<UserProfileDelete />
			</Route>
			<Route exact path="/auth/deliverer/Deliverer">
				<Deliverer />
			</Route>
			<Route exact path="/auth/deliverer/dashboard">
				<DelivererHome />
			</Route>
			<Route exact path="/auth/user/cart">
				<LaundryBag />
			</Route>
			<Route exact path="/editblogs/:id">
				<EditBlog />
			</Route>
			<Route exact path="*">
				{loggedIn.state && loggedIn.role !== "customer" ? (
					<Redirect to={`/auth/${loggedIn.role}/dashboard`} />
				) : loggedIn.state && loggedIn.role === "customer" ? (
					<Redirect to={`/auth/user/packages`} />
				) : (
					<Redirect to={`/`} />
				)}
			</Route>
		</Switch>
	);
};

export default Routes;
