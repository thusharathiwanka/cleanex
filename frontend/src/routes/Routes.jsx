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
import UserProfile from "../pages/UserProfile";
import Manager from "../pages/Manager";
import AdminLogin from "../pages/ModeratorLogin";
import Deliverer from "../pages/Deliverer";
import DelivererHome from "../pages/Deliverer_home";
import LaundryBag from "../pages/Laundry_bag";

const Routes = () => {
	const { loggedIn, loggedInRole } = useContext(AuthContext);

<<<<<<< HEAD
	return (
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
			<Route exact path="/auth/moderator/login">
				<AdminLogin />
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
			<Route exact path="/auth/worker/dashboard">
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
			<Route exact path="/auth/manager/dashboard">
				<Manager />
			</Route>
			<Route exact path="/userprofile">
				<UserProfile />
			</Route>
			<Route exact path="/Deliverer">
				<Deliverer />
			</Route>
			<Route exact path="/Deliverer_home">
				<DelivererHome />
			</Route>
			<Route exact path="/Laundry_bag">
				<LaundryBag />
			</Route>
		</Switch>
	);
=======
  return (
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
      <Route exact path="/auth/moderator/login">
        <AdminLogin />
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
      <Route exact path="/auth/worker/dashboard">
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
      <Route exact path="/auth/manager/dashboard">
        <Manager />
      </Route>
      <Route exact path="/auth/user/profile">
        <UserProfile />
      </Route>
    </Switch>
  );
>>>>>>> 6edcb047e335a8fb41d88324a9d76a30ff24fbf1
};

export default Routes;
