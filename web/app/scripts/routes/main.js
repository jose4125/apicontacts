/*global define*/

define([
    'jquery',
    'backbone',
    'collections/contacts',
    'views/home',
    'views/contacts',
    'views/addconact'
], function ( $, Backbone, ContactsCollection, HomeView, ContactsColView, AddContactView ) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
        	'': 'index',
        	'add': 'addContact'
        },

        index: function(){
        	console.log( 'index route' );
            var contacts = new ContactsCollection();

            var addModal = $( '#addContact' );
            var addHtml = addModal.html();

            if ( addHtml ){
                addModal.modal( 'hide' );
            }else{

            contacts.fetch().then(function(){
                console.log( 'contacts', contacts );
                var contactsView = new ContactsColView( {collection: contacts} );
                var homeView = new HomeView( {collection: contacts} );
                contactsView.render();
                homeView.render().el;
            });
            }



        },

        addContact: function(){
            console.log( 'add contact router' );            
            var contacts = new ContactsCollection();
            contacts.fetch().then(function(){
                console.log( 'contacts', contacts );
                var homeView = new HomeView( {collection: contacts} );
                homeView.addContactModal();
            });
        }

    });

    
    return MainRouter;
});
