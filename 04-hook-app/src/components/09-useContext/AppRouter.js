import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { NavBar } from './NavBar';

import { HomeScreen } from './HomeScreen';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route  exact path="/login" component={ LoginScreen} /> 
                    <Route  exact path="/about" component={ AboutScreen} /> 
                    <Route  exact path="/" component={ HomeScreen} />
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}
