import './App.css';
import RouterView from './router/router';
import {Route, BrowserRouter as Router, Switch, useRouteMatch} from 'react-router-dom';
import { Header, Footer } from './components';
import { Dealer, Outlet,Catalogue } from './pages';

function App() {
  return (
    <>
        <Header />
            <Switch>        
                <Route path="/test-frontend-antigrvty" exact component ={Dealer}/>
                <Route exact path="/outlet" component={Outlet}/>
                <Route exact path="/XL7" component={Catalogue}/>       
            </Switch>
          <Footer />
      {/* <RouterView /> */}
    </>
  );
}

export default App;
