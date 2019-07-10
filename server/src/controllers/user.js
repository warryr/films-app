import mongoose from 'mongoose';
import passport from 'passport';
import User from '../models/user';

export const registerUser = async (req, res, next) => {
  try {
    const user = new User({ _id: mongoose.Types.ObjectId(), ...req.body });
    const savedUser = await user.save();
    res.send({ username: savedUser.username, email: savedUser.email });
  } catch (err) {
    next(err);
  }
};

export const loginUser = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send({ error: 'Invalid username or password' });
    }
    return res.send(user);
  })(req, res, next);
};
