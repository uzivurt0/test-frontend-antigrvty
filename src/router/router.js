import React, {Fragment} from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Header, Footer } from '../components';
import { Dealer, Outlet,Catalogue } from '../pages';

const RouterView = () => {
    return(
        <>
        <Router>
            <Switch>
                <Fragment>
                    <Header />
                    <Route path="/" exact component={Dealer}/>
                    <Route path="/outlet" component={Outlet}/>
                    <Route path="/XL7" component={Catalogue}/>
                    <Footer />
                </Fragment>
            </Switch>
        </Router>
        </>
    )
}

export default RouterView;