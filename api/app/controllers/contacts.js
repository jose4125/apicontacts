var mongoose = require( 'mongoose' ),
  Contact = mongoose.model( 'Contact' );

exports.findAll = function( req, res ){
  Contact.find( function(error, contact){
    if( error ) throw new Error( errr );
    res.send( contact );
  } );
};

exports.findById = function( req, res ){
	Contact.findById( req.params.id, function(error, contact){
		if ( error ){
			console.log( 'error al encontrar el contacto' );
			res.send( {status: 'not found'} );
		}else{
			res.send( contact );
		}
	} )
};