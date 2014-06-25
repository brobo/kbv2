var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beltSchema = new Schema({
  name: String,
  zindex: Number
});

module.exports = mongoose.model('belts', beltSchema);
