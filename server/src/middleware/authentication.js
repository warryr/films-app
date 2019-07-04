import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import User, { secret } from '../models/user';

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

  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret,
  };

  passport.use(
    new JwtStrategy(options, async (jwtPayload, done) => {
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
