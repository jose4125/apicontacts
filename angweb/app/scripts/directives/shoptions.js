'use strict';

angular.module('apicontactsApp')
  .directive('shOptions', function () {
    return {
      // template: '<div></div>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        console.log('this is the shOptions directive');
        var parent = element.parent();
        // element.on( 'click', function(){
        //   console.log( 'click1' );
        // })
        scope.shOptions = function(){
          console.log( 'click' );
          if( parent.hasClass( 'contDataFin' )){
            parent.removeClass( 'contDataFin' );
          }else{
            $('.contDataFin').removeClass( 'contDataFin' );
            parent.toggleClass( 'contDataFin' );
          }
        }
      }
    };
  });
