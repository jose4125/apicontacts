'use strict';

angular.module('apicontactsApp')
  .directive('editcontact', function () {
    return {
      templateUrl: 'views/editmodal.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        console.log( 'edit directive' );
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
