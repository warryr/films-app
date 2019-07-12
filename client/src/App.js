import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import CssBaseline from '@material-ui/core/CssBaseline';

import { history } from './redux/store';
import RegisterContainer from './modules/Register/containers/RegisterContainer';
import LoginContainer from './modules/Login/containers/LoginContainer';
import CatalogContainer from './modules/Catalog/containers/CatalogContainer';
import ErrorContainer from './modules/Error/containers/ErrorContainer';

function App() {
  return (
    <ConnectedRouter history={history} basename={process.env.PUBLIC_URL}>
      <CssBaseline />
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
