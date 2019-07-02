import express from 'express';
import passport from 'passport';

import FilmCategory from '../models/filmCategory';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const docs = await FilmCategory.find(
      {},
      {
        title: 1,
        description: 1,
      },
      {
        $sort: {
          title: 1,
        },
      }
    );
    res.send(docs);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  next(err);
});

export default router;
