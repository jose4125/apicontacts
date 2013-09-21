// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Contact = new Schema({
  first_name: String,
  last_name: String,
  identification: Number,
  cel: Number,
  phone_eme: Number,
  rkr_mail: String,
  user_mail: String,
  skype: String,
  birthday: Date
});

Contact.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Contact', Contact);
