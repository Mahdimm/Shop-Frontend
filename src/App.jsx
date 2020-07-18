import { decode } from "jsonwebtoken";
import React, { createContext } from "react";
import "./App.css";
import Router from "./Routers/Router";
import * as api from "./Services/Api.service";

export const AuthContext = createContext();

const getJwt = () => window.localStorage.getItem("jwt");

function App() {
  const token = getJwt();
  let userId = "";
  if (token) {
    api.setJwt(token);
    userId = decode(token).id;
  }
  return (
    <AuthContext.Provider value={{ token, userId }}>
      <Router />
    </AuthContext.Provider>
  );
}

export default App;
