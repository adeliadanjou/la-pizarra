const mongoose = require('mongoose');
const { Schema }   = mongoose;

const subjectSchema = new Schema({
  title: String,
  description: String,
  // pupils: [{type: new Schema.type.ObjectId, ref: 'User'}],
  // theachers: [{type: new Schema.type.ObjectId, ref: 'User'}],
  imgPath: String,
  type: {type:String}

});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;