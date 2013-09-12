module.exports = function( app ){

	
	var contacts = require( '../app/controllers/contacts' );
	
	//home route
	app.get( '/', contacts.findAll );

	//find a contact route
	app.get( '/contact/:id', contacts.findById );

	//add a contact route
	app.post( '/add', contacts.addContact );

	//update a contact route
	app.put( '/contact/:id/edit', contacts.editContact );

	//update a contact route
	app.delete( '/contact/:id/delete', contacts.deleteContact );

};
