import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import { AuthContext } from '../auth/AuthContext';


import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    // const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
            <Switch>


                <Route exact path="/login" component={ LoginScreen } />
                <Route path="/" component={ DashboardRoutes } />


            </Switch>
            </div>
        </Router>
    )
}
