import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as JwtStrategy } from 'passport-jwt';

import { passportJwtOptions } from '../config';
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

  passport.use(
    new JwtStrategy(passportJwtOptions, async (jwtPayload, done) => {
      try {
        const user = await User.findById(jwtPayload.id);
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );
}
