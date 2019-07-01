import { handleActions } from 'redux-actions';

const filmReducer = handleActions(
  {
    FILMS_GET_REQUESTED: (state, action) => ({
      loading: true,
    }),
    FILMS_GET_SUCCEEDED: (state, action) => ({
      loading: false,
      films: action.payload,
    }),
    FILMS_GET_FAILED: (state, action) => ({
      loading: false,
      error: action.payload,
    }),
  },
  {
    loading: false,
    error: '',
    films: [],
    currentFilm: {},
  }
);

export default filmReducer;
