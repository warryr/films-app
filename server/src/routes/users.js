import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { validate } from 'express-jsonschema';

import userSchema from '../schemas/user';
import User from '../models/user';

const router = express.Router();

router.post('/register', validate({ body: userSchema }), async (req, res, next) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  User.create(
    {
      _id: mongoose.Types.ObjectId(),
      ...req.body,
    },
    (err, user) => {
      if (err) throw err;
      res.send({
        username: user.username,
        email: user.email,
      });
    }
  );
});

router.use((err, req, res, next) => {
  if (err.name === 'JsonSchemaValidation') {
    const errors = {};
    err.validations.body.map(object => (errors[object.property] = object.messages[0]));
    res.status(400).send(err.validations);
    l;
  } else {
    next(err);
  }
});

export default router;
