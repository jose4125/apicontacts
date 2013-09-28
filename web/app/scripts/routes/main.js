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
            this.contacts = new ContactsCollection();

            var addModal = $( '#addContact' );
            var addHtml = addModal.html();
            var self = this;

            if ( addHtml ){
                addModal.modal( 'hide' );
                addModal.on( 'hidden.bs.modal', function(){
                    this.remove();
                } );

            }else{

            this.contacts.fetch().then(function(){
                console.log( 'contacts', self.contacts );
                var contactsView = new ContactsColView( {collection: self.contacts} );
                contactsView.render();
                self.homeFunc( 'index' );
            });
            }



        },

        homeFunc: function( path ){
            if (! this.homeView) {
                this.homeView = new HomeView( {collection: this.contacts} );
            }
            if ( path !== 'index'){
                this.homeView.addContactModal()
            }
                  
        },

        addContact: function(){
            console.log( 'add contact router' );            
            var self = this;
            var contacts = new ContactsCollection();
            contacts.fetch().then(function(){
                console.log( 'contacts', contacts );
                self.homeFunc();


            });
        }

    });

    
    return MainRouter;
});
