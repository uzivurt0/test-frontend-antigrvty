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
                    <Route path="test-frontend-antigrvty/" exact component={Dealer}/>
                    <Route path="test-frontend-antigrvty/outlet" component={Outlet}/>
                    <Route path="test-frontend-antigrvty/XL7" component={Catalogue}/>
                    <Footer />
                </Fragment>
            </Switch>
        </Router>
        </>
    )
}

export default RouterView;