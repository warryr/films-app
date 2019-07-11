import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import registerReducer from '../modules/Register/registerReducer';
import loginReducer from '../modules/Login/loginReducer';
import accountReducer from '../modules/Login/accountReducer';
import catalogReducer from '../modules/Catalog/catalogReducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    register: registerReducer,
    login: loginReducer,
    account: accountReducer,
    catalog: catalogReducer,
  });

export default rootReducer;
