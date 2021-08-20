import React from "react";
import { Route, Switch } from "react-router-dom";
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
        <Route exact path="/payment">
          <Payment />
        </Route>
        <Route exact path="/userprofile">
          <UserProfile />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
