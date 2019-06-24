import express from 'express';
import mongoose from 'mongoose';
import { validate } from 'express-jsonschema';
import checkIfUnique from '../middleware/checkIfUnique';

import userSchema from '../schemas/user';
import User from '../models/user';

const router = express.Router();

router.post('/register', validate({ body: userSchema }), checkIfUnique, async (req, res, next) => {
  const user = new User({ _id: mongoose.Types.ObjectId(), ...req.body });
  await user.encryptPassword();

  await user
    .save()
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
