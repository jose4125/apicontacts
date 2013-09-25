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
        events: {
            'click .btnOptions': 'optionsShow',
            'click .btn-edit': 'editContact',
            'click .btn-delete': 'deleteContact'
        },

        initialize: function(){
            console.log( 'model: ', this.model );    
            this.name = this.model.get( 'first_name' );      
        },

        editContact: function(){
            console.log( 'edit contact' );      
            console.log(this.name);      
        },

        deleteContact: function(){
            console.log( 'delete contact' );      
            console.log(this.name);      
        },

        optionsShow: function( event ){
            console.log( 'option button');             
            var element = $( event.currentTarget );
            $( element ).parents( '.contData' ).toggleClass( 'contDataFin' );
        },

        render: function(){
            this.$el.html( this.template(this.model.toJSON()) );

            return this;
        }
    });

    return ContactView;
});
