import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: mongoose.SchemaTypes.Mixed,
    required: true,
  },
});

const User = mongoose.model('User', userSchema, 'users');

export default User;
