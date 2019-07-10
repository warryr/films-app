import express from 'express';
import { validate } from 'express-jsonschema';

import registerUserSchema from '../schemas/registerUserSchema';
import loginUserSchema from '../schemas/loginUserSchema';
import { registerUser, loginUser } from '../controllers/user';

const router = express.Router();

router.post('/register', validate({ body: registerUserSchema }), registerUser);
router.post('/login', validate({ body: loginUserSchema }), loginUser);

router.use((err, req, res, next) => {
  next(err);
});

export default router;
