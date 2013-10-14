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

        template: JST['app/scripts/templates/deleteconact.ejs'],

        initialize: function(){
            var modelId = this.model.get( '_id' );
            this.modelContact = new ContactModel( {id: modelId} );
            this.listenTo(this.modelContact, 'destroy', this.unrender);
        },

    	events:{
            'click #btnDelete': 'deleteButton'
    	},

        deleteButton: function( event ){
            var self = this;
            this.modelContact.fetch().then(function(){
            
                console.log( 'delete contact', self.modelContact.toJSON() );
                self.modelContact.destroy();


            });

        },

        unrender: function(){
            console.log( 'unrender contact', this.model );
            var contactId = '#' + this.model.get( '_id' );
            $( '#deleteContact' ).modal( 'hide' );

            $( contactId ).remove();        
        },

        render: function(){
        	
        	this.$el.html( this.template(this.model.toJSON()) );
        	return this;
        }
    });

    return AddconactView;
});
