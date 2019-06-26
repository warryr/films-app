import express from 'express';
import mongoose from 'mongoose';
import { validate } from 'express-jsonschema';

import userSchema from '../schemas/user';
import User from '../models/user';

const router = express.Router();

router.post('/register', validate({ body: userSchema }), async (req, res, next) => {
  const user = new User({ _id: mongoose.Types.ObjectId(), ...req.body });
  await user.encryptPassword();

  await user
    .save()
    .then(user => res.send({ username: user.username, email: user.email }))
    .catch(err => {
      switch (err.name) {
        case 'ValidationError': {
          const errors = {};
          for (let field in err.errors) {
            errors[field] = err.errors[field].message;
          }
          res.status(422).send(errors);
          break;
        }
        case 'MongoError': {
          const message = err.errmsg;
          res.status(409).send(message);
          break;
        }
        default: {
          res.status(500).json(err);
        }
      }
    });
});

router.use((err, req, res, next) => {
  if (err.name === 'JsonSchemaValidation') {
    const errors = {};
    err.validations.body.map(object => (errors[object.property] = object.messages[0]));
    res.status(400).send(errors);
  } else {
    next(err);
  }
});

export default router;
