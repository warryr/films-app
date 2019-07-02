import { handleActions } from 'redux-actions';

const catalogReducer = handleActions(
  {
    FILMS_GET_REQUESTED: (state, action) => ({
      films: {
        loading: true,
        query: action.payload,
      },
      categories: { ...state.categories },
    }),
    FILMS_GET_SUCCEEDED: (state, action) => ({
      films: {
        loading: false,
        items: action.payload,
      },
      categories: { ...state.categories },
    }),
    FILMS_GET_FAILED: (state, action) => ({
      films: {
        loading: false,
        error: action.payload,
      },
      categories: { ...state.categories },
    }),
    CATEGORIES_GET_REQUESTED: (state, action) => ({
      categories: {
        loading: true,
      },
      films: { ...state.films },
    }),
    CATEGORIES_GET_SUCCEEDED: (state, action) => ({
      categories: {
        loading: false,
        items: action.payload,
      },
      films: { ...state.films },
    }),
    CATEGORIES_GET_FAILED: (state, action) => ({
      categories: {
        loading: false,
        error: action.payload,
      },
      films: { ...state.films },
    }),
  },
  {
    films: {
      loading: false,
      query: '',
      error: '',
      items: [],
    },
    categories: {
      loading: false,
      error: '',
      items: [],
    },
  }
);

export default catalogReducer;
