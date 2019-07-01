import mongoose from 'mongoose';

const filmSchema = new mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  avatar: {
    type: mongoose.SchemaTypes.Mixed,
    required: true,
  },
  gallery: {
    type: [
      {
        type: mongoose.SchemaTypes.Mixed,
      },
    ],
    required: true,
  },
  rating: {
    type: mongoose.SchemaTypes.Number,
    required: false,
    min: 0,
    max: 5,
  },
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'FilmCategory',
    required: false,
  },
});

const Film = mongoose.model('Film', filmSchema, 'films');

export default Film;
