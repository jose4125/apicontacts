module.exports = Backbone.View.extend({
  tagName: 'article',
  className: 'col-md-4',
  render: function(){
    console.log( 'sigle contact view');
    return this;
  }
})
