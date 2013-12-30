var ContactsCollection = require( 'contactsCollection' );
var ContactsCollectionView = require( 'contactsCollectionView' );

module.exports = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  changePage: function ( view ){
    if ( this.currentView ){
      this.currentView.undelegateEvents();
    }

    this.currentView = view;
    this.currentView.render();
  },

  index: function (){
    console.log( 'index route' );
    var contactsCollection = new ContactsCollection(),
        self = this;

    contactsCollection.fetch({
      success: function( data ){
        self.changePage( new ContactsCollectionView( {collection: contactsCollection, el: $( '#contContacts' )} ));
     }
    })
  }
})

