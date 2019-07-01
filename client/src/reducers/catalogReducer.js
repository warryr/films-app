import { handleActions } from 'redux-actions';

const filmReducer = handleActions(
  {
    CATALOG_GET_REQUESTED: (state, action) => ({
      loading: true,
    }),
    CATALOG_GET_SUCCEEDED: (state, action) => ({
      loading: false,
      films: action.payload,
    }),
    CATALOG_GET_FAILED: (state, action) => ({
      loading: false,
      error: action.payload,
    }),
  },
  {
    loading: false,
    error: '',
    films: [],
  }
);

export default filmReducer;
