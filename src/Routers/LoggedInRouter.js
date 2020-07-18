import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AppNavbar from "../Components/AppNavbar/AppNavbar";
import ProductList from "../Pages/ProductList/ProductList";
import Home from "../Pages/Home/Home";

function LoggedInRouter() {
  return (
    <>
      <Route path="/" component={AppNavbar} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/products" component={ProductList} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
}

export default LoggedInRouter;
