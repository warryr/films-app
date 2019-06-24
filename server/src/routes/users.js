import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { validate } from 'express-jsonschema';

import userSchema from '../schemas/user';
import User from '../models/user';

const router = express.Router();

router.post('/register', validate({ body: userSchema }), async (req, res, next) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  await User.create({ _id: mongoose.Types.ObjectId(), ...req.body })
    .then(user => res.send({ username: user.username, email: user.email }))
    .catch(err => {
      if (err.name === 'ValidationError') {
        res.status(422).send(err.errors);
      } else {
        res.status(500).json(err);
      }
    });
});

router.use((err, req, res, next) => {
  if (err.name === 'JsonSchemaValidation') {
    const errors = {};
    err.validations.body.map(object => (errors[object.property] = object.messages[0]));
    res.status(400).send(err.validations);
  } else {
    next(err);
  }
});

export default router;
