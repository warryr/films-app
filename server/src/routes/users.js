import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/user';

const router = express.Router();

router.post('/register', async (req, res, next) => {
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

export default router;
