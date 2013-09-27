/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/contact'
], function ($, _, Backbone, JST, ContactModel) {
    'use strict';

    var AddconactView = Backbone.View.extend({
    	className: 'modal fade',
    	id: 'deleteContact',

    	events:{
            'click #btnAdd': 'addButton'
    	},

        template: JST['app/scripts/templates/addconact.ejs'],


        addButton: function( event ){
            console.log( 'add contact' );
            console.log( this.collection );
            var element = this.$el.find( 'form' );
            /*var contactModel = new ContactModel();*/

            /*var newContact = {*/
            /*first_name:  element.find( '#first_name' ).val(),*/
            /*last_name:  element.find( '#last_name' ).val(),*/
            /*identification:  element.find( '#identification' ).val(),*/
            /*cel:  element.find( '#cel' ).val(),*/
            /*phone_eme:  element.find( '#phone_eme' ).val(),*/
            /*rkr_mail:  element.find( '#rkr_mail' ).val(),*/
            /*user_mail:  element.find( '#user_mail' ).val(),*/
            /*skype:  element.find( '#skype' ).val(),*/
            /*birthday:  element.find( '#birthday' ).val()*/
            /*}*/

            Backbone.emulateJSON = true
            Backbone.emulateHTTP = true;
            self = this;
            this.collection.create ({
                first_name:  element.find( '#first_name' ).val(),
                last_name:  element.find( '#last_name' ).val(),
                identification:  element.find( '#identification' ).val(),
                cel:  element.find( '#cel' ).val(),
                phone_eme:  element.find( '#phone_eme' ).val(),
                rkr_mail:  element.find( '#rkr_mail' ).val(),
                user_mail:  element.find( '#user_mail' ).val(),
                skype:  element.find( '#skype' ).val(),
                birthday:  element.find( '#birthday' ).val()
            }, { success: function(model, res){
                console.log('success')
                console.log('model', model)
                console.log('res', res)
                self.$el.modal( 'hide' );
            },wait: true})

            /*contactModel.save( newContact, {*/
            /*success: function( model, res ){*/
            /*console.log('success');*/
            /*console.log(model);*/
            /*console.log(response);*/
            /*},*/
            /*error: function(model, response) {*/
            /*console.log(model);*/
            /*},*/
            /*wait: true*/
            /*} );*/


        },

        render: function(){
        	
        	this.$el.html( this.template() );
        	return this;
        }
    });

    return AddconactView;
});
