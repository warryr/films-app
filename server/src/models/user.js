import mongoose from 'mongoose';
import { encryptData } from '../util/encryption';

const userSchema = new mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  username: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  password: {
    type: mongoose.SchemaTypes.Mixed,
    required: true,
  },
});

userSchema.pre('save', async function() {
  this.password = await encryptData(this.password);
});

const User = mongoose.model('User', userSchema, 'users');

export default User;
