import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';

import Film from '../models/film';
import FilmCategory from '../models/filmCategory';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    // get all films or by category
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  next(err);
});

export default router;
