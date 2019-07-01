import passport from 'passport';
import LocalStrategy from 'passport-local';

import User from '../models/user';

export default function() {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await User.findOne({ username: username });
        if (!user) {
          return done(null, false);
        }

        const passwordValid = await user.verifyPassword(password);
        if (!passwordValid) {
          return done(null, false);
        }

        const passportUser = {
          username: user.username,
          email: user.email,
          token: user.generateJwt(),
        };
        return done(null, passportUser);
      } catch (err) {
        return done(err);
      }
    })
  );
}
