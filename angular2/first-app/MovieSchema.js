var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var MovieSchema = new Schema({
  Name: { type: String, required: true, unique: true },
  Director: String,
  Starring: { type: String, required: true },
  Generes:String,
  Country:String,
  Language:String,
  Trailer:{ type: String, required: true },
  Like:Number,
  DisLike:Number,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Mschema = mongoose.model('MoviesData', MovieSchema);

// make this available to our users in our Node applications
module.exports = Mschema
