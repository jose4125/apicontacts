/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'views/addconact',
    'vendor/vent',
    'views/editconact',
], function ($, _, Backbone, AddContactView, Vent, EditContactView) {
    'use strict';

    var HomeView = Backbone.View.extend({
        el: 'body',
        
        initialize: function(){
            this.listenTo( Vent, 'contact:edit', this.editContact );
        },

        events: {
        	'click #btnAddContact': 'addContactModal'
        },

        editContact: function( model ){
            console.log('vent edit');             
            console.log( 'edit contact' ); 
            this.id = model.get( '_id' );      
            var editModal = new EditContactView( { modelId: this.id } )
            $( 'body' ).append( editModal.render().el);
            Backbone.history.navigate( this.id + '/edit' );

            $(' #addContact' ).modal( 'show' );


        	$( '#addContact' ).on('hidden.bs.modal', function() {
              console.log('escondeindo');
              this.remove();
              Backbone.history.navigate( '' );
            })
        },


        addContactModal: function( event ){
                             /*event.preventDefault();*/
            console.log('hola');
            Backbone.history.navigate( 'add' );
            var addModal = new AddContactView( {collection: this.collection} );
            this.$el.append( addModal.render().el );
            $(' #addContact' ).modal( 'show' );


        	$( '#addContact' ).on('hidden.bs.modal', function() {
              console.log('escondeindo');
              this.remove();
              Backbone.history.navigate( '' );
            })

        },

        render: function(){
            return this;
        }
    });

    return HomeView;
});
