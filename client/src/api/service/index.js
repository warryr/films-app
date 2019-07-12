import request from './request';

const get = async (url, options) => {
  return await request({ ...options, url, method: 'GET' });
};

const post = async (url, options) => {
  return await request({ ...options, url, method: 'POST' });
};

export default {
  get,
  post,
};
