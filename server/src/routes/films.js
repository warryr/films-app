import express from 'express';
import passport from 'passport';

import Film from '../models/film';

const router = express.Router();

router.get('/', async (req, res, next) => {
  passport.authenticate('jwt', { session: false }, async (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send('Invalid token');
    }
    try {
      const searchConditions = req.query.category ? { category: req.query.category } : {};
      const sortConditions = { _id: 1 };

      // get all films or by category
      const docs = await Film.find(
        searchConditions,
        {
          title: 1,
          description: 1,
          avatar: 1,
          category: 1,
        },
        {
          limit: 10,
          sort: sortConditions,
        }
      ).populate({ path: 'category', select: 'title _id' });
      res.send(docs);
    } catch (err) {
      next(err);
    }
  })(req, res, next);
});

router.use((err, req, res, next) => {
  next(err);
});

export default router;
