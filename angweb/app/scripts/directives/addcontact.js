'use strict';

angular.module('apicontactsApp')
  .directive('addcontact', function ($location, $timeout) {
    return {
      templateUrl: 'views/addmodal.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the addcontact directive');
        var modal = element.find( '#myModal' );
        modal.modal( 'show' );
        scope.$on("save-contact", function(event){
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
