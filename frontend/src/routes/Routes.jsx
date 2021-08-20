import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/nav/Navbar";

import Home from "../pages/Home";
import Worker from "../pages/Worker";
import CreateBlog from "../pages/CreateBlog";
import Deliverer from "../pages/Deliverer";
import DelivererHome from "../pages/Deliverer_home";
import LaundryBag from "../pages/Laundry_bag";

const Routes = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/worker">
					<Worker />
				</Route>
				<Route exact path="/createblogs">
					<CreateBlog />
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
		</>
	);
};

export default Routes;
