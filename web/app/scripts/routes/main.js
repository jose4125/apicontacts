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
            var homeView = new HomeView(),
                contacts = new ContactsCollection();

            homeView.render().el;

        	contacts.fetch().then(function(){
        		console.log( 'contacts', contacts );
                var contactsView = new ContactsColView( {collection: contacts} );
                contactsView.render();
        	});
        	



        }

    });

    
    return MainRouter;
});
