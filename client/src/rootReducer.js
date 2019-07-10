import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import validationReducer from './Validation/validationReducer';
import registerReducer from './Register/registerReducer';
import loginReducer from './Login/loginReducer';
import accountReducer from './Login/accountReducer';
import catalogReducer from './Catalog/catalogReducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    validation: validationReducer,
    register: registerReducer,
    login: loginReducer,
    account: accountReducer,
    catalog: catalogReducer,
  });

export default rootReducer;
