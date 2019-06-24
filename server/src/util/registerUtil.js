import User from '../models/user';

export const checkIfTaken = async query => {
  return await User.find(query)
    .then(docs => !!docs.length)
    .catch(err => console.log(err));
};
