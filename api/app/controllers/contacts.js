var mongoose = require( 'mongoose' ),
  Contact = mongoose.model( 'Contact' );

exports.findAll = function( req, res ){
  Contact.find( function(error, contact){
    if( error ) throw new Error( errr );
    /*res.header('Access-Control-Allow-Origin', '*');*/
    /*res.header('Access-Control-Allow-Credentials', true);*/
    /*res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');*/
    /*res.header('Access-Control-Allow-Headers', 'Content-Type');*/
    res.send( contact );
  } );
};

exports.findById = function( req, res ){
    console.log( req.params );
    /*res.header('Access-Control-Allow-Origin', '*');*/
    /*res.header('Access-Control-Allow-Credentials', true);*/
    /*res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');*/
    /*res.header('Access-Control-Allow-Headers', 'Content-Type');*/
	Contact.findById( req.params.id, function(error, contact){
		if ( error ){
			console.log( 'error al encontrar el contacto', error );
			res.send( {status: 'not found'} );
		}else{
            if( contact == null ) res.send( {status: 'not found'} );
            console.log('contact', contact);
            console.log('contact type', typeof contact);
            console.log('contact name', contact.first_name);
			res.send( contact );
		}
	} )
};

exports.addContact = function( req, res ){

    /*res.header('Access-Control-Allow-Origin', '*');*/
    /*res.header('Access-Control-Allow-Credentials', true);*/
    /*res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');*/
    /*res.header('Access-Control-Allow-Headers', 'Content-Type');*/
    console.log( 'add contacts' );
    console.log( req.body );
    console.log( typeof req.body.model === 'string' );
    if ( typeof req.body.model === 'string' ){
        console.log( 'string' );
        var reqData = JSON.parse( req.body.model );
        var contact = new Contact({
            first_name: reqData.first_name,
            last_name: reqData.last_name,
            cel: reqData.cel,
            phone_eme: reqData.phone_eme,
            rkr_mail: reqData.rkr_mail,
            user_mail: reqData.user_mail,
            skype: reqData.skype,
            birthday: reqData.birthday
        })
    
    }else{
        var contact = new Contact({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            cel: req.body.cel,
            phone_eme: req.body.phone_eme,
            rkr_mail: req.body.rkr_mail,
            user_mail: req.body.user_mail,
            skype: req.body.skype,
            birthday: req.body.birthday
        })
    }
	contact.save( function(error){
		if ( error ){
			console.log( 'cant add the contact', error );
			res.send( {status: 'cant add'} );
		}else{
			console.log( 'added a contact' );
			res.send( contact );
		}
	} )
}

exports.editContact = function( req, res ){
	Contact.findById( req.params.id, function(error, contact){
		contact.first_name = req.body.first_name,
		contact.last_name = req.body.last_name,
		contact.cel = req.body.cel,
		contact.phone_eme = req.body.phone_eme,
		contact.rkr_mail = req.body.rkr_mail,
		contact.user_mail = req.body.user_mail,
		contact.skype = req.body.skype,
		contact.birthday = req.body.birthday

		contact.save( function(error){
			if ( error ){
				console.log( 'error', error );
				res.send( {status: 'cant update'})
			}else{
				console.log( 'updated' );
				res.send( contact );
			}
		} )
	} )
}

exports.deleteContact = function( req, res ){
	Contact.findById( req.params.id, function( error, contact){
		contact.remove( function( error){
			if ( error ){
				console.log( 'cant delete', error );
				res.send( {status: 'cant delete'} );
			}else{
				console.log( 'deleted' );
				res.send( {status: 'deleted'} );
			}
		} )
	} )
}
