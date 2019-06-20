import mongoose from 'mongoose';

const CONNECTION_URL =
  'mongodb+srv://admin:ZUWg1VATjFoBcJYb@filmsapp-ev73h.mongodb.net/test?retryWrites=true&w=majority';
const DATABASE_NAME = 'films-app-db';

export default function() {
  mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, dbName: DATABASE_NAME });
  const connection = mongoose.connection;

  connection.on('connected', function() {
    console.log('Connected to ' + DATABASE_NAME);
  });

  connection.on('error', function(err) {
    console.log('Connection error: ' + err);
  });

  connection.on('disconnected', function() {
    console.log('Disconnected from ' + DATABASE_NAME);
  });

  process.on('SIGINT', function() {
    mongoose.connection.close(function() {
      console.log('Disconnected due to application termination');
      process.exit(0);
    });
  });
}
