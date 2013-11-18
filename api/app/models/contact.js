// Example model

var mongoose = require('mongoose')
//require('../schema/contact.js');

//var mongoose = require( 'mongoose' ),
var Contact = mongoose.model( 'Contact', Contact );


exports.findAll = function( callback ){
  Contact.find( function(error, contact){
    if( error ) throw new Error( errr );
    /*res.header('Access-Control-Allow-Origin', '*');*/
    /*res.header('Access-Control-Allow-Credentials', true);*/
    /*res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');*/
    /*res.header('Access-Control-Allow-Headers', 'Content-Type');*/
    for (var i = 0; i<contact.length; i++){
            //var p = JSON.parse(cont)
            console.log( contact[i].first_name );
    }
    callback( contact );
  } );
};

exports.findById = function( id, callback ){
    console.log( id );
    /*res.header('Access-Control-Allow-Origin', '*');*/
    /*res.header('Access-Control-Allow-Credentials', true);*/
    /*res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');*/
    /*res.header('Access-Control-Allow-Headers', 'Content-Type');*/
	Contact.findById( id, function(error, contact){
		if ( error ){
			console.log( 'error al encontrar el contacto', error );
			callback( {status: 'not found'} );
		}else{
            if( contact === null ) res.send( {status: 'not found'} );
            console.log('contact', contact);
            console.log('contact type', typeof contact);
            console.log('contact name', contact.first_name);
			callback( contact );
		}
	} )
};

exports.addContact = function( req, callback ){

    /*res.header('Access-Control-Allow-Origin', '*');*/
    /*res.header('Access-Control-Allow-Credentials', true);*/
    /*res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');*/
    /*res.header('Access-Control-Allow-Headers', 'Content-Type');*/
    console.log( 'add contacts' );
    /*console.log( req.body );*/
    /*console.log( typeof req.body.model === 'string' );*/
    /*if ( typeof req.body.model === 'string' ){*/
    /*console.log( 'string' );*/
    /*var reqData = JSON.parse( req.body.model );*/
    /*var contact = new Contact({*/
    /*first_name: reqData.first_name,*/
    /*last_name: reqData.last_name,*/
    /*cel: reqData.cel,*/
    /*phone_eme: reqData.phone_eme,*/
    /*rkr_mail: reqData.rkr_mail,*/
    /*user_mail: reqData.user_mail,*/
    /*skype: reqData.skype,*/
    /*birthday: reqData.birthday*/
    /*})*/

    /*}else{*/
    /*var contact = new Contact({*/
    /*first_name: req.body.first_name,*/
    /*last_name: req.body.last_name,*/
    /*cel: req.body.cel,*/
    /*phone_eme: req.body.phone_eme,*/
    /*rkr_mail: req.body.rkr_mail,*/
    /*user_mail: req.body.user_mail,*/
    /*skype: req.body.skype,*/
    /*birthday: req.body.birthday*/
    /*})*/
    /*}*/
    console.log( 'req', req );
    var contact = new Contact( req )
	contact.save( function(error){
		if ( error ){
			console.log( 'cant add the contact', error );
			callback( {status: 'cant add'} );
		}else{
			console.log( 'added a contact' );
			callback( contact );
		}
	} )
}

exports.editContact = function( id, req, callback ){
	Contact.findById( id, function(error, contact){
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
				callback( {status: 'cant update'})
			}else{
				console.log( 'updated' );
				callback( null, contact );
			}
		} )
	} )
}

exports.deleteContact = function( id, callback ){
	Contact.findById( id, function( error, contact){
		contact.remove( function( error){
			if ( error ){
				console.log( 'cant delete', error );
				callback( {status: 'cant delete'} );
			}else{
				console.log( 'deleted' );
				callback( {status: 'deleted'} );
			}
		} )
	} )
}
