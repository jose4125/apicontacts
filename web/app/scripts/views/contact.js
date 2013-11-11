/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/editconact',
    'views/deleteconact',
    'views/addconact'
], function ($, _, Backbone, JST, EditContactView, DeleteContactView, AddContactView ) {
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
            this.id = this.model.get( '_id' );      
        },

        editContact: function(){
            console.log( 'edit contact' ); 
            var editModal = new AddContactView( { model: this.model } )
            $( 'body' ).append( editModal.render().el);
            Backbone.history.navigate( this.id + '/edit' );

            $(' #addContact' ).modal( 'show' );


        	$( '#addContact' ).on('hidden.bs.modal', function() {
              console.log('escondeindo');
              this.remove();
              Backbone.history.navigate( '' );
            })
        },

        deleteContact: function(){
            console.log( 'delete contact' );      
            console.log(this.id);
            var thisId = this.id;
            Backbone.history.navigate( thisId + '/delete' );
            var deleteContcatView = new DeleteContactView({model: this.model });
            $( 'body' ).append( deleteContcatView.render().el );
            $( '#deleteContact' ).modal( 'show' );

            $( '#deleteContact' ).on( 'hidden.bs.modal',function(){
                this.remove();
                Backbone.history.navigate( '/' );
            } )
        },

        optionsShow: function( event ){
            console.log( 'option button');             
            var element = $( event.currentTarget );
            $( element ).parents( '.contData' ).toggleClass( 'contDataFin' );
        },

        render: function(){
            console.log('render contact')
            this.$el.attr( 'id', this.id);
            this.$el.html( this.template(this.model.toJSON()) );

            return this;
        }
    });

    return ContactView;
});
