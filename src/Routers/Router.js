import React, { useContext } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import AnonymousRouter from "./AnonymousRouter";
import LoggedInRouter from "./LoggedInRouter";

function Router() {
  const authContext = useContext(require("../App").AuthContext);
  return (
    <HashRouter>
      <Route
        render={() => {
          const isLoggedIn = authContext && authContext.userId;
          return (
            <Switch>
              {isLoggedIn && <LoggedInRouter />}
              <AnonymousRouter />
            </Switch>
          );
        }}
      />
    </HashRouter>
  );
}

export default Router;
