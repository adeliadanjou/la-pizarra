const mongoose = require('mongoose');
const { Schema }   = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  surname: String,
  latitude: Number,
  longitude: Number,
  description: {type:String, default: 'Falta la descripción, <br>Este profesor es un vago <br> No lo elijas!! '},
  genre: {type: Number, enum: [0, 1, 2]},
  role: {type: String, enum: ['SOY ALUMNO', 'SOY PROFE', 'ADMON']},
  subjects: Array,
  meetings: Array, //Array de Objetoeventos que aun no hay creados
  school: String, //CON EL JSON
  contact: {
    email: String,
    phone: Number
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
