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
