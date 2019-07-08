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
      const pageSize = 6;
      const page = req.query.page;

      const collectionSize = await Film.countDocuments({});
      const hasMore = collectionSize > pageSize * page;

      const searchConditions = {};
      req.query.category ? (searchConditions.category = req.query.category) : undefined;

      const sortConditions = {
        [req.query.sort]: parseInt(req.query.order),
        _id: parseInt(req.query.order),
      };

      const docs = await Film.find(
        searchConditions,
        {
          title: 1,
          description: 1,
          year: 1,
          rating: 1,
          category: 1,
        },
        {
          skip: pageSize * (page - 1),
          limit: pageSize,
          sort: sortConditions,
        }
      ).populate({ path: 'category', select: 'title _id' });

      res.send({ hasMore, films: docs });
    } catch (err) {
      next(err);
    }
  })(req, res, next);
});

router.use((err, req, res, next) => {
  next(err);
});

export default router;
