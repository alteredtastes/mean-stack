var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  }
});

userSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;

  if(!this.created_at){
    this.created_at = currentDate;
  }

//hash passwords here

  next();
})

module.exports = mongoose.model('User', userSchema);
