const config = {
  mongodb: {
    url: 'mongodb+srv://admin:ZUWg1VATjFoBcJYb@filmsapp-ev73h.mongodb.net/test?retryWrites=true&w=majority',
    databaseName: 'films-app-db',

    options: {
      useNewUrlParser: true,
    },
  },

  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog',
};

module.exports = config;
