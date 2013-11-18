var mongoose = require( 'mongoose' ),
  //Contact = mongoose.model( 'Contact' );
    Contact = require( '../models/contact' )

exports.findAll = function( req, res  ){
  Contact.findAll(function(contact){
    res.send( contact )
  });
};

exports.findById = function( req, res ){
    console.log( req.params );
	Contact.findById( req.params.id, function( contact ){
			res.send( contact );
	} )
};

exports.addContact = function( req, res ){
    if ( typeof req.body.model === 'string' ){
        console.log( 'string' );
        var reqData = JSON.parse( req.body.model );
        var contactData = {
            first_name: reqData.first_name,
            last_name: reqData.last_name,
            cel: reqData.cel,
            phone_eme: reqData.phone_eme,
            rkr_mail: reqData.rkr_mail,
            user_mail: reqData.user_mail,
            skype: reqData.skype,
            birthday: reqData.birthday
        }
    
    }else{
        var contactData = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            cel: req.body.cel,
            phone_eme: req.body.phone_eme,
            rkr_mail: req.body.rkr_mail,
            user_mail: req.body.user_mail,
            skype: req.body.skype,
            birthday: req.body.birthday
        }
    }
	Contact.addContact( contactData, function( contact ){
			res.send(200, contact );
	} )
}


exports.editContact = function( req, res ){
	Contact.editContact( req.params.id, req, function(error, contact){
        console.log('contact res ', contact );
        res.send( contact );
	} )
}

exports.deleteContact = function( req, res ){
	Contact.deleteContact( req.params.id, function( error, contact){
        res.send( contact );
	} )
}
