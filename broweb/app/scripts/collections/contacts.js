var ContactModel = require('contactModel');

module.exports = Backbone.Collection.extend({
  model: ContactModel,
  url: 'http://api.localhost:3000/contacts'
})
