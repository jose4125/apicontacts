/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ContactModel = Backbone.Model.extend({
        defaults: {
        	first_name: '',
          last_name: '',
          cel: '',
          phone_eme: '',
          rkr_mail: '',
          user_mail: '',
          skype: '',
          birthday: ''
        }
    });

    return ContactModel;
});