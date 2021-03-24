import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {Header, Footer, CabinsContainer} from './components';
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {
  
  const slugs = [
    '/cabins',
    '/users',
    '/reservations'
  ]; 

  return (
      <Provider store={store}>
        <Router>
          <Header slugs={slugs}/>
          <Switch>
              <Route path={slugs[0]}>
                <CabinsContainer />
              </Route>
              <Route path={slugs[1]}>
                <h1>Users</h1>
              </Route>
              <Route path={slugs[2]}>
                <h1>Reservations</h1>
              </Route>
              
              <Route path="/*" render={() => <Redirect to={slugs[0]} />} />
            </Switch>
          <Footer />
        </Router>
      </Provider>
  );
}

export default App;
