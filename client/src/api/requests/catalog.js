import service from '../service';

const getCategories = async token => {
  return await service.get('/categories', {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });
};

const getFilms = async (token, query) => {
  return await service.get(`/films${query}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });
};

export default {
  getCategories,
  getFilms,
};
