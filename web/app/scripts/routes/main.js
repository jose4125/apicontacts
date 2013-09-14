/*global define*/

define([
    'jquery',
    'backbone',
    'collections/contacts'
], function ($, Backbone, ContactsCollection) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
        	'': 'index'
        },

        index: function(){
        	console.log( 'index route' );
        	var contacts = new ContactsCollection();
        	contacts.fetch().then(function(){
        		console.log( 'contacts', contacts );
        	});
        	



        }

    });

    
    return MainRouter;
});