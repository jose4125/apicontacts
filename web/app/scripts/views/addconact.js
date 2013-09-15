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

        template: JST['app/scripts/templates/addconact.ejs'],

        render: function(){
        	
        	this.$el.html( this.template() );
        	return this;
        }
    });

    return AddconactView;
});