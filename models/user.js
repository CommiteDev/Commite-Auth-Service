const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  userid: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
})

module.exports = mongoose.models.Customer || mongoose.model('User', UserSchema);


