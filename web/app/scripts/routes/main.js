/*global define*/

define([
    'jquery',
    'backbone',
    'collections/contacts',
    'views/contacts'
], function ( $, Backbone, ContactsCollection, ContactsColView ) {
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
                var contactsView = new ContactsColView( {collection: contacts} );
                contactsView.render();
        	});
        	



        }

    });

    
    return MainRouter;
});
