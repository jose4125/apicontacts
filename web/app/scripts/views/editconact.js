/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/contact'
], function ($, _, Backbone, JST, ContactModel) {
    'use strict';

    var EditConactView = Backbone.View.extend({
    	className: 'modal fade',
    	id: 'addContact',

    	events:{
            'click #btnAdd': 'updateButton'
    	},

        template: JST['app/scripts/templates/editconact.ejs'],

      initialize: function(){
      
          /*this.listenTo( this.userUpdate, 'change', this.updateContact );*/
      },

        updateContact: function(){
            console.log( 'change model' );
        },

        updateButton: function( event ){
            console.log( 'add contact' );
            var element = this.$el.find( 'form' );
            /*var contactModel = new ContactModel();*/

            this.userUpdate.set( {
              first_name:  element.find( '#first_name' ).val(),
              last_name:  element.find( '#last_name' ).val(),
              identification:  element.find( '#identification' ).val(),
              cel:  element.find( '#cel' ).val(),
              phone_eme:  element.find( '#phone_eme' ).val(),
              rkr_mail:  element.find( '#rkr_mail' ).val(),
              user_mail:  element.find( '#user_mail' ).val(),
              skype:  element.find( '#skype' ).val(),
              birthday:  element.find( '#birthday' ).val()
            } );

            self = this;

            this.userUpdate.save( {}, {
                success: function( model ){
                    console.log('success');
                    console.log(model);
                    self.$el.modal( 'hide' );
                },
              error: function(model, response) {
                       console.log(model);
                     }
            } );


        },

        render: function(){
        	var self= this;
          this.userUpdate = new ContactModel({ id: this.options.modelId});

          this.userUpdate.fetch({
            success: function( model, res){
              console.log('model', model);
              console.log('res', res );
              console.log('model update', model.toJSON() );
              self.$el.html( self.template( model.toJSON() ) );
                     
            }
          });
        	return this;
        }
    });

    return EditConactView;
});
