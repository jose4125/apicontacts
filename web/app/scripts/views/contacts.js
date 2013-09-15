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
            console.log ( 'col: ', this.collection );
        },
        
        render: function (){
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
