const ObjectID = require('mongodb').ObjectID;

module.exports = {
  async up(db) {
    await db.collection('films').insertMany([
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb86a'),
        title: 'Titanic',
        description:
          'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ' +
          'ill-fated R.M.S. Titanic.',

        rating: 5,
        category: ObjectID('5d089d57a07666ef9cfed35f'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb86b'),
        title: 'Green Book',
        description:
          'A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on ' +
          'a tour of venues through the 1960s American South.',

        rating: 5,
        category: ObjectID('5d089d57a07666ef9cfed360'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb86c'),
        title: 'The Great Gatsby',
        description:
          'A writer and wall street trader, Nick, finds himself drawn to the past and lifestyle of his millionaire ' +
          'neighbor, Jay Gatsby.',
        rating: 4,
        category: ObjectID('5d089d57a07666ef9cfed360'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb86d'),
        title: 'The Greatest Showman',
        description:
          'Celebrates the birth of show business and tells of a visionary who rose from nothing to create ' +
          'a spectacle that became a worldwide sensation.',
        rating: 4,
        category: ObjectID('5d089d57a07666ef9cfed360'),
      },
      {
        _id: ObjectID('5d089b1d655a7c1ae81bb86e'),
        title: 'Cheaper by the Dozen',
        description:
          'With his wife doing a book tour, a father of twelve must handle a new job and his unstable brood.',
        rating: 3,
        category: ObjectID('5d089d57a07666ef9cfed35e'),
      },
    ]);
  },

  async down(db) {
    await db.collection('films').deleteMany({});
  },
};
