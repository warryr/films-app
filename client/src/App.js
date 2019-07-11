import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './redux/store';
import RegisterContainer from './modules/Register/RegisterContainer';
import LoginContainer from './modules/Login/LoginContainer';
import CatalogContainer from './modules/Catalog/CatalogContainer';
import HeaderContainer from './modules/Header/HeaderContainer';
import ErrorContainer from './modules/Error/ErrorContainer';

function App() {
  return (
    <ConnectedRouter history={history} basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/register' />
        <Route path='/login' />
        <Route path='/error' />
        <Route path='/' component={HeaderContainer} />
      </Switch>
      <Switch>
        <Route path='/register' component={RegisterContainer} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/catalog' component={CatalogContainer} />
        <Route path='/error' component={ErrorContainer} />
        <Redirect to='/login' />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
