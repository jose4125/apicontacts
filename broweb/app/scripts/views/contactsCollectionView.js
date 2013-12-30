var ContactView = require( 'contactSingleView');

module.exports = Backbone.View.extend({

  initialize: function(){
    this.listenTo( this.collection, 'add', this.addOne);
  },

  render: function (){
    console.log('contacts collectin view');
    console.log( this.collection );
    _.each( this.collection.models, this.addOne, this);
    return this;
  },

  addOne: function ( model ){
    var contactView = new ContactView( {model: model} );
    this.$el.append( contactView.render().el );

  }
})
