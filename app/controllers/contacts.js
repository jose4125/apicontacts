/*var mongoose = require('mongoose'),*/
/*Article = mongoose.model('Article');*/

var models = require('../models/contact');
exports.index = function(req, res){

    var cont = models.findAll();
    console.log( 'cont ', cont );

    res.send( {
        title: 'Generator-Express MVC',
        articles: 'hola'
    } );
};
exports.find = function( req, res ){
    console.log( 'params ', req.params.id );
    var id =  req.params.id;
    models.find( id );
}
