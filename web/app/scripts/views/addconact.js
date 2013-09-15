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
    		'click .close': 'removeModal'
    	},

        template: JST['app/scripts/templates/addconact.ejs'],

        removeModal: function(){
        	this.$el.on('hidden.bs.modal', function() {
              console.log('escondeindo');
              this.remove();
            })
        },

        render: function(){
        	
        	this.$el.html( this.template() );
        	return this;
        }
    });

    return AddconactView;
});