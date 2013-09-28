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
        	'': 'index',
        	'add': 'addContact'
        },
        changePage: function( view, path ){
            console.log('path', path);

            if( this.currentView ){
                console.log('if');
                this.currentView.undelegateEvents();
            }
            this.currentView = view;
            this.currentView.render();
            if( path === 'add' ){
                this.currentView.addContactModal();
            }
        },

        index: function(){
        	console.log( 'index route' );

            var addModal = $( '#addContact' );
            var addHtml = addModal.html();
            var self = this;

            if ( addHtml ){
                addModal.modal( 'hide' );
                addModal.on( 'hidden.bs.modal', function(){
                    this.remove();
                } );

            }
            if ( !this.homeView ) {
                this.homeView = new HomeView();
            }
            var contacts = new ContactsCollection();
                contacts.fetch().then(function(){
                    self.changePage(new ContactsColView({
                        collection: contacts
                    }), '');
                
                });
        },

        addContact: function(){
            console.log( 'add contact router' );            
            
            var self = this; 
            if ( !this.homeView ) {
                this.homeView = new HomeView();
            }
            this.homeView.addContactModal();
                var contacts = new ContactsCollection();
                contacts.fetch().then(function(){
                    self.changePage(new ContactsColView({
                        collection: contacts
                    }), '');
                
                });

            
            
            
            
            
            
            
            
            
            
            
            
            
                /*var self = this;*/

                /*var contacts = new ContactsCollection();*/
                /**//*this.homeFunc( 'index' );*/
                /*contacts.fetch().then(function(){*/
                /*self.changePage(new HomeView({*/
                /*collection: contacts*/
                /*}), 'add');*/

                /*});*/


        }

    });

    
    return MainRouter;
});
