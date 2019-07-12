import service from '../service';

const getCategories = async token => {
  return await service.get('/categories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getFilms = async (token, query) => {
  return await service.get(`/films${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default {
  getCategories,
  getFilms,
};
