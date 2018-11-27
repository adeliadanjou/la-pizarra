const mongoose = require('mongoose');
const { Schema }   = mongoose;

const meetingSchema = new Schema({
  pupil: {type: new Schema.type.ObjectId, ref: 'User'},
  teacher: {type: new Schema.type.ObjectId, ref: 'User'},
  title: String,
  date: Date, //Repo Sergio 
  hour: TimeRanges,
  contact: {
    email: String,
    phone: Number
  },
  school: String,
  genre: {type: Number, enum: [0, 1, 2]},
  subject: {type: new Schema.type.ObjectId, ref: 'Subject'},
  //Puede qu evaya mejor con un enum, pero....ya veremos
  status: {
    pending: {type: boolean, default: true},
    confirmed: {type: boolean, default: false},
    done: {type: boolean, default: false}
  }

});

const Meeting = mongoose.model('Meeting', meetingSchema);
module.exports = Meeting;