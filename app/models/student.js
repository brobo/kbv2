var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Rank = require('./belt');

var schemaOptions = {
  toObject: {
    virtuals: true
  }, toJSON: {
    virtuals: true
  }
};

var studentSchema = new Schema({
  name: {
    first: String,
    last: String
  },
  dob: {type: Date, default: Date.now},
  ata_number: String,
  notes: String,
  rank: {
    belt: {
      name: String,
      zindex: Number
    },
    decided: Boolean,
    zindex: Number
  }
}, schemaOptions);

studentSchema.virtual('name.full').get(function() {
  return this.name.first + ' ' + this.name.last;
});

studentSchema.virtual('rank.name').get(function() {
  var res = this.rank.belt.name;
  if (this.rank.decided) res += "+";
  return res;
})

module.exports = mongoose.model('students', studentSchema);
