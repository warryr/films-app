import passport from 'passport';
import FilmCategory from '../models/filmCategory';

export const getCategories = async (req, res, next) => {
  passport.authenticate('jwt', { session: false }, async (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send('Invalid token');
    }
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
  })(req, res, next);
};
