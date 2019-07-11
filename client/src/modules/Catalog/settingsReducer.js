import { handleActions } from 'redux-actions';

const settingsReducer = handleActions(
  {
    CATALOG_SETTINGS_UPDATE: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  {
    page: 1,
    sort: 'title',
    order: 1,
  }
);

export default settingsReducer;
