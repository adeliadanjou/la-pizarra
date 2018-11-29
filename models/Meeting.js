const mongoose = require('mongoose');
const { Schema }   = mongoose;

const meetingSchema = new Schema({
  pupil: {type: Schema.Types.ObjectId, ref: 'User'},
  teacher: {type: Schema.Types.ObjectId, ref: 'User'},
  title: String,
  date: Date, 
  hour: String,
  contact: {
    email: String,
    phone: Number
  },
  school: String,
  genre: {type: Number, enum: [0, 1, 2]},
  //subject: {type: new Schema.type.ObjectId, ref: 'Subject'},

  status: {
    pending: {type: Boolean, default: true},
    confirmed: {type: Boolean, default: false},
    done: {type: Boolean, default: false}
  }

});

const Meeting = mongoose.model('Meeting', meetingSchema);
module.exports = Meeting;