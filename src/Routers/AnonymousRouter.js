import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginPassword from "../Pages/LoginPassword/LoginPassword";
import SignUp from "../Pages/SignUp/SignUp";

function AnonymousRouter() {
  return (
    <Switch>
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/login" component={LoginPassword} />
      <Redirect to="/register" />
    </Switch>
  );
}

export default AnonymousRouter;
