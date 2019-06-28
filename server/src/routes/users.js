import express from 'express';
import mongoose from 'mongoose';
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

router.use((err, req, res, next) => {
  next(err);
});

export default router;
