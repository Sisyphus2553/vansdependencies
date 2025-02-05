const mongoose = require('mongoose');

const DB_URI = 'mongodb+srv://user123:123@devjam1.fe87g.mongodb.net/';

mongoose.connect(DB_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas successfully');
  })
  .catch((err) => {
    console.error('Connection error:', err);
  });

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post',
    },
  ],
});

module.exports = mongoose.model('user', userSchema);
