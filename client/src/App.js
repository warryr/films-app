import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './reducers/store';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';

function App() {
  return (
    <ConnectedRouter history={history} basename={process.env.PUBLIC_URL}>
      <Route path='/login' component={LoginContainer} />
      <Route path='/register' component={RegisterContainer} />
    </ConnectedRouter>
  );
}

export default App;
