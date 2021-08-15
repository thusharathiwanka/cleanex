import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/nav/Navbar";

import Home from "../pages/Home";
import Worker from "../pages/Worker";
import CreateBlog from "../pages/CreateBlog";
import Blog from "../pages/Blog";
import SingleBlog from "../pages/SingleBlog";


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
