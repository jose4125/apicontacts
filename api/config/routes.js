module.exports = function( app ){

	
	var contacts = require( '../app/controllers/contacts' );
	
	//home route
	app.get( '/api/contacts', contacts.findAll );

	//find a contact route
	app.get( '/api/contact/:id', contacts.findById );

	//add a contact route
	app.post( '/api/contacts', contacts.addContact );

	//update a contact route
	app.put( '/api/contact/:id', contacts.editContact );

	//update a contact route
	app.delete( '/api/contact/:id', contacts.deleteContact );

};
