import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './reducers/store';
import RegisterContainer from './containers/RegisterContainer';
import LoginContainer from './containers/LoginContainer';
import FilmsContainer from './containers/FilmsContainer';

function App() {
  return (
    <ConnectedRouter history={history} basename={process.env.PUBLIC_URL}>
      <Route path='/register' component={RegisterContainer} />
      <Route path='/login' component={LoginContainer} />
      <Route path='/films' component={FilmsContainer} />
    </ConnectedRouter>
  );
}

export default App;
