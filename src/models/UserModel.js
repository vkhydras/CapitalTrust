import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  description: String,
  amount: Number,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  balance: { type: Number, default: 0 },
  transactionHistory: [transactionSchema],
});

const User = mongoose.model('User', userSchema, 'capitalTrust'); 

export default User;
