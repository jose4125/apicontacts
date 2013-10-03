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
        	'add': 'addContact',
        	':id/delete': 'deleteContact'
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
            console.log( addModal );
            console.log( deleteModal );
            var modalOpen;

            if ( addModal.html() ){
                console.log('hide add modal')
                modalOpen = addModal;
            }else if( deleteModal.html() ){
                console.log('hide del modal')
                modalOpen = deleteModal;
            
            }
            if ( modalOpen != undefined ){
                modalOpen.modal( 'hide' );
                modalOpen.on( 'hidden.bs.modal', function(){
                    this.remove();
                } );
            }
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
        },

        deleteContact: function( id ){
            console.log( id );
            var deleteId = '#' + id;
            $( deleteId + ' .btnOptions').trigger('click');
            $( deleteId + ' .btn-delete').trigger('click');
        }

    });

    
    return MainRouter;
});
