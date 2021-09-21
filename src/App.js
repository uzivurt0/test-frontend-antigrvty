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
                <Route path={process.env.PUBLIC_URL + '/'} exact component ={Dealer}/>
                <Route path={process.env.PUBLIC_URL + 'outlet'} component={Outlet}/>
                <Route path={process.env.PUBLIC_URL + 'XL7'} component={Catalogue}/>       
            </Switch>
          <Footer />
      {/* <RouterView /> */}
    </>
  );
}

export default App;
