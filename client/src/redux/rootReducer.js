import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import registerReducer from '../modules/Register/reducers/registerReducer';
import loginReducer from '../modules/Login/reducers/loginReducer';
import accountReducer from '../modules/Login/reducers/accountReducer';
import catalogReducer from '../modules/Catalog/reducers/catalogReducer';

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
