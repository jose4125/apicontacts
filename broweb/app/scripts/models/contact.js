module.exports = Backbone.Model.extend({
  defaults: {
    first_name: '',
    last_name: '',
    identification: '',
    cel: '',
    phone_eme: '',
    rkr_mail: '',
    user_mail: '',
    skype: '',
    birthday: ''
  },

  urlRoot: 'http://api.localhost:3000/contacts'
})
