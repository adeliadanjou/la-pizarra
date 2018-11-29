const mongoose = require('mongoose');
const { Schema }   = mongoose;

const schoolSchema = new Schema({
  title: String,
  latitude: Number,
  longitude: Number,
  link: String
});

const School = mongoose.model('School', schoolSchema);
module.exports = School;