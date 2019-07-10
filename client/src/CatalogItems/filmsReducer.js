import { handleActions } from 'redux-actions';

const defaultState = {
  hasMore: true,
  loading: false,
  error: '',
  items: [],
};

const itemsReducer = handleActions(
  {
    HAS_MORE_UPDATE: (state, action) => ({
      ...state,
      hasMore: action.payload,
    }),
    FILMS_GET_REQUESTED: (state, action) => ({
      ...state,
      loading: true,
      error: '',
      items: state.items || [],
    }),
    FILMS_GET_SUCCEEDED: (state, action) => ({
      ...state,
      loading: false,
      error: '',
      items: state.items ? [...state.items, ...action.payload] : action.payload,
    }),
    FILMS_GET_FAILED: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    FILMS_CLEAN: (state, action) => defaultState,
  },
  defaultState
);

export default itemsReducer;
