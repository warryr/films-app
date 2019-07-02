import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';

import Film from '../models/film';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    console.log(req.query);
    console.log(req.query.category);

    const searchConditions = req.query.category ? { category: req.query.category } : {};
    const sortConditions = { _id: 1 };

    console.log(searchConditions);

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

    console.log(docs);

    res.send(docs);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  next(err);
});

export default router;
