import { checkIfTaken } from '../util/registerUtil';

const checkIfUnique = async (req, res, next) => {
  if (await checkIfTaken({ username: req.body.username })) {
    res.status(409).json({ username: 'Username is taken' });
  } else if (await checkIfTaken({ email: req.body.email })) {
    res.status(409).json({ email: 'Email address is already used for another account' });
  } else {
    next();
  }
};

export default checkIfUnique;
