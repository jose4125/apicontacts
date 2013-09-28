/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'views/contact'
], function ($, _, Backbone, ContactView ) {
    'use strict';

    var ContactsView = Backbone.View.extend({
        el: '#contContacts',
        initialize: function (){
            this.$el.empty();
            this.collection.on( 'add', this.addOne, this);
        },
        
        render: function (){
            console.log( 'render contacts' );
            console.log ( 'col: ', this.collection );
            _.each( this.collection.models, this.addOne, this );

            return this;
        },

        addOne: function( contact ){
            console.log( 'contacto: ', contact)        
            var contactView = new ContactView( {model: contact} );
            this.$el.append( contactView.render().el );
        }
    });

    return ContactsView;
});
