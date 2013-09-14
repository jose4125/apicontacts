/*global define*/

define([
    'underscore',
    'backbone',
    'models/contact'
], function (_, Backbone, ContactsModel) {
    'use strict';

    var ContactsCollection = Backbone.Collection.extend({
        model: ContactsModel,
        url: 'http://api.localhost:3000/contacts'
    });

    return ContactsCollection;
});