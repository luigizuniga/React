import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { NavBar } from "../components/ui/NavBar";
import { DcScreen } from "../components/dc/DcScreen";
import { SearchScreen } from '../components/search/SearchScreen';


export const DashboardRoutes = () => {
  return (

    <Fragment>
      <NavBar />
      <div className="container mt-2">
          <Switch>
              <Route exact path="/marvel" component={ MarvelScreen } />
              <Route exact path="/search" component={ SearchScreen } />
              <Route exact path="/dc" component={ DcScreen } />
              <Redirect to="/marvel" />
          </Switch>
      </div>
    </Fragment>
  );
};