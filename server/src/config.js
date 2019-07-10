import { ExtractJwt } from 'passport-jwt';

export const CONNECTION_URL =
  'mongodb+srv://admin:ZUWg1VATjFoBcJYb@filmsapp-ev73h.mongodb.net/test?retryWrites=true&w=majority';

export const DATABASE_NAME = 'films-app-db';

export const secret = 'qIfE-Ad6Dbviy1cxit3kUodYBwDwSk1x0aoYCg0tOPIjRJbAg_AQkdIYBGlKYb9OARLMnKAEp4ZDWqdNxHW';

export const passportJwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
};
