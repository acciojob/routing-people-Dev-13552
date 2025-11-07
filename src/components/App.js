import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./../styles/App.css";
import Home from "./Home";
import UserProfie from "./UserProfie";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Do not remove the main div */}
        <Switch>
          <Route exact path = "/" component = {Home}></Route>
          <Route exact path = "/users/:id" component = {UserProfie}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
