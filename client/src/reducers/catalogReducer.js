import { handleActions } from 'redux-actions';

const catalogReducer = handleActions(
  {
    CATALOG_SETTINGS_UPDATE: (state, action) => ({
      ...state,
      settings: { ...state.settings, ...action.payload },
    }),
    FILMS_GET_REQUESTED: (state, action) => ({
      ...state,
      films: {
        loading: true,
      },
    }),
    FILMS_GET_SUCCEEDED: (state, action) => ({
      ...state,
      films: {
        loading: false,
        items: action.payload,
      },
    }),
    FILMS_GET_FAILED: (state, action) => ({
      ...state,
      films: {
        loading: false,
        error: action.payload,
      },
    }),
    CATEGORIES_GET_REQUESTED: (state, action) => ({
      ...state,
      categories: {
        loading: true,
      },
    }),
    CATEGORIES_GET_SUCCEEDED: (state, action) => ({
      ...state,
      categories: {
        loading: false,
        items: action.payload,
      },
    }),
    CATEGORIES_GET_FAILED: (state, action) => ({
      ...state,
      categories: {
        loading: false,
        error: action.payload,
      },
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
    settings: {
      category: '',
      sort: 'title',
      order: 1,
    },
  }
);

export default catalogReducer;
