import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';

function App() {
  return (
    <div className='App'>
      <Router basename={process.env.PUBLIC_URL}>
        <Route path='/register' component={RegisterContainer} />
      </Router>
    </div>
  );
}

export default App;
