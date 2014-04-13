'use strict';

angular.module('apicontactsApp')
  .directive('deletecontact', function () {
    return {
      templateUrl: 'views/deletemodal.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        console.log( 'delete directive' );
        var modal = element.find( '#myModal' );
        modal.modal( 'show' );
        scope.$on("update-contact", function(event){
          console.log( 'fire on');
          $( '#myModal').modal( 'hide' );
         });
        modal.on('hidden.bs.modal', function (e) {
          console.log('[hide modal]', attrs.redirect);
          scope.$apply(attrs.redirect);
        });
      }
    };
  });
