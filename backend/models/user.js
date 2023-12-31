const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  adress: String,
})

module.exports = mongoose.model('User', UserSchema)