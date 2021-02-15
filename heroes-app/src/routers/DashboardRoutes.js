import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { NavBar } from "../components/ui/NavBar";
import { DcScreen } from "../components/dc/DcScreen";
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';


export const DashboardRoutes = () => {
  return (

    <Fragment>
      <NavBar />
      <div className="container mt-2">
          <Switch>
              <Route exact path="/marvel" component={ MarvelScreen } />
              <Route exact path="/dc" component={ DcScreen } />
              <Route exact path="/search" component={ SearchScreen } />
              <Route exact path="/hero/:heroeId" component={ HeroScreen } />

              <Redirect to="/marvel" />
          </Switch>
      </div>
    </Fragment>
  );
};