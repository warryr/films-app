import express from 'express';
import { getFilms } from '../controllers/film';

const router = express.Router();

router.get('/', getFilms);

router.use((err, req, res, next) => {
  next(err);
});

export default router;
