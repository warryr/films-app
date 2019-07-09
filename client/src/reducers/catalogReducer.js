import { handleActions } from 'redux-actions';

const catalogReducer = handleActions(
  {
    CATALOG_SETTINGS_UPDATE: (state, action) => ({
      ...state,
      films: {
        ...state.films,
        items: action.payload.page === 1 ? [] : [...state.films.items],
      },
      settings: { ...state.settings, ...action.payload },
    }),
    HAS_MORE_UPDATE: (state, action) => ({
      ...state,
      hasMore: action.payload,
    }),
    FILMS_GET_REQUESTED: (state, action) => ({
      ...state,
      films: {
        ...(state.films || []),
        loading: true,
      },
    }),
    FILMS_GET_SUCCEEDED: (state, action) => ({
      ...state,
      error: '',
      films: {
        loading: false,
        items: state.films.items ? [...state.films.items, ...action.payload] : action.payload,
      },
    }),
    FILMS_GET_FAILED: (state, action) => ({
      ...state,
      error: action.payload,
      films: {
        loading: false,
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
      error: '',
      categories: {
        loading: false,
        items: action.payload,
      },
    }),
    CATEGORIES_GET_FAILED: (state, action) => ({
      ...state,
      error: action.payload,
      categories: {
        loading: false,
      },
    }),
  },
  {
    hasMore: true,
    error: '',
    films: {
      loading: false,
      items: [],
    },
    categories: {
      loading: false,
      items: [],
    },
    settings: {
      page: 1,
      sort: 'title',
      order: 1,
    },
  }
);

export default catalogReducer;
