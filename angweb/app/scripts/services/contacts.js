'use strict';

angular.module('apicontactsApp')
  // .factory('Contacts', function ( $http ) {
  //   // Service logic
  //   // ...

  //   var resContacts; 
  //   function allContacts (){
  //     $http.get( ENV.localhost + '/contacts' )
  //       .success(function ( data ){
  //         resContacts = data;
  //       });
  //   }

  //   // Public API here
  //   return {
  //     all: function () {
  //       console.log( '[fetch all]' );
  //       allContacts();
  //       return resContacts;
  //     }
  //   };
  // });

  .factory('Contacts', function ( $resource, $state ) {
    // Service logic
    // ...

    // var cont = $resource( ENV.localhost + '/contacts/:id' );
    var cont = $resource(ENV.localhost + '/contacts/:id', {id: '@_id'}, {
      query: {method:'GET', params:{id:''}, isArray:true},
      post: {method:'POST'},
      update: {method:'PUT'},
      remove: {method:'DELETE', params:{id:''}}
    });
    var newCont;
    var editContact;
    function allContacts (){
      // cont; 
      return cont.query()
    }
    function save ( contact, callback ){

      newCont = new cont( contact );
      console.log( '[save contact]', newCont );
      console.log( '[save contact]', contact );
      return newCont.$save( function(){
        callback({status : true});
      });
    }

    function getContact ( id ){
      console.log( 'factory edit', id );
       return editContact = cont.get({ id: id }); 
    }

    function update ( contact, callback ){
      console.log( 'contact', contact );
      cont.update( contact, function() {
        callback({status : true});
      });
    }

    function remove ( contact, callback ){
      console.log( 'contact', contact );
      cont.remove( {id: contact._id}, function() {
        callback({status : true});
      });
    }

    // Public API here
    return {
      all: function () {
        return allContacts();
      },
      create: function( contact, callback ){
        return save( contact, callback );
      },
      getContact: function( id ){
        return getContact( id );
      },
      update: function( contact, callback ){
        return update( contact, callback );
      },
      remove: function( contact, callback ){
        return remove( contact, callback );
      }
    };
  });

  // .factory('Contacts', function ( $http ) {
  //   // Service logic
  //   // ...
  //   function alll (callback){
  //     $http.get( ENV.localhost + '/contacts' )
  //       .success(function ( data ){
  //         callback(data);
  //       });
  //   }

  //   // Public API here
  //   return {
  //     all: function ( callback ) {
  //       console.log( '[fetch all]' );
  //       alll(function( contacts ){
  //         console.log('[data]', contacts );
  //         callback( contacts );
  //       });
  //     }
  //   };
  // });

  // .service('Contacts', function Contact( $resource ) {
  //   // AngularJS will instantiate a singleton by calling "new" on this function
  //   this.all = function () {
  //     var allContacts = $resource( ENV.localhost + '/contacts' );
  //     return allContacts.query();
  //   }
  // });
