import { handleActions } from 'redux-actions';

const categoriesReducer = handleActions(
  {
    CATEGORIES_GET_REQUESTED: (state, action) => ({
      loading: true,
    }),
    CATEGORIES_GET_SUCCEEDED: (state, action) => ({
      loading: false,
      items: action.payload,
    }),
    CATEGORIES_GET_FAILED: (state, action) => ({
      loading: false,
      error: action.payload,
    }),
  },
  {
    loading: false,
    error: '',
    items: [],
  }
);

export default categoriesReducer;
