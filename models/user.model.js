const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    required: true,
    minlength: 2,
  },
  coursesInterested: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
