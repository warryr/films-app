import { ExtractJwt } from 'passport-jwt';

export const secret = 'qIfE-Ad6Dbviy1cxit3kUodYBwDwSk1x0aoYCg0tOPIjRJbAg_AQkdIYBGlKYb9OARLMnKAEp4ZDWqdNxHW';

export const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
};
