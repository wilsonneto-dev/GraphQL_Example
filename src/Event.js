const mongoose = require('mongoose');
const Category = require('./Category');

const EventSchema = new mongoose.Schema({
  title: String,
  text: String,
  location: String,
  date: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});

module.exports = mongoose.model('Event', EventSchema);
