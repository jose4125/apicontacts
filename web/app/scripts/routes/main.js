/*global define*/

define([
    'jquery',
    'backbone',
    'models/contact',
    'collections/contacts',
    'views/home',
    'views/contacts',
    'views/contact'
    ], function ( $, Backbone, ContactModel, ContactsCollection, HomeView, ContactsColView, ContactView ) {
      'use strict';

      var MainRouter = Backbone.Router.extend({
        routes: {
          '': 'index',
          'add': 'addContact',
          ':id/delete': 'deleteContact'
        },
        changePage: function( view ){
          /*console.log('path', path);*/

          if( this.currentView ){
            console.log('if');
            this.currentView.undelegateEvents();
          }
          this.currentView = view;
          this.currentView.render();
          /*if( path === 'add' ){*/
          /*console.log('entra id add')*/
          /*this.currentView.addContactModal();*/
          /*}*/
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
               }));
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
              }));

            });
          },

          deleteContact: function( id ){
            console.log( id );
            var self = this;

            var contactModel = new ContactModel({id: id});

            contactModel.fetch({
             success: function( model ){
                        console.log('contactmodel', model);

                        var deleteContactView = new ContactView({ model: model});
                        deleteContactView.deleteContact();

                      }
            });

            var contacts = new ContactsCollection();
            contacts.fetch().then(function(){
              self.changePage(new ContactsColView({
                collection: contacts,
                modelId: id
              }));
              if ( !self.homeView ) {
                self.homeView = new HomeView({collection: contacts});
              }

            });
         }

      });


      return MainRouter;
    });
