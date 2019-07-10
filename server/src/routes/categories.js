import express from 'express';
import { getCategories } from '../controllers/category';

const router = express.Router();

router.get('/', getCategories);

router.use((err, req, res, next) => {
  next(err);
});

export default router;
