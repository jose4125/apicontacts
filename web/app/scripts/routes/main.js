/*global define*/

define([
    'jquery',
    'backbone',
    'collections/contacts',
    'views/home',
    'views/contacts'
], function ( $, Backbone, ContactsCollection, HomeView, ContactsColView ) {
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
                var homeView = new HomeView( {collection: contacts} );
                contactsView.render();
                homeView.render().el;
        	});
        	



        }

    });

    
    return MainRouter;
});
