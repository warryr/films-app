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
  year: {
    type: Number,
    required: true,
  },
  rating: {
    type: mongoose.SchemaTypes.Number,
    required: false,
    min: 0,
    max: 10,
  },
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'FilmCategory',
    required: false,
  },
});

const Film = mongoose.model('Film', filmSchema, 'films');

export default Film;
