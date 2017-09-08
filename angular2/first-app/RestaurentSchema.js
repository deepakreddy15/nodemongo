var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var RestaurentSchema = new Schema({
  Email: { type: String, required: true, unique: true },
  FoodType: String,
  Feedback: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Rschema = mongoose.model('Restaurent', RestaurentSchema);

// make this available to our users in our Node applications
module.exports = Rschema
