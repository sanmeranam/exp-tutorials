const mongoose = require('mongoose');
const restaurantsSchema = new mongoose.Schema({
  "address": mongoose.Schema.Types.Mixed,
  "borough": Number,
  "cuisine": String,
  "grades": [
    {
      "date": Date,
      "grade": String,
      "score": Number
    }
  ],
  "name": String,
  "restaurant_id": String
}, {
  strict: true
});

const Restrurant = mongoose.model('restaurants', restaurantsSchema);

module.exports = Restrurant;