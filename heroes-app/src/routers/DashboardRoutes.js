import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { NavBar } from "../components/ui/NavBar";

export const DashboardRoutes = () => {
  return (

    <Fragment>
      <NavBar />
      <div className="container mt-2">
          <Switch>
              <Route exact path="/marvel" component={ MarvelScreen } />
              {/* <Route exact path="/marvel" component={  } />
              <Route exact path="/marvel" component={  } />
              <Route exact path="/marvel" component={  } /> */}
              <Redirect to="/marvel" />
          </Switch>
      </div>
    </Fragment>
  );
};


