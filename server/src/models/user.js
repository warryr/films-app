import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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

userSchema.methods.encryptPassword = async function() {
  this.password = await bcrypt.hash(this.password, 10);
};

userSchema.methods.comparePassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema, 'users');

export default User;
