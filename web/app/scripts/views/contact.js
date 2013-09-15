/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ContactView = Backbone.View.extend({
        template: JST['app/scripts/templates/contact.ejs'],
        //template: _.template( $( '#contactTemplate' ).html() ),
        tagName: 'article',
        className: 'col-md-4',

        initialize: function(){
            console.log( 'model: ', this.model );    
        },

        render: function(){
            this.$el.html( this.template(this.model.toJSON()) );

            return this;
        }
    });

    return ContactView;
});
