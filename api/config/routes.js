module.exports = function( app ){

	
	var contacts = require( '../app/controllers/contacts' );
	
	//home route
	app.get( '/', contacts.findAll );

	//find a contact route
	app.get( '/contact/:id', contacts.findById );

};
