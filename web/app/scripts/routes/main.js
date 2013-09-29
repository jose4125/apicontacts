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

        removeModal: function(){
                     
            var addModal = $( '#addContact' );
            var deleteModal = $( '#deleteContact' );
            var modalOpen;

            if ( addModal ){
                modalOpen = addModal;
            }else if( deleteModal ){
                modalOpen = deleteModal;
            
            }
            modalOpen.modal( 'hide' );
            modalOpen.on( 'hidden.bs.modal', function(){
                this.remove();
            } );
        },

        index: function(){
        	console.log( 'index route' );

            var self = this;

            this.removeModal();

            var contacts = new ContactsCollection();
                contacts.fetch().then(function(){
                    self.changePage(new ContactsColView({
                        collection: contacts
                    }), '');
                    if ( !self.homeView ) {
                        self.homeView = new HomeView({collection: contacts});
                    }
                
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
