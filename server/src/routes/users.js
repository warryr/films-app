import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import { validate } from 'express-jsonschema';

import registerUserSchema from '../schemas/registerUserSchema';
import loginUserSchema from '../schemas/loginUserSchema';
import User from '../models/user';

const router = express.Router();

router.post('/register', validate({ body: registerUserSchema }), async (req, res, next) => {
  try {
    const user = new User({ _id: mongoose.Types.ObjectId(), ...req.body });
    const savedUser = await user.save();
    res.send({ username: savedUser.username, email: savedUser.email });
  } catch (err) {
    next(err);
  }
});

router.post('/login', validate({ body: loginUserSchema }), (req, res, next) => {
  passport.authenticate('local', { session: false }, function(err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send({ error: 'Invalid username or password' });
    }
    return res.send(user);
  })(req, res, next);
});

router.use((err, req, res, next) => {
  next(err);
});

export default router;
