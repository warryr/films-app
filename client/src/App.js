import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './reducers/store';
import RegisterContainer from './containers/RegisterContainer';
import LoginContainer from './containers/LoginContainer';
import CatalogContainer from './containers/CatalogContainer';

function App() {
  return (
    <ConnectedRouter history={history} basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/register' component={RegisterContainer} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/films' component={CatalogContainer} />
        <Redirect to='/login' />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
