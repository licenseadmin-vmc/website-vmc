import React, { useEffect } from "react";
import {
  Route,
  Switch,
  HashRouter as Router,
  Redirect,
} from "react-router-dom";

import Home from "../pages/Home";
import Enter from "../pages/Enter";


const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/home",
    component: Enter,
  },
  
];

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <Router>
        <Switch>
          {routes.map(({ component: Component, ...routeProps }, idx) => (
            <Route key={idx} {...routeProps}>
              <Component />
            </Route>
          ))}
          <Redirect to="/" />
        </Switch>
      </Router>
  );
}

export default App;
