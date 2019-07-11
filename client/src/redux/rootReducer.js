import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import validationReducer from '../validation/validationReducer';
import registerReducer from '../components/Register/registerReducer';
import loginReducer from '../components/Login/loginReducer';
import accountReducer from '../components/Login/accountReducer';
import catalogReducer from '../components/Catalog/catalogReducer';

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
