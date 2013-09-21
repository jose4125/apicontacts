/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var AddconactView = Backbone.View.extend({
    	className: 'modal fade',
    	id: 'addContact',

    	events:{
            'click #btnAdd': 'addButton'
    	},

        template: JST['app/scripts/templates/addconact.ejs'],


        addButton: function( event ){
            console.log( 'add contact' );
            console.log( this.collection );
            var element = this.$el.find( 'form' );

            this.collection.create( {
                first_name:  element.find( '#first_name' ).val(),
                last_name:  element.find( '#last_name' ).val(),
                identification:  element.find( '#identification' ).val(),
                cel:  element.find( '#cel' ).val(),
                phone_eme:  element.find( '#phone_eme' ).val(),
                rkr_mail:  element.find( '#rkr_mail' ).val(),
                user_mail:  element.find( '#user_mail' ).val(),
                skype:  element.find( '#skype' ).val(),
                birthday:  element.find( '#birthday' ).val()
            }, {wait: true} )

            console.log( this.collection );

        },

        render: function(){
        	
        	this.$el.html( this.template() );
        	return this;
        }
    });

    return AddconactView;
});
