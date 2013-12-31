var JST = require( 'templates' );

module.exports = Backbone.View.extend({
  template: JST['app/scripts/templates/contact.ejs'],

  tagName: 'article',

  className: 'col-md-4',

  render: function(){
    console.log( 'sigle contact view');
    this.$el.html( this.template(this.model.toJSON()) );
    return this;
  }
})
