/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'views/addconact'
], function ($, _, Backbone, AddContactView) {
    'use strict';

    var HomeView = Backbone.View.extend({
        el: 'body',
        
        events: {
        	'click #btnAddContact': 'addContactModal'
        },

        addContactModal: function( event ){
        	event.preventDefault();
        	var addModal = new AddContactView( {collection: this.collection} );
        	this.$el.append( addModal.render().el );
        }
    });

    return HomeView;
});
