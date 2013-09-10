module.exports = function(app){

	//all contacts route
	var contacts = require('../app/controllers/contacts');
	app.get('/', contacts.index);

	//find contact route
	app.get('/:id', contacts.find);
};
