import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import { encryptData } from '../util/encryption';
import { secret } from '../config';

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

userSchema.methods.verifyPassword = async function(password) {
  return this.password === (await encryptData(password));
};

userSchema.methods.generateJwt = function() {
  return jwt.sign(
    {
      id: this._id,
    },
    secret
  );
};

const User = mongoose.model('User', userSchema, 'users');

export default User;
