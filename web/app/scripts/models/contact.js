/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';
    Backbone.Model.prototype.idAttribute = '_id';

    var ContactModel = Backbone.Model.extend({

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
    });

    return ContactModel;
});
