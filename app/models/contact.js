var  config = require('../../config/config');
var mongo = require('mongodb');

    dbhost = "127.0.0.1",
    dbport = 27017,
    server = new mongo.Server( dbhost, dbport, {auto_reconnect: true} ),
    db = new mongo.Db( config.db, server ); 


db.open( function(error, db){
    if( error ){
        console.log( 'error al conectarse a la base de datos' );
    }else{
        console.log( 'conectados a la base de datos' );
        db.collection( 'contacts', function(error, collection){
            console.log('collecion')
            if ( error ){
                console.log( 'The contact collection doesn\'t exist. Creating it with sample data...' );
            }else{
                console.log(' entra a la collecion');
                /*collection.insert({name: 'prueba'});*/
            }
        } )
    }
} )



module.exports.findAll = function (){
     console.log( 'entro al modelo' );
     console.log( 'dbport', dbport );
     db.collection('contacts', function(err, collection) {
             collection.find().toArray(function(err, items) {
                         return items;
                     });
         });
}
module.exports.find = function ( id ){
        console.log( 'entro al find' );
        console.log( 'id', id );

        this.findAll();
}
