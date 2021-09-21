import React, {Fragment} from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Header, Footer } from '../components';
import { Dealer, Outlet,Catalogue } from '../pages';

const RouterView = () => {
    return(
        <>
        <Router>
        <Header />
            <Switch>        
                <Route exact path="/"><Dealer /></Route>
                <Route path="/outlet"><Outlet /></Route>
                <Route path="/XL7"><Catalogue /></Route>        
            </Switch>
            <Footer />
        </Router>
        </>
    )
}

export default RouterView;