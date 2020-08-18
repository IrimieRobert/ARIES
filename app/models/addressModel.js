const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = mongoose.ObjectId;

const addressSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  // user: {
  //   type: ObjectId,
  //   ref: 'User',
  //   required: true
  // }
});

module.exports = mongoose.model('Address', addressSchema, 'addresses');
