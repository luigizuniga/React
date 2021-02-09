import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { HomeScreen } from './HomeScreen';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route  exac path="/login" component={ LoginScreen} /> 
                    <Route  exac path="/about" component={ AboutScreen} /> 
                    <Route  exac path="/" component={ HomeScreen} />
                </Switch>
            </div>
        </Router>
    )
}
