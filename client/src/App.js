import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './redux/store';
import { PublicLayout, ProtectedLayout } from './layouts';
import RegisterContainer from './modules/Register/containers';
import LoginContainer from './modules/Login/containers';
import CatalogContainer from './modules/Catalog/containers';
import ErrorContainer from './modules/Error/containers';

function App() {
  return (
    <ConnectedRouter history={history} basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/register' render={() => <PublicLayout content={RegisterContainer} />} />
        <Route path='/login' render={() => <PublicLayout content={LoginContainer} />} />
        <Route path='/catalog' render={() => <ProtectedLayout content={CatalogContainer} />} />
        <Route path='/error' render={() => <PublicLayout content={ErrorContainer} />} />
        <Redirect to='/login' />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
