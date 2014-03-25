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

    var cont;
    var newCont;
    function allContacts (){
      cont = $resource( ENV.localhost + '/contacts' );
    }
    function save ( contact, callback ){

      newCont = new cont( contact );
      console.log( '[save contact]', newCont );
      console.log( '[save contact]', contact );
      newCont.$save( function(){
        callback({status : true});
      });
    }

    // Public API here
    return {
      all: function () {
        allContacts();
        return cont.query();
      },
      create: function( contact, callback ){
        save( contact, callback );
        return newCont;
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
